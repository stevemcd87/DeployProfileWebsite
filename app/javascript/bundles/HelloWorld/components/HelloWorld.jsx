import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import AboutMe from './about-me/AboutMe';
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

  createProfile = () => {
    let csrfToken = document.querySelector("[name='csrf-token']").content;
    fetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        profile: {
          first_name: "steve",
          middle_name: "sean",
          last_name: "mcdonald",
          email: "hey",
          phone_number: "555-6969"
        }
      }),
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("response");
      console.log(response);
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error("error", error);
    });
  }

  setProfileState = (profile) => {
    this.setState({profile: profile})
  }

  render() {
    let profile = this.state.profile;
    console.log(this.state);
    return (
      <div id="hello-world">
        {!profile && <a href="/profiles/new">Create Profile</a>}
        {profile && <ProfileHeader profile={profile} setProfileState={this.setProfileState} />}
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

            <Route path="/about-me/" component={AboutMe} />
            <Route path="/blogs/" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}
