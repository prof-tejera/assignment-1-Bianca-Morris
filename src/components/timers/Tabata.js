import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimeInput from "../generic/TimeInput";
import Input from "../generic/Input";

const TimeInputWithLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: BubblegumSans;
`;

const RoundsWithLabel = styled.div`
  font-family: BubblegumSans;
  padding-left: 5px;
`;

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
        <TimeInputWithLabel>
          Work Time:
          <TimeInput />
        </TimeInputWithLabel>
        <TimeInputWithLabel>
          Rest Time:
          <TimeInput />
        </TimeInputWithLabel>
        <RoundsWithLabel>
          # of Rounds:
          <Input placeholder="1" />
        </RoundsWithLabel>
        <div>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Tabata;
