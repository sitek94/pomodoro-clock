import React from 'react';

import {
  Paper,
  makeStyles,
  Typography,
  Icon,
  useMediaQuery,
} from '@material-ui/core';
import { GiTomato } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  icon: {
    fontSize: 46,
  },
  svg: {
    // Align the tomato with the text
    transform: 'translateY(4px)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 500px)');

  return (
    <Paper component="header" className={classes.root}>
      <Typography variant="h2" component="h1">
        Pomodoro
        {/* Insert break line for screens below 500px  */}
        {matches ? <br /> : " " }
        Cl
        <Icon color="secondary" className={classes.icon}>
          <GiTomato className={classes.svg} />
        </Icon>
        ck
      </Typography>
    </Paper>
  );
}
