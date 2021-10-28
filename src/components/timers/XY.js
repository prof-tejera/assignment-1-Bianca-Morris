import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";


class XY extends React.Component {
  render() {
    return (
      <React.Fragment>
        <H1>XY</H1>
        <DisplayRounds />
        <DisplayTime />
        <TimeInputLabel>
          Start Time:
          <TimeInput />
        </TimeInputLabel>
        <RoundsLabel>
          # of Rounds:
          <Input placeholder="1" />
        </RoundsLabel>
        <ButtonSpacer>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default XY;
