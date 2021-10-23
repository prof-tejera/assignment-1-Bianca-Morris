import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimeInput from "../generic/TimeInput";
import Input from "../generic/Input";

class Tabata extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tabata</h1>
        <DisplayRounds currRound={0} totalRounds={1}/>
        <DisplayTime />
        <div>
          Work Time:
          <TimeInput />
        </div>
        <div>
          Rest Time:
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

export default Tabata;
