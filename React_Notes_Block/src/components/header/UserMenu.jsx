/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box } from '@material-ui/core';
import { useQueryClient } from 'react-query';
import { UserBox, NavLink } from './styled';

import {
  about,
  isSignIn,
  userData,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  GET_SIGN_OUT,
  SET_NOTES_LIST,
  SET_USERS_LIST,
  SET_INFINITE_FETCH_COUNTER,
  setToLocalStorage,
  AUTH_LOCAL_DATA,
  AUTH_LOCAL_STATUS,
  InfiniteNotes,
} from './headerReceiver';

const UserMenu = () => {
  const userIsSignIn = useSelector(isSignIn);
  const getUserData = useSelector(userData);
  const isUserAuth = useSelector(isSignIn);
  const dispatch = useDispatch();
  const client = useQueryClient();
  const BASE_FETCH_COUNT = 0;

  const SignOut = () => {
    dispatch(SET_AUTH_USER_DATA([]));
    dispatch(IS_SIGN_IN(false));
    dispatch(IS_SIGN_UP(false));
    dispatch(GET_SIGN_OUT(true));
    dispatch(SET_NOTES_LIST([]));
    dispatch(SET_USERS_LIST([]));
    dispatch(SET_INFINITE_FETCH_COUNTER(BASE_FETCH_COUNT));
    setToLocalStorage([], AUTH_LOCAL_DATA);
    setToLocalStorage(!userIsSignIn, AUTH_LOCAL_STATUS);
    if (isUserAuth) {
      client.removeQueries(InfiniteNotes, { exact: true });
    }
  };

  return (
    <>
      {userIsSignIn && getUserData && (
        <UserBox key='userReceiver'>
          {getUserData.map((userInfo) => (
            <Box key={`${userInfo.id}_userBox`}>
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
