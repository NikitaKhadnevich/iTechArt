import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainNotesCont from './pages/mainNotes/mainNotesCont';
import HeaderNavCont from './pages/header/HeaderNavCont';
import useStyles from './pages/mainNotes/styled';
import SharedNotesCont from './pages/sharedNotePage/sharedNotesCont';
import AboutPageCont from './pages/aboutPage/aboutPageCont';
import Platform from './pages/platform/platform';

function App() {
  const { appContainer } = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <main className={appContainer}>
          <HeaderNavCont />
          <Routes>
            <Route path='*' element={<Navigate replace to='/not-found' />} />
            <Route path='/not-found' element={<Platform />} />
            <Route path='/notes' element={<MainNotesCont />} />
            <Route path='/shared-notes' element={<SharedNotesCont />} />
            <Route path='/about' element={<AboutPageCont />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
