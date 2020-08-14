import React from 'react';

import { Paper, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
  },
});

export default function Container({ children }) {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  )
}