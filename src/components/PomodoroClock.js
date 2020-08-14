import React, { useState, useRef, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import TimeControl from './TimeControl';
import Controls from './Controls';
import Timer from './Timer';
import gong from '../gong.wav';

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
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [isRunning, setIsRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(1500);
  const [timerPhase, setTimerPhase] = useState('session');
  
  const audioElement = useRef();
  

  useEffect(() => {
    const switchPhase = () => {
      if (timerPhase === 'session') {
        setTimerPhase('break');
        setTimerValue(breakLength * 60);
      } else {
        setTimerPhase('session');
        setTimerValue(sessionLength * 60);
      }
    }
    
    let intervalId;
    if (isRunning && timerValue > 0) {
      intervalId = setInterval(() => {
        setTimerValue(timerValue - 1);
      }, 1000);
    } else if (isRunning && timerValue === 0) {
      intervalId = setInterval(() => {
        setTimerValue(timerValue - 1);
      }, 1000);

      audioElement.current.play();
      switchPhase();
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, breakLength, sessionLength, timerValue, timerPhase])

  const startTimer = () => {
    setIsRunning(true);
  }

  const stopTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setTimerValue(1500);
    setTimerPhase('session');
    setBreakLength(5);
    setSessionLength(25);
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
  }


  const incrementBreakLength = () => {
    if (!isRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreakLength = () => {
    if (!isRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementSessionLength = () => {
    if (!isRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimerValue(sessionLength * 60 + 60);
    }
  }
  const decrementSessionLength = () => {
    if (!isRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimerValue(sessionLength * 60 - 60) ;
    }
  }

  

  return (
    <Paper className={classes.root}>
      <TimeControl
        label="break"
        value={breakLength}
        onArrowUpClick={incrementBreakLength}
        onArrowDownClick={decrementBreakLength}
      />
      <TimeControl
        label="session"
        value={sessionLength}
        onArrowUpClick={incrementSessionLength}
        onArrowDownClick={decrementSessionLength}
      />

      <Timer value={timerValue} phase={timerPhase} />
      <audio id="beep" src={gong} ref={audioElement} />
      <Controls 
        phase={timerPhase}
        onStartStop={isRunning ? stopTimer : startTimer}
        onReset={resetTimer}
      />
    </Paper>
  );
}
