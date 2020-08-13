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

  // Phases
  const [breakLength, handleBreakLengthChange] = usePhase(5);
  const [sessionLength, handleSessionLengthChange] = usePhase(25);

  // Timer
  const [timerValue, setTimerValue] = usePhase(1500);

  return (
    <Paper className={classes.root}>
      <TimeControl
        label="break"
        value={breakLength}
        onArrowUpClick={() => handleBreakLengthChange(1)}
        onArrowDownClick={() => handleBreakLengthChange(-1)}
      />
      <TimeControl
        label="session"
        value={sessionLength}
        onArrowUpClick={() => handleSessionLengthChange(1)}
        onArrowDownClick={() => handleSessionLengthChange(-1)}
      />

      <Timer value={timerValue} phase="session" />
      <Controls />
    </Paper>
  );
}
