import React, { useState, useRef, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';

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

  // BREAK
  const [breakLength, setBreakLength] = useState(5);
  const handleBreakLengthChange = (value) => {
    if (value <= 0 || value > 60) return;
    setBreakLength(value);
  };

  // SESSION
  const [sessionLength, setSessionLength] = useState(25);
  const handleSessionLengthChange = (value) => {
    if (value <= 0 || value > 60) return;

    // Update both session and timer
    setSessionLength(value);
    setTimer(value * 60);
  };

  // PHASE break or session
  
  // TIMER in seconds
  const [phase, setPhase] = useState('session');
  const [timerState, setTimerState] = useState('stopped');
  const [timer, setTimer] = useState(sessionLength * 60);
  const [intervalId, setIntervalId] = useState(null);

  const handleStartClick = () => {
    if (intervalId) return;
    setPhase('running');

    setIntervalId(setInterval(() => {
      decrementTimer();
    }, 1000))
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
      setPhase('stopped');
    }
  }, [timer, intervalId])

  

  const handlePauseClick = () => {
    decrementTimer();
  };

  const handleStopClick = () => {
    clearInterval(intervalId);
    setPhase('stopped');

    setTimer(sessionLength * 60);
  };


  function decrementTimer() {
    setTimer(timer => timer - 1);
  }

  return (
    <Paper className={classes.root}>
      <TimeControl
        label="break"
        value={breakLength}
        onArrowClick={handleBreakLengthChange}
      />
      <TimeControl
        label="session"
        value={sessionLength}
        onArrowClick={handleSessionLengthChange}
      />
      <Timer phase={phase} value={mmss(timer)} />
      <Controls
        onStartClick={handleStartClick}
        onPauseClick={handlePauseClick}
        onStopClick={handleStopClick}
        phase={phase}
      />
    </Paper>
  );
}

// Format seconds 
function mmss(seconds) {
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${minutes}:${seconds}`;
}