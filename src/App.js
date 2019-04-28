import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./Section";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "./Results";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/answers" component={Section} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
