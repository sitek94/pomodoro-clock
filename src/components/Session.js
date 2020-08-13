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

export default function Session({
  sessionLength,
  onArrowUpClick,
  onArrowDownClick,
}) {
  const classes = useStyles();

  const handleIncrement = () => {
    onArrowUpClick();
  };
  const handleDecrement = () => {
    onArrowDownClick();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.label} variant="h6" id="session-label">
        session length
      </Typography>

      <IconButton id="session-decrement" onClick={handleDecrement}>
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>

      <Typography id="session-length" variant="h4">
        {sessionLength}
      </Typography>

      <IconButton id="session-increment" onClick={handleIncrement}>
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
