import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LifeStory from './LifeStory';

const AboutMe = (props) => {
  let profile = props.profile,
    setProfileState = props.setProfileState,
    signedIn = props.signedIn,
    makeActive = props.makeActive,
    lifeStory = profile.life_story,
    deleteLifeStories = () => {
      let confirmed = confirm("Are you sure?");
      if (confirmed) {
        fetch(`/profiles/${profile.id}/life_stories/${lifeStory.id}`, {
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
    console.log(profile);
    console.log(lifeStory);
  return (
    <main id="about-me" role="main">
    <Router>
      <div>

        {(!lifeStory && signedIn) && <a href={`/profiles/${profile.id}/life_stories/new`} className="life-story-button">Create Your Life Story</a> }
        {lifeStory &&
          <nav role="navigation">
            <ul id='about-me-nav'>
            {signedIn &&
              <li>
                <a href={`/profiles/${profile.id}/life_stories/${lifeStory.id}/edit`}>Edit</a>
              </li>
            }
              <li>
                <Link to="/about-me/past" onClick={(e)=>makeActive("about-me-nav", e, 'active-life-story')} >Past</Link>
              </li>
              <li className="active-life-story">
                <Link to="/about-me/present" onClick={(e)=>makeActive("about-me-nav", e, 'active-life-story')} >Present</Link>
              </li>
              <li>
                <Link to="/about-me/future" onClick={(e)=>makeActive("about-me-nav", e, 'active-life-story')} >Future</Link>
              </li>
              {signedIn &&
                <li>
                  <a href="#" className="life-story-button" onClick={deleteLifeStories}>Reset</a>
                </li>
              }
            </ul>
          </nav>}

        <Route path="/about-me/past" component={ () => <LifeStory text={lifeStory["past"]} signedIn={signedIn} />} />
        <Route path="/about-me/present"  component={ () => <LifeStory text={lifeStory["presently"]} signedIn={signedIn} />} />
        <Route path="/about-me/future"  component={ () => <LifeStory text={lifeStory["future"]} signedIn={signedIn} />} />
      </div>
    </Router>
    </main>
  );
}

export default AboutMe;
