import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";

const LessMarginH1 = styled(H1)`
  margin: 5px;
`;

class Tabata extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LessMarginH1>Tabata</LessMarginH1>
        <DisplayRounds currRound={0} totalRounds={1}/>
        <DisplayTime />
        <TimeInputLabel>
          Work Time:
          <TimeInput />
        </TimeInputLabel>
        <TimeInputLabel>
          Rest Time:
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

export default Tabata;
