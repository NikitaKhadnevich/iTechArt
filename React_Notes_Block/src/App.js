import React from 'react';
import { CssBaseline } from '@material-ui/core';
import MainNotesCont from './pages/mainNotes/mainNotesCont';
import HeaderNavCont from './pages/header/HeaderNavCont';
import useStyles from './pages/mainNotes/styled';

function App() {
  const { appContainer } = useStyles();
  return (
    <>
      <CssBaseline />
      <main className={appContainer}>
        <HeaderNavCont />
        <MainNotesCont />
      </main>
    </>
  );
}

export default App;
