import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainNotes from './pages/mainNotes/mainNotes';
import HeaderNavCont from './pages/header/HeaderNavCont';
import useStyles from './styledApp';
import SharedNotesCont from './pages/sharedNotePage/sharedNotesCont';
import AboutPageCont from './pages/aboutPage/aboutPageCont';
import Visit404Cont from './pages/visit404/Visit404Cont';

function App() {
  const { appContainer } = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <Container className={appContainer}>
          <HeaderNavCont />
          <Routes>
            <Route path='*' element={<Navigate replace to='/not-found' />} />
            <Route path='/not-found' element={<Visit404Cont />} />
            <Route path='/notes' element={<MainNotes />} />
            <Route path='/shared-notes' element={<SharedNotesCont />} />
            <Route path='/about' element={<AboutPageCont />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
