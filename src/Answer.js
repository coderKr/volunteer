import React, { Component } from "react";
class Answer extends Component {
  render() {
    return (
      <div
        className={`answerBubble ${this.props.active ? "active" : ""}`}
        onClick={this.props.onAnswerSelected}
      >
        {this.props.answer}
      </div>
    );
  }
}

export default Answer;
