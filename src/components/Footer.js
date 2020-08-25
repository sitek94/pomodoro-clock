import React from 'react';

import { makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    textAlign: 'center',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper component="footer" className={classes.root} square>
      <Typography color="textSecondary">
        Coded by Maciek Sitkowski in 2020.
      </Typography>
    </Paper>
  );
}
