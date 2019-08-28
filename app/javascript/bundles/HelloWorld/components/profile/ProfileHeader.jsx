import React from 'react';

const ProfileHeader = (props) => {
  let profile = props.profile,
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
  };
  return (
    <header id="profile-header" role="banner">
      <a href={`/profiles/${profile.id}/edit`}>Edit</a>
      <button onClick={deleteProfile}>Reset Profile</button>
      <h1>{profile.full_name}</h1>
      <h3>{profile.email}</h3>
      <h3>{profile.phone_number}</h3>
    </header>
  );
}

export default ProfileHeader;
