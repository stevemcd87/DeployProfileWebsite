import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LifeStory from './LifeStory';

const AboutMe = (props) => {
  let profile = props.profile,
    lifeStory = profile.life_story;
    console.log(profile);
  return (
    <main id="about-me" role="main">
    <Router>
      <div>
        {!lifeStory && <a href={`/profiles/${profile.id}/life_stories/new`}>Create Your Life Story</a> }
        {lifeStory &&
          <nav role="navigation">
            <ul>
              <li>
                <a href={`/profiles/${profile.id}/life_stories/${lifeStory.id}/edit`}>Edit</a>
              </li>
              <li>
                <Link to="/about-me/past">Past</Link>
              </li>
              <li>
                <Link to="/about-me/present">Present</Link>
              </li>
              <li>
                <Link to="/about-me/future">Future</Link>
              </li>
            </ul>
          </nav>}

        <Route path="/about-me/past" component={ () => <LifeStory text={lifeStory["past"]} />} />
        <Route path="/about-me/present"  component={ () => <LifeStory text={lifeStory["present"]} />} />
        <Route path="/about-me/future"  component={ () => <LifeStory text={lifeStory["future"]} />} />
      </div>
    </Router>
    </main>
  );
}

export default AboutMe;
