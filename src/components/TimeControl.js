import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
  },
  label: {
    gridColumn: '1 / span 3',
    textTransform: 'uppercase',
  },
}));

const INCREMENT_VALUE = 1;

export default function TimeControl({ label, value, onArrowClick }) {
  const classes = useStyles();

  const handleIncrement = () => {
    onArrowClick(value + INCREMENT_VALUE);
  }

  const handleDecrement = () => {
    onArrowClick(value - INCREMENT_VALUE);
  }

  return (
    <div className={classes.root}>
      <Typography 
        className={classes.label} 
        variant="h6" 
        id={`${label}-label`}
      >
        {label} length
      </Typography>

      <IconButton 
        id={`${label}-decrement`}
        aria-label={`decrease ${label} time`}
        onClick={handleDecrement}
      >
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>

      <Typography 
        id={`${label}-length`}
        variant="h4">
        {value}
      </Typography>

      <IconButton 
        id={`${label}-increment`}
        aria-label={`increase ${label} time`}
        onClick={handleIncrement}
      >
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
