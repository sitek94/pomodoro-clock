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


  
  

  return (
    <Paper className={classes.root}>
      <TimeControl
        label="break"

      />
      <TimeControl
        label="session"

      />
      <Timer  />
      <Controls
  
      />
    </Paper>
  );
}
