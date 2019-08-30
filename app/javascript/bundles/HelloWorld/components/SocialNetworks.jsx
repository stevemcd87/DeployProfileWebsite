import React from 'react';

const SocialNetworks = (props) => {
  let profile = props.profile,
    socialNetworks = profile.social_networks;
  console.log(props);
  return (
    <div className="social-networks" role="links">
      <a href={`/profiles/${profile.id}/social_networks/new`}>Add SocialNetwork</a>
      {socialNetworks.map((socialNetwork,ind)=>{
        return (
          <div key={ind}>
            <a href={socialNetwork.url_link} target="_blank"><i class={`fa fa-${socialNetwork.name}`}></i></a>
            <a href={`/profiles/${profile.id}/social_networks/${socialNetwork.id}/edit`} target="_blank">Edit Social Network</a>
          </div>
        )
      })}
    </div>
  );
}

export default SocialNetworks;
