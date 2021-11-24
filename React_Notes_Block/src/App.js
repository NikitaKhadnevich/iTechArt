/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppContainer from './styledApp';
import PrivateRoute from './utils/routing/PrivateRoute';

import {
  MainNotes,
  HeaderNavCont,
  SharedNotesCont,
  AboutPageCont,
  Visit404Cont,
  FormikUp,
  FormikIn,
  ROUTERS,
} from './AppReceiver';

function App() {
  const { notes, notFound, sharedNotes, about, signUp, signIn } = ROUTERS;

  return (
    <>
      <CssBaseline />
      <Router>
        <AppContainer>
          <HeaderNavCont />
          <Routes>
            <Route path='*' element={<Navigate replace to={notFound} />} />
            <Route path={notFound} element={<Visit404Cont />} />
            <Route path={about} element={<AboutPageCont />} />
            <Route path={signUp} element={<FormikUp />} />
            <Route path={signIn} element={<FormikIn />} />

            <Route
              exact
              path={notes}
              element={
                <PrivateRoute>
                  <MainNotes />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={sharedNotes}
              element={
                <PrivateRoute>
                  <SharedNotesCont />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
