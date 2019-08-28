import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LifeStory from './LifeStory';

const AboutMe = (props) => {
  let profile = props.profile,
    lifeStory = profile.life_story,
    id = profile.id;
    console.log(profile);
  return (
    <main id="about-me" role="main">
    <Router>
      <div>
        <nav role="navigation">
          <ul>
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
        </nav>
        {!lifeStory && <a href={`/profiles/${id}/life_stories/new`}>Create Your Life Story</a> }
        <Route path="/about-me/past" component={ () => <LifeStory text={lifeStory["past"]} />} />
        <Route path="/about-me/present"  component={ () => <LifeStory text={lifeStory["present"]} />} />
        <Route path="/about-me/future"  component={ () => <LifeStory text={lifeStory["future"]} />} />
      </div>
    </Router>
    </main>
  );
}

export default AboutMe;
