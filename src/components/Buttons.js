import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';

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

export default function Buttons({
  phase,
  timerIsRunning,
  onStartStopClick,
  onResetClick,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const color = phase === 'break' 
    ? theme.palette.success.main
    : theme.palette.primary.main;

  return (
    <div className={classes.root}>
      <IconButton
        id="start_stop"
        aria-label="start/stop the timer"
        onClick={onStartStopClick}
      >
        {timerIsRunning === 'running'
          ? <PauseIcon fontSize="large" style={{ color }} />
          : <PlayArrowIcon fontSize="large" style={{ color }} />
        }
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
Buttons.propTypes = {
  phase: PropTypes.string.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  onStartStopClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
}
