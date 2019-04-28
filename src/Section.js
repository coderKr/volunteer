import React, { Component } from "react";
import Question from "./Question";
import SectionInfo from "./SectionInfo.json";

class Section extends Component {
  state = {
    sections: SectionInfo,
    name: this.props.location.state.name,
    studentAnswers: [
      Array(25).fill(0),
      Array(23).fill(0),
      Array(26).fill(0),
      Array(25).fill(0)
    ]
  };

  onAnswerSelected = (e, qId, sId) => {
    let answers1 = [...this.state.studentAnswers];
    let ans = [...answers1[sId]];
    ans[qId - 1] = e.target.innerText;
    answers1[sId] = ans;
    this.setState({
      studentAnswers: answers1
    });
  };

  renderSubSection = (subsection, index) => {
    let subsections = [];
    for (let i = subsection.start; i <= subsection.end; i++) {
      subsections.push(
        <Question
          key={index + " " + i}
          sectionId={index}
          questionId={i}
          onAnswerSelected={e => this.onAnswerSelected(e, i, index)}
          answer={this.state.studentAnswers[index][i - 1]}
        />
      );
    }
    return <div className="subsections">{subsections}</div>;
  };

  renderSection = (section, index) => {
    return (
      <div className="sectionContainer">
        <div className="header">{section.name}</div>
        {section.subsections.map(subsection =>
          this.renderSubSection(subsection, index)
        )}
      </div>
    );
  };

  handleSubmit = () => {
    this.props.history.push({
      pathname: `/results`,
      state: { studentAnswers: this.state.studentAnswers }
    });
  };

  render() {
    const { sections } = this.state;
    return (
      <div>
        <button onClick={this.handleSubmit}>Submit Answers</button>
        <div className="container">{sections.map(this.renderSection)}</div>
      </div>
    );
  }
}

export default Section;
