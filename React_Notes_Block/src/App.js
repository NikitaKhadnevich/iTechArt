import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainNotes from './pages/mainNotes/mainNotes';
import HeaderNavCont from './pages/header/HeaderNavCont';
import useStyles from './pages/mainNotes/styled';
import SharedNotesCont from './pages/sharedNotePage/sharedNotesCont';
import AboutPageCont from './pages/aboutPage/aboutPageCont';
import Visit404 from './pages/visit404/Visit404';

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
            <Route path='/not-found' element={<Visit404 />} />
            <Route path='/notes' element={<MainNotes />} />
            <Route path='/shared-notes' element={<SharedNotesCont />} />
            <Route path='/about' element={<AboutPageCont />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
