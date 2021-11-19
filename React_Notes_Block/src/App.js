import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppContainer from './styledApp';

import {
  MainNotes,
  HeaderNavCont,
  SharedNotesCont,
  AboutPageCont,
  Visit404Cont,
  ROUTERS,
} from './ArrReciever';

function App() {
  const { notes, notFound, sharedNotes, about } = ROUTERS;

  return (
    <>
      <CssBaseline />
      <Router>
        <AppContainer>
          <HeaderNavCont />
          <Routes>
            <Route path='*' element={<Navigate replace to={notFound} />} />
            <Route path={notFound} element={<Visit404Cont />} />
            <Route path={notes} element={<MainNotes />} />
            <Route path={sharedNotes} element={<SharedNotesCont />} />
            <Route path={about} element={<AboutPageCont />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
