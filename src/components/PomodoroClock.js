import React, { useState, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import Control from './Control';
import Buttons from './Buttons';
import Timer from './Timer';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
  },
});

export default function PomodoroClock() {
  const classes = useStyles();

  // SESSION
  const [sessionLength, setSessionLength] = useState(25);
  const incrementSessionLength = () => {
    if (sessionLength === 60 || timerState === 'running') return;

    setSessionLength((prevSessionLength) => prevSessionLength + 1);
    setTimerValue((sessionLength + 1) * 60);
  };
  const decrementSessionLength = () => {
    if (sessionLength === 1 || timerState === 'running') return;

    setSessionLength((prevSessionLength) => prevSessionLength - 1);
    setTimerValue((sessionLength - 1) * 60);
  };
  
  // BREAK
  const [breakLength, setBreakLength] = useState(5);
  const incrementBreakLength = () => {
    if (breakLength === 60 || timerState === 'running') return;

    setBreakLength((prevBreakLength) => prevBreakLength + 1);
  };
  const decrementBreakLength = () => {
    if (breakLength === 1 || timerState === 'running') return;

    setBreakLength((prevBreakLength) => prevBreakLength - 1);
  };
  
  // TIMER
  const [timerValue, setTimerValue] = useState(1500);
  const [activePhase, setActivePhase] = useState('session');
  const [timerState, setTimerState] = useState('stopped');
  const [intervalId, setIntervalId] = useState(null);

  // Start/Stop button click
  const handleStartStopClick = () => {
    if (timerState === 'running') {
      setTimerState('stopped');
      clearInterval(intervalId);
    } else {
      setTimerState('running');

      // Set interval and store its ID in intervalId piece of state
      setIntervalId(
        setInterval(() => {
          setTimerValue((prevTimerValue) => prevTimerValue - 1);
        }, 1000)
      );
    }
  };

  useEffect(() => {
    // When timer reaches zero
    // Clear the interval, update active phase and timer value
    if (timerValue === 0) {
      if (activePhase === 'session') {
        setTimerValue(sessionLength * 60);
        setActivePhase('break');
      } else {
        setTimerValue(breakLength * 60);
        setActivePhase('session');
      }
      clearInterval(intervalId);
    }
  }, [setTimerValue, timerValue, activePhase, intervalId, sessionLength, breakLength])

  // Reset
  const resetTimer = () => {
    if (timerState === 'stopped') return;

    clearInterval(intervalId);
    setTimerState('stopped');
    setActivePhase('session');
    setBreakLength(5);
    setSessionLength(25);
    setTimerValue(sessionLength * 60);
  };

  return (
    <Paper className={classes.root}>
      <Control
        label="break"
        value={breakLength}
        onArrowUpClick={incrementBreakLength}
        onArrowDownClick={decrementBreakLength}
      />
      <Control
        label="session"
        value={sessionLength}
        onArrowUpClick={incrementSessionLength}
        onArrowDownClick={decrementSessionLength}
      />

      <Timer value={timerValue} phase="session" />
      <Buttons
        phase={activePhase}
        timerState={timerState}
        onStartStopClick={handleStartStopClick}
        onResetClick={resetTimer}
      />
    </Paper>
  );
}
