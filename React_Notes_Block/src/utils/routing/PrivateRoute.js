/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isSignUp } from '../../api/signToolkit/signSelectors';

function PrivateRoute({ children }) {
  const isSignInApp = useSelector(isSignUp);

  if (isSignInApp) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateRoute;
