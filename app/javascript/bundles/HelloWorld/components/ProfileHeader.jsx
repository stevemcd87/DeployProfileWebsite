import React from 'react';

const ProfileHeader = (props) => {
  let profile = props.profile;
  return (
    <header id="profile-header" role="banner">
      <h1>{profile.full_name}</h1>
      <h3>{profile.email}</h3>
      <h3>{profile.phone_number}</h3>
    </header>
  );
}

export default ProfileHeader;
