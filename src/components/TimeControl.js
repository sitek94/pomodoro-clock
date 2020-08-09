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
    padding: theme.spacing(2, 0)
  },
  label: {
    gridColumn: '1 / span 3',
    textTransform: 'uppercase',
  },
}));

export default function TimeControl({ label, value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.label}>{label} time</Typography>

      <IconButton aria-label={`decrease ${label} time`}>
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>
      <Typography variant="h4">{value}</Typography>
      <IconButton aria-label={`increase ${label} time`}>
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
