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

    '@media (max-width: 360px)': {
      padding: 0,
    }
  },
  icon: {
    fontSize: 46,
  },
  svg: {
    // Align the tomato with the text
    transform: 'translateY(4px)',
    color: theme.palette.error.main
  },
}));

export default function Header() {
  const classes = useStyles();
  const matches500 = useMediaQuery('(max-width: 500px)');

  return (
    <Paper component="header" className={classes.root} square>
      <Typography variant="h2" component="h1">
        Pomodoro
        {/* Insert break line for screens below 500px  */}
        {matches500 ? <br /> : " " }
        Cl
        <Icon className={classes.icon}>
          <GiTomato className={classes.svg} />
        </Icon>
        ck
      </Typography>
    </Paper>
  );
}
