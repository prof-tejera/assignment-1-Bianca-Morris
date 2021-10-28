import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput from "../generic/TimeInput";


const TimeInputWithLabel = styled.div`
  display: flex;
  align-items: center;
`;

class Countdown extends React.Component {
  render() {
    return (
      <React.Fragment>
        <H1>Countdown</H1>
        <DisplayTime />
        <TimeInputWithLabel>
          Start Time:
          <TimeInput />
        </TimeInputWithLabel>
        <div>
          <Button>START</Button>
          <Button variant="secondary">RESET</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Countdown;
