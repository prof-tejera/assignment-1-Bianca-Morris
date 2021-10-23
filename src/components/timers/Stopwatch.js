import React from "react";

import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Stopwatch</h1>
        <DisplayTime />
        <div>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
