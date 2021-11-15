import React from 'react';
import { CssBaseline } from '@material-ui/core';
import MainNotesCont from './pages/mainNotes/mainNotesCont';
import HeaderNavCont from './pages/header/HeaderNavCont';
import useStyles from './pages/mainNotes/styled';

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main className={classes.appContainer}>
        <HeaderNavCont />
        <MainNotesCont />
      </main>
    </>
  );
}

export default App;
