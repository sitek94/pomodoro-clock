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
  phase,
  timerState,
  onStartStopClick,
  onResetClick,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const color =
    phase === 'break' ? theme.palette.success.main : theme.palette.primary.main;

  const renderStartStopIcon = () =>
    timerState === 'running' ? (
      <PauseIcon fontSize="large" style={{ color }} />
    ) : (
      <PlayArrowIcon fontSize="large" style={{ color }} />
    );

  return (
    <div className={classes.root}>
      <IconButton
        id="start_stop"
        aria-label="start/stop the timer"
        onClick={onStartStopClick}
      >
        {renderStartStopIcon()}
      </IconButton>

      <IconButton
        id="reset"
        aria-label="reset the timer"
        onClick={onResetClick}
      >
        <LoopIcon fontSize="large" style={{ color }} />
      </IconButton>
    </div>
  );
}
