import React, { useState } from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimerSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 433px;
  height: 588px;
  justify-content: center;
  background: linear-gradient(143deg, #617cb7 0%, rgb(35, 48, 77) 100%);
  overflow: visible;
  border-radius: 20px 0 0 20px;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div``;

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
      {timers.map((timer, idx) => (
        <TimerTitle key={timer.title} onClick={() => setTimerIdx(idx)}>{timer.title}</TimerTitle>
      ))}
      </TimerSelector>
      {timers[timerIdx].C}
    </Timers>
  );
}

export default App;
