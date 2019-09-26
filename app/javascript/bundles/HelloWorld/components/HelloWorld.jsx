import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AboutMe from "./about-me/AboutMe";
import SocialNetworks from "./SocialNetworks";
import Projects from "./Projects";
import Blog from "./Blog";
import ProfileHeader from "./profile/ProfileHeader";

export default class HelloWorld extends React.Component {
  static propTypes = {
    profile: PropTypes.object,
    signedIn: PropTypes.bool.isRequired // .isRequired - this is passed from the Rails view
  };
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

    this.state = {
      profile: this.props.profile,
      signedIn: this.props.signedIn
    };
  }

  setProfileState = profile => {
    this.setState({
      profile: profile
    });
  };

  makeActive = (unorderedListId, event, activeClassName) => {
    let unorderedList = document.getElementById(unorderedListId),
      elementClicked = event.target;
    for (let i = 0; i < unorderedList.children.length; i += 1) {
      let child = unorderedList.childNodes[i]
      child.classList.remove(activeClassName)
    }
    elementClicked.parentNode.classList.add(activeClassName);
  }

  render() {
    let profile = this.state.profile,
      signedIn = this.state.signedIn,
      pathName = window.location.pathname.split('/'),
      socialNetworks =
        profile && profile.social_networks.length > 0
          ? profile.social_networks
          : null,
      displayActive = (sectionName, className) => {
        return sectionName === pathName[1] ? className : '';
      }
    console.log(this.state);
    return (
      <div id="hello-world">

        {!profile && <a href="/profiles/new"> Create Profile </a>}
        {profile && (
          <div>
            <ProfileHeader
              signedIn={signedIn}
              profile={profile}
              setProfileState={this.setProfileState}
            />
            {!socialNetworks && (
              <a href={`/profiles/${profile.id}/social_networks/new`}>

                Add SocialNetwork
              </a>
            )}
            {socialNetworks && (
              <SocialNetworks profile={profile} signedIn={signedIn} />
            )}
            <Router>
              <div id="router-div">
                <nav id="hello-world-nav" role="navigation">
                  <ul id="nav-ul">
                    <li className={displayActive('about-me', "active")}>
                      <Link to="/about-me" onClick={(e)=>this.makeActive("nav-ul", e, "active")}> About Me </Link>
                    </li>
                    <li className={displayActive('portfolio', "active")}>
                      <Link to="/portfolio" onClick={(e)=>this.makeActive("nav-ul", e, "active")}> Portfolio </Link>
                    </li>
{     //             <li className={displayActive('blogs', "active")}>
      //              <Link to="/blogs" onClick={(e)=>this.makeActive("nav-ul", e, "active")}> Blogs </Link>
    //              </li>
  }
                  </ul>
                </nav>
                <Route
                  path="/about-me/"
                  component={() => (
                    <AboutMe
                      profile={profile}
                      setProfileState={this.setProfileState}
                      signedIn={signedIn}
                      makeActive={this.makeActive}
                    />
                  )}
                />
                {//<Route path="/blogs/" component={Blog} />
                }
                <Route
                  path="/portfolio/"
                  component={() => (
                    <Projects
                      profile={profile}
                      setProfileState={this.setProfileState}
                    />
                  )}
                />
              </div>
            </Router>
          </div>
        )}
      </div>
    );
  }
}
