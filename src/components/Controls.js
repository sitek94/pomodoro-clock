import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: '1 / span 2',
    width: '50%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    padding: theme.spacing(2, 0)
  },
}));

export default function Controls() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="start the timer">
        <PlayArrowIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="pause the timer">
        <PauseIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="stop the timer">
        <StopIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
