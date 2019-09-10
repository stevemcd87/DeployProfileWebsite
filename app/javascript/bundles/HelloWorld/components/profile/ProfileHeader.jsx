import React from "react";

const ProfileHeader = props => {
  let profile = props.profile,
    signedIn = props.signedIn,
    setProfileState = props.setProfileState,
    deleteProfile = () => {
      let confirmed = confirm("Are you sure?");
      if (confirmed) {
        fetch(`/profiles/${profile.id}`, {
          method: "delete"
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then(res => {
            setProfileState(res.profile);
          })
          .catch(error => {
            console.error("error", error);
          });
      }
      return false;
    };
  return (
    <header role="banner">
      {signedIn && (
        <div className="hidden" id="profile-header-buttons">
          <a
            href={`/profiles/${profile.id}/edit`}
            className="profile-header-button"
          >
            Edit Profile
          </a>
          <a href="#" className="profile-header-button" onClick={deleteProfile}>
            Reset Profile
          </a>
        </div>
      )}
      <div id="profile-display">
        <h1>{profile.full_name}</h1>
        <h3>{profile.email}</h3>
        <h3>{profile.phone_number}</h3>
      </div>
    </header>
  );
};

export default ProfileHeader;
