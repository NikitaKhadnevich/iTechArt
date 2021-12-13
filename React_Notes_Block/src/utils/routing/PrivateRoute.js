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

function PrivateRoute({ children }) {
  const isSignInApp = useSelector(isSignIn);
  const { signIn } = ROUTERS;

  const localAuth = getToLocalStorage(AUTH_LOCAL_STATUS);
  if (!isSignInApp && !localAuth) {
    return <Navigate to={signIn} />;
  }
  return children;
}

export default PrivateRoute;
