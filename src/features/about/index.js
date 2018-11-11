import React from "react";
import logo from '../../logo.svg';

class About extends React.Component {
  render() {
    return (
      <div>
      <h1>About Chi Sun Turing Club</h1>
      <img src={logo} alt="Logo" className="App-logo"/>
      <p>Chi Sun Turing Club is a student initiative in Chi Sun College of University of Hong Kong aiming to improve student life using technology.</p>
      </div>
    )
  }
}

export default About;
