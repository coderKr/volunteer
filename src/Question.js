import React, { Component } from "react";
import Answer from "./Answer";
class Question extends Component {
  state = {
    answer: "None",
    activeIndex: "A"
  };

  renderAnswerOptions = key => {
    return (
      <Answer
        key={key}
        answerType={key}
        answer={key}
        active={this.props.answer === key}
        onAnswerSelected={this.props.onAnswerSelected}
        questionId={this.props.questionId}
        sectionId={this.props.sectionId}
      />
    );
  };

  render() {
    let answerOptions = ["A", "B", "C", "D", "E"];
    const { questionId } = this.props;
    return (
      <div className="container">
        <div className="question">{questionId}</div>
        <div className="answerOptions">
          {answerOptions.map(this.renderAnswerOptions)}
        </div>
      </div>
    );
  }
}

export default Question;
