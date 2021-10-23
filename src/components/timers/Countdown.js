import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput from "../generic/TimeInput";

class Countdown extends React.Component {
  render() {
    return (
      <div>
        <h1>Countdown</h1>
        <DisplayTime />
        <div>
          Start Time:
          <TimeInput />
        </div>
        <Button>START</Button>
        <Button>RESET</Button>
      </div>
    );
  }
}

export default Countdown;
