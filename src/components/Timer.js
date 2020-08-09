import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    gridColumn: '1 / span 2',
    width: '100%',
    textAlign: 'center',
  },

})

export default function Timer({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider light />

      <Typography variant="h1" component="h2">
        {value}
      </Typography>
      <Divider />
    </div>
  );
}