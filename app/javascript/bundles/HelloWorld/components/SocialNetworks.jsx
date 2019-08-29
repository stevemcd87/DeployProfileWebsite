import React from 'react';

const SocialNetworks = (props) => {
  let profile = props.profile,
    socialNetworks = profile.social_networks;
  console.log(props);
  return (
    <div className="social-networks" role="links">
      {socialNetworks.map((socialNetwork,ind)=>{
        return (
          <div key={ind}>
            <p>{socialNetwork.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default SocialNetworks;
