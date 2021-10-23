import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Stopwatch</h1>
        <DisplayTime />
        <Button>START</Button>
        <Button>RESET</Button>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
