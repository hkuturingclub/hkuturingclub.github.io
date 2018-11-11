import React from 'react';
import About from './features/about';
import Team from './features/team';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={About} />
          <Route path="/team" component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;
