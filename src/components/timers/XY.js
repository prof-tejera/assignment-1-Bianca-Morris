import React from "react";
import styled from "styled-components";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimeInput from "../generic/TimeInput";
import Input from "../generic/Input";


const TimeInputWithLabel = styled.div`
  display: flex;
  align-items: center;
`;

class XY extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>XY</h1>
        <DisplayRounds />
        <DisplayTime />
        <TimeInputWithLabel>
          Start Time:
          <TimeInput />
        </TimeInputWithLabel>
        <TimeInputWithLabel>
          # of Rounds:
          <Input placeholder="1" />
        </TimeInputWithLabel>
        <div>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default XY;
