import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import AboutMe from './about-me/AboutMe';
import Blog from './Blog';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  render() {
    return (
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
    );
  }
}
