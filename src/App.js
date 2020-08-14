import React, { useState } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

import PomodoroClock from './components/PomodoroClock';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f44336'
    }
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    maxWidth: 500,
    display: 'grid',
    gridRowGap: theme.spacing(3),
    justifyContent: 'center',
    alignContent: 'center',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.layout}>
          <Header />
          <PomodoroClock />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
