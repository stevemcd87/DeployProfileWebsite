import React from 'react';

const SocialNetworks = (props) => {
  let profile = props.profile,
    socialNetworks = profile.social_networks,
    deleteSocialNetwork = (socialNetworkId) => {
      let confirmed = confirm("Are you sure?");
      if (confirmed) {
        fetch(`/profiles/${profile.id}/social_networks/${socialNetworkId}`, {
          method: "delete"
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then(res => {
            window.location.href = "/about-me/";
            // return false
          })
          .catch(error => {
            console.error("error", error);
          });
      }
      return false
    };
  console.log(props);
  return (
    <div className="social-networks" role="links">
      <a href={`/profiles/${profile.id}/social_networks/new`}>Add SocialNetwork</a>
      {socialNetworks.map((socialNetwork,ind)=>{
        return (
          <div key={ind}>
            <a href={`/profiles/${profile.id}/social_networks/${socialNetwork.id}/edit`} target="_blank">Edit Social Network</a>
            <a href={socialNetwork.url_link} target="_blank"><i className={`fa fa-${socialNetwork.name}`}></i></a>
            <a href="#"  onClick={()=> deleteSocialNetwork(socialNetwork.id)}>Remove Social Network</a>
          </div>
        )
      })}
    </div>
  );
}

export default SocialNetworks;
