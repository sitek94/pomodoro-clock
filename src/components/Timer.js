import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Box } from '@material-ui/core';

import { mmss } from '../util';

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

  if (value < 0 || value > 3600) {
    console.error(`value ${value} is not in range 0-3600`);
  }

  const bgColor = phase === 'break' ? 'success.main' : 'primary.main';
  const label = phase === 'break' ? 'Break' : 'Session';

  return (
    <Box
      bgcolor={bgColor}
      className={classes.root}
    >
      <Typography
        id="timer-label"
        className={classes.label}
        variant="h4"
        component="h3"
      >
        {label}
      </Typography>
 
      <Typography id="time-left" variant="h1" component="h2">
        {mmss(value)}
      </Typography>
    </Box>
  );
}
Timer.propTypes = {
  value: PropTypes.number.isRequired,
  phase: PropTypes.string.isRequired,
}

