import React, { useState, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import Control from './Control';
import Buttons from './Buttons';
import Timer from './Timer';
import Session from './Session';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
  },
});

export default function PomodoroClock() {
  const classes = useStyles();

  const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
      const handleSwitch = () => {
          if (timerLabel === 'Session') {
              setTimerLabel('Break');
              setSecondsLeft(breakLength * 60);
          } else if (timerLabel === 'Break') {
              setTimerLabel('Session');
              setSecondsLeft(sessionLength * 60);
          }
      }

      let countdown = null;
      if (timerRunning && secondsLeft > 0) {
          countdown = setInterval(() => {
              setSecondsLeft(secondsLeft - 1);
          }, 1000);
      } else if (timerRunning && secondsLeft === 0) {
          countdown = setInterval(() => {
              setSecondsLeft(secondsLeft - 1);
          }, 1000);
         
          handleSwitch();
      } else {
          clearInterval(countdown);
      }
      return () => clearInterval(countdown);
  },
  [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength]);

  const incrementSession = () => {
    if (!timerRunning && sessionLength < 60){
      setSessionLength(sessionLength + 1)
      setSecondsLeft((sessionLength + 1) * 60);
    }
  }
  const decrementSession = () => {
    if (!timerRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setSecondsLeft((sessionLength - 1) * 60);
    }
  }
  const incrementBreak = () => {
    if (!timerRunning && breakLength < 60){
      setBreakLength(breakLength + 1)
    }
  }
  const decrementBreak = () => {
    if (!timerRunning && breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const handleStart = () => {
    setTimerRunning(true);
}

const handleStop = () => {
    setTimerRunning(false);
}

const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setSecondsLeft(25 * 60);
    setTimerLabel('Session');
    setTimerRunning(false);
    
}


  return (
    <Paper className={classes.root}>
      <Control
        label="break"
        value={breakLength}
        onArrowUpClick={incrementBreak}
        onArrowDownClick={decrementBreak}
      />
      <Session
        sessionLength={sessionLength}
        onArrowUpClick={incrementSession}
        onArrowDownClick={decrementSession}
      />

      <Timer value={secondsLeft} phase={timerLabel} />
      <Buttons
        phase={timerLabel}
        timerIsRunning={timerRunning}
        onStartStopClick={timerRunning ? handleStop : handleStart}
        onResetClick={handleReset}
      />
    </Paper>
  );
}
