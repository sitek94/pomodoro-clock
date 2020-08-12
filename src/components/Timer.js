import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: '1 / span 2',
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(3),
    transition: 'background-color .5s',
  },
  label: {
    letterSpacing: 4,
  },
}));

export default function Timer({ value, phase }) {
  const classes = useStyles();

  const bgColor = {
    pause: null,
    break: 'success.main',
    session: 'primary.main',
  };

  const label = {
    pause: 'Tomatoes are waiting!',
    break: 'Break',
    session: 'Session',
  };

  return (
    <Box
      bgcolor={bgColor[phase]}
      className={classes.root}
    >
      <Typography
        id="timer-label"
        className={classes.label}
        variant="h4"
        component="h3"
      >
        {label[phase]}
      </Typography>
 
      <Typography id="time-left" variant="h1" component="h2">
        {mmss(value)}
      </Typography>
    </Box>
  );
}

// Format seconds 
function mmss(value) {
  let minutes = Math.floor(value / 60);
  let seconds = value - minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return minutes + ':' + seconds;
}
