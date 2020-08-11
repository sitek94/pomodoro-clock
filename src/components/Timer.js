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
  
  const parsedValue = mmss(value);

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
        {value}
      </Typography>
    </Box>
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