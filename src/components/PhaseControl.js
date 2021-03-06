import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
    '@media (max-width: 400px)': {
      maxWidth: 80,
      textAlign: 'center',
    }
  },
}));

export default function PhaseControl({
  label,
  value,
  onArrowUp,
  onArrowDown,
}) {
  const classes = useStyles();

  const handleArrowUpClick = () => {
    onArrowUp();
  };

  const handleArrowDownClick = () => {
    onArrowDown();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.label} variant="h6" id={`${label}-label`}>
        {label} length
      </Typography>

      <IconButton
        id={`${label}-decrement`}
        aria-label={`decrease ${label} time`}
        onClick={handleArrowDownClick}
      >
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>

      <Typography id={`${label}-length`} variant="h4">
        {value}
      </Typography>

      <IconButton
        id={`${label}-increment`}
        aria-label={`increase ${label} time`}
        onClick={handleArrowUpClick}
      >
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
PhaseControl.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onArrowDown: PropTypes.func.isRequired,
  onArrowUp: PropTypes.func.isRequired,
};
