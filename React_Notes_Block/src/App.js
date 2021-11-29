/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppContainer from './styledApp';

import {
  MainNotesContainer,
  HeaderNav,
  SharedWrapper,
  AboutWrapper,
  VisitWrapper,
  FormikUp,
  FormikIn,
  ROUTERS,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  SetLocalHelper,
  PrivateRoute,
  PrivateSignRoute,
} from './AppReceiver';

function App() {
  const { notes, notFound, sharedNotes, about, signUp, signIn } = ROUTERS;
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState([]);
  const [authState, setAuthState] = useState('');

  useEffect(() => {
    SetLocalHelper(setAuthData, setAuthState);
  }, []);

  useEffect(() => {
    dispatch(SET_AUTH_USER_DATA(authData));
    dispatch(IS_SIGN_IN(authState));
  }, [authState, authData]);

  return (
    <>
      <CssBaseline />
      <Router>
        <AppContainer>
          <HeaderNav />
          <Routes>
            <Route path='*' element={<Navigate replace to={notFound} />} />
            <Route path={notFound} element={<VisitWrapper />} />
            <Route path={about} element={<AboutWrapper />} />
            <Route
              exact
              path={signUp}
              element={
                <PrivateSignRoute>
                  <FormikUp />
                </PrivateSignRoute>
              }
            />
            <Route
              exact
              path={signIn}
              element={
                <PrivateSignRoute>
                  <FormikIn />
                </PrivateSignRoute>
              }
            />
            <Route
              exact
              path={notes}
              element={
                <PrivateRoute>
                  <MainNotesContainer />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={sharedNotes}
              element={
                <PrivateRoute>
                  <SharedWrapper />
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
