import React, { useState } from "react";
import styled from "styled-components";

import Panel from "../components/generic/Panel";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimerSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  justify-content: center;
  background: linear-gradient(143deg, #617cb7 0%, rgb(35, 48, 77) 100%);
  overflow: visible;
  border-radius: 20px 0 0 20px;
  padding: 30px;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div`
  background-color: #2b3254;
  color: #459fd3;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
`;

const ActiveTimerTitle = styled(TimerTitle)`
  background-color: #61cbf5;
  color: #ffffff;
`;

function App() {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  const [ timerIdx, setTimerIdx ] = React.useState(0);

  return (
    <Timers>
      <TimerSelector >
      {timers.map((timer, idx) => {
        if (timerIdx === idx) {
          return <ActiveTimerTitle key={timer.title} onClick={() => setTimerIdx(idx)}>{timer.title}</ActiveTimerTitle>;
        }
        return <TimerTitle key={timer.title} onClick={() => setTimerIdx(idx)}>{timer.title}</TimerTitle>;
      })}
      </TimerSelector>
      <Panel>
        {timers[timerIdx].C}
      </Panel>
    </Timers>
  );
}

export default App;
