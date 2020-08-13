import React, { useState, useRef, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import usePhase from '../hooks/usePhase';
import TimeControl from './TimeControl';
import Controls from './Controls';
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

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [activePhase, setActivePhase] = useState('session');
  const [timerValue, setTimerValue] = useState(1500);
  const [timerState, setTimerState] = useState('stopped');
  const [intervalId, setIntervalId] = useState(null);

  const handleBreakIncrement = () => {
    if (breakLength === 60 || timerState === 'running') return;

    setBreakLength((prevBreakLength) => prevBreakLength + 1);
  };

  const handleBreakDecrement = () => {
    if (breakLength === 1 || timerState === 'running') return;

    setBreakLength((prevBreakLength) => prevBreakLength - 1);
  };

  const handleSessionIncrement = () => {
    if (sessionLength === 60 || timerState === 'running') return;

    setSessionLength((prevSessionLength) => prevSessionLength + 1);
    setTimerValue((sessionLength + 1) * 60);
  };

  const handleSessionDecrement = () => {
    if (sessionLength === 1 || timerState === 'running') return;

    setSessionLength((prevSessionLength) => prevSessionLength - 1);
    setTimerValue((sessionLength - 1) * 60);
  };

  const handleStartStopClick = () => {
    if (timerState === 'running') {
      setTimerState('stopped');

      clearInterval(intervalId);
    } else {
      setTimerState('running');
      setIntervalId(
        setInterval(() => {
          setTimerValue((prevTimerValue) => prevTimerValue - 1);
        }, 1000)
      );
    }
  };

  useEffect(() => {
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
  const handleResetClick = () => {
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
      <TimeControl
        label="break"
        value={breakLength}
        onArrowUpClick={handleBreakIncrement}
        onArrowDownClick={handleBreakDecrement}
      />
      <TimeControl
        label="session"
        value={sessionLength}
        onArrowUpClick={handleSessionIncrement}
        onArrowDownClick={handleSessionDecrement}
      />

      <Timer value={timerValue} phase="session" />
      <Controls
        timerState={timerState}
        onStartStopClick={handleStartStopClick}
        onResetClick={handleResetClick}
      />
    </Paper>
  );
}
