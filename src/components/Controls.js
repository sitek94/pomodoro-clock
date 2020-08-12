import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: '1 / span 2',
    width: '50%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center',
    padding: theme.spacing(2, 0),
  },
}));

export default function Controls({
  onStartClick,
  onPauseClick,
  onStopClick,
  phase
}) {
  const classes = useStyles();
  const theme = useTheme();

  const color = phase === 'break' ? theme.palette.success.main : theme.palette.primary.main;

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="start the timer"
        onClick={onStartClick}
      >
        <PlayArrowIcon fontSize="large" style={{ color }} />
      </IconButton>
      
      <IconButton
        aria-label="stop the timer"
        onClick={onStopClick}
      >
        <LoopIcon fontSize="large" style={{ color }}/>
      </IconButton>
    </div>
  );
}
