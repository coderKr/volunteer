import React, { Component } from "react";
import AnswerKey from "./AnswerKey.json";
import SectionInfo from "./SectionInfo.json";

class Results extends Component {
  LSAT = {
    101: 180,
    100: 180,
    99: 180,
    98: 179,
    97: 178,
    96: 177,
    96: 176,
    95: 175,
    94: 174,
    93: 173,
    92: 172,
    91: 171,
    90: 170,
    89: 170,
    88: 169,
    87: 168,
    86: 167,
    85: 167,
    84: 166,
    83: 165,
    82: 165,
    81: 164,
    80: 163,
    79: 163,
    78: 162,
    77: 162,
    76: 161,
    75: 160,
    74: 160,
    73: 160,
    72: 159,
    71: 158,
    70: 158,
    69: 157,
    68: 156,
    67: 156,
    66: 155,
    65: 155,
    64: 154,
    63: 154,
    62: 153,
    61: 152,
    60: 152,
    59: 151,
    58: 151,
    57: 150,
    56: 149,
    55: 149,
    54: 148,
    53: 148,
    52: 147,
    51: 146,
    50: 146,
    49: 145,
    48: 145,
    47: 144,
    46: 143,
    45: 143,
    44: 142,
    43: 141,
    42: 141,
    41: 140,
    40: 139,
    39: 139,
    38: 138,
    37: 137,
    36: 137,
    35: 136,
    34: 135,
    33: 135,
    32: 134,
    31: 133,
    30: 132,
    29: 132,
    28: 131,
    27: 130,
    26: 129,
    25: 128,
    24: 127,
    23: 126,
    22: 126,
    21: 125,
    20: 124,
    19: 123,
    18: 122,
    17: 121,
    16: 120,
    15: 120,
    14: 120,
    13: 120,
    12: 120,
    11: 120,
    10: 120,
    9: 120,
    8: 120,
    7: 120,
    6: 120,
    5: 120,
    4: 120,
    3: 120,
    2: 120,
    1: 120,
    0: 120
  };
  state = {
    answers: this.props.location.state.studentAnswers,
    scoreSection: Array(4).fill(0)
  };

  componentDidMount() {
    this.calculateScore();
  }

  calculateScore = () => {
    let total = 0;
    let allQues = 0;
    const { scoreSection } = this.state;
    this.state.answers.forEach((section, index) => {
      section.forEach((ans, i) => {
        if (ans === AnswerKey[index].answers[i]) {
          total++;
          scoreSection[index]++;
        }
      });
      allQues += parseInt(AnswerKey[index].numberOfQues, 10);
    });
    this.setState({
      total,
      allQues,
      scoreSection
    });
  };
  render() {
    const { total, allQues, scoreSection } = this.state;
    console.log(scoreSection);
    return (
      <div>
        <div>
          Score: {total}/{allQues}
        </div>
        LSAT: {this.LSAT[total]}
        <div>
          {scoreSection.map((score, index) => {
            return <div>{SectionInfo[index].name + " : " + score}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Results;
