/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ROUTERS,
  isSignIn,
  getToLocalStorage,
  AUTH_LOCAL_STATUS,
} from './routingReceiver';

function PrivateSignRoute({ children }) {
  const isSignInApp = useSelector(isSignIn);
  const { notes } = ROUTERS;

  const localAuth = getToLocalStorage(AUTH_LOCAL_STATUS);
  if (!isSignInApp && !localAuth) {
    return children;
  }
  return <Navigate to={notes} />;
}

export default PrivateSignRoute;
