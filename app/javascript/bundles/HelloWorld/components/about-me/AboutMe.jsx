import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Past from './Past';
import Present from './Present';
import Future from './Future';

const AboutMe = () => {
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

        <Route path="/about-me/past" component={Past} />
        <Route path="/about-me/present"  component={Present} />
        <Route path="/about-me/future"  component={Future} />
      </div>
    </Router>
    </main>
  );
}

export default AboutMe;
