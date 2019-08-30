import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import AboutMe from './about-me/AboutMe';
import SocialNetworks from './SocialNetworks';
import Blog from './Blog';
import ProfileHeader from './profile/ProfileHeader';

export default class HelloWorld extends React.Component {
  static propTypes = {
    profile: PropTypes.object, // .isRequired - this is passed from the Rails view
  };
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { profile: this.props.profile };
  }

  setProfileState = (profile) => {
    this.setState({profile: profile})
  }

  render() {
    let profile = this.state.profile,
      socialNetworks = profile && profile.social_networks.length > 0 ? profile.social_networks : null;
    console.log(this.state);
    return (
      <div id="hello-world">
        {!profile && <a href="/profiles/new">Create Profile</a>}
        {profile &&
          <div>
            <ProfileHeader profile={profile} setProfileState={this.setProfileState} />
            {!socialNetworks && <a href={`/profiles/${profile.id}/social_networks/new`}>Add SocialNetwork</a>}
            {socialNetworks && <SocialNetworks profile={profile} />}
            <Router>
              <div>

                <nav id="hello-world-nav" role="navigation">
                  <ul>
                    <li>
                      <Link to="/about-me">About Me</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </nav>

                <Route path="/about-me/" component={ () => <AboutMe profile={profile} setProfileState={this.setProfileState} /> } />
                <Route path="/blogs/" component={Blog} />
              </div>
            </Router>
          </div>}
      </div>
    );
  }
}
