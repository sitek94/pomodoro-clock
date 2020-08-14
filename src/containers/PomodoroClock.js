import React, { useState, useRef, useEffect } from 'react';

import Container from './Container';
import Buttons from './Buttons';
import PhaseControl from './PhaseControl';
import Timer from './Timer';
import { mmss } from '../util';
import gong from '../gong.wav';

export default function PomodoroClock() {
  
  // Break
  const [breakLength, setBreakLength] = useState(5);
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

  // Session
  const [sessionLength, setSessionLength] = useState(25);
  const incrementSessionLength = () => {
    if (!isRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimerValue(sessionLength * 60 + 60);
    }
  };
  const decrementSessionLength = () => {
    if (!isRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimerValue(sessionLength * 60 - 60);
    }
  };

  // Timer
  const [isRunning, setIsRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(1500);
  const [timerPhase, setTimerPhase] = useState('session');

  // Audio
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
    };

    // Interval
    let intervalId;
    if (isRunning && timerValue > 0) {
      intervalId = setInterval(() => {
        setTimerValue(timerValue - 1);
      }, 1000);
      // The timer has reached zero
    } else if (isRunning && timerValue === 0) {
      intervalId = setInterval(() => {
        setTimerValue(timerValue - 1);
      }, 1000);

      // In addition to setting up the interval switch phase and play sound
      audioElement.current.play();
      switchPhase();
    } else {
      clearInterval(intervalId);
    }

    // Cleanup
    return () => clearInterval(intervalId);
  }, [isRunning, breakLength, sessionLength, timerValue, timerPhase]);

  // Start
  const startTimer = () => {
    setIsRunning(true);
  };

  // Stop
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset
  const resetTimer = () => {
    setIsRunning(false);
    setTimerValue(1500);
    setTimerPhase('session');
    setBreakLength(5);
    setSessionLength(25);
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
  };

  return (
    <Container>
      <PhaseControl
        label="break"
        value={breakLength}
        onArrowUp={incrementBreakLength}
        onArrowDown={decrementBreakLength}
      />
      <PhaseControl
        label="session"
        value={sessionLength}
        onArrowUp={incrementSessionLength}
        onArrowDown={decrementSessionLength}
      />
      <Timer value={mmss(timerValue)} phase={timerPhase} />
      <Buttons
        phase={timerPhase}
        onStartStop={isRunning ? stopTimer : startTimer}
        onReset={resetTimer}
      />
      <audio id="beep" src={gong} ref={audioElement} />
    </Container>
  );
}
