import React, { Component } from "react";
import Section from "./Section";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    name: ""
  };

  onSubmit = () => {
    this.props.history.push({
      pathname: `/answers`,
      state: { name: this.state.name }
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Enter your name: </div>
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default Home;
