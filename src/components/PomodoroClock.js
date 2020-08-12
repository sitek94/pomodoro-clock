import React, { useState, useRef, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { checkRange } from '../util';
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
  const handleBreakChange = (value) => {
    if (checkRange(breakLength + value)) {
      setBreakLength(brkLength => brkLength + value);
    }
  }
  

  

  // TIMER
  /* const [timerValue, setTimerValue] = useState(1500);
  const [pomodoroPhase, setPomodoroPhase] = useState('session');
  useEffect(() => {
    setTimerValue(
      pomodoroPhase === 'session' ? sessionLength * 60 : breakLength * 60
    );
  }, [sessionLength, breakLength, pomodoroPhase]); */

  return (
    <Paper className={classes.root}>
      <TimeControl
        label="break"
        value={breakLength}
        onIncrement={() => handleBreakChange(1)}
        onDecrement={() => handleBreakChange(-1)}
      />
      <TimeControl
        label="session"
 
      />
      {/* <Timer value={timerValue} phase={pomodoroPhase} /> */}
      <Controls />
    </Paper>
  );
}
