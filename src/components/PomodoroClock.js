import React from 'react';
import { Paper, makeStyles, Typography, Divider } from '@material-ui/core';

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
      <TimeControl label="Break" value="05" />
      <TimeControl label="Session" value="25" />
      <Timer value="23:44" />
      <Controls />
    </Paper>
  );
}
