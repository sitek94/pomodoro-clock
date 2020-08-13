import React from 'react';
import PropTypes from 'prop-types';

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

export default function Control({
  label,
  value,
  onArrowUpClick,
  onArrowDownClick,
}) {
  const classes = useStyles();

  if (value) {

  }

  const handleIncrement = () => {
    onArrowUpClick();
  };
  const handleDecrement = () => {
    onArrowDownClick();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.label} variant="h6" id={`${label}-label`}>
        {label} length
      </Typography>

      <IconButton
        id={`${label}-decrement`}
        onClick={handleDecrement}
      >
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>

      <Typography id={`${label}-length`} variant="h4">
        {value}
      </Typography>

      <IconButton
        id={`${label}-increment`}
        onClick={handleIncrement}
      >
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
Control.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onArrowDownClick: PropTypes.func.isRequired,
  onArrowUpClick: PropTypes.func.isRequired,
};