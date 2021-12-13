/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box } from '@material-ui/core';

import { UserBox, NavLink } from './styled';

import {
  notes,
  sharedNotes,
  about,
  isSignIn,
  userData,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  GET_SIGN_OUT,
  setToLocalStorage,
  AUTH_LOCAL_DATA,
  AUTH_LOCAL_STATUS,
} from './headerReceiver';

const UserMenu = () => {
  const userIsSignIn = useSelector(isSignIn);
  const getUserData = useSelector(userData);
  const dispatch = useDispatch();

  const SignOut = () => {
    dispatch(SET_AUTH_USER_DATA([]));
    dispatch(IS_SIGN_IN(false));
    dispatch(IS_SIGN_UP(false));
    dispatch(GET_SIGN_OUT(true));
    setToLocalStorage([], AUTH_LOCAL_DATA);
    setToLocalStorage(!userIsSignIn, AUTH_LOCAL_STATUS);
  };

  return (
    <>
      {userIsSignIn && getUserData && (
        <UserBox>
          {getUserData.map((userInfo) => (
            <Box>
              <Typography variant='body2'>Hello,</Typography>
              <Typography variant='body2'>
                {userInfo.firstName} {userInfo.lastName}
              </Typography>
            </Box>
          ))}
          <NavLink to={about} data-path={about} onClick={SignOut}>
            <Typography variant='body2'>Sign Out</Typography>
          </NavLink>
        </UserBox>
      )}
    </>
  );
};
export default UserMenu;
