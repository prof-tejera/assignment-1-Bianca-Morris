import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



class Countdown extends React.Component {
  render() {
    return (
      <React.Fragment>
        <H1>Countdown</H1>
        <DisplayTime />
        <TimeInputLabel>
          Start Time:
          <TimeInput />
        </TimeInputLabel>
        <ButtonSpacer>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default Countdown;
