import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
        <DisplayTime />
        <Button>START</Button>
        <Button>RESET</Button>
      </div>
    );
  }
}

export default Stopwatch;
