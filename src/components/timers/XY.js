import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimeInput from "../generic/TimeInput";
import Input from "../generic/Input";

class XY extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>XY</h1>
        <DisplayRounds />
        <DisplayTime />
        <div>
          Start Time:
          <TimeInput />
        </div>
        <div>
          # of Rounds:
          <Input placeholder="1" />
        </div>
        <Button>START</Button>
        <Button>RESET</Button>
      </React.Fragment>
    );
  }
}

export default XY;
