import React from "react";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <H1>Stopwatch</H1>
        <DisplayTime />
        <ButtonSpacer>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
