import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import {
  notes,
  sharedNotes,
  about,
  signUp,
  signIn,
  isSignIn,
} from './headerReceiver';

import { Navigation, NavLink, SignBox } from './styled';

const ItemsNavi = () => {
  const userIsSignIn = useSelector(isSignIn);

  return (
    <Navigation>
      {userIsSignIn && (
        <>
          <NavLink to={notes} data-path={notes}>
            <Typography variant='h6'>Notes</Typography>
          </NavLink>
          <NavLink to={sharedNotes} data-path={sharedNotes}>
            <Typography variant='h6'>Shared Notes</Typography>
          </NavLink>
        </>
      )}
      <NavLink to={about} data-path={about}>
        <Typography variant='h6'>About</Typography>
      </NavLink>
      {!userIsSignIn && (
        <SignBox>
          <NavLink to={signUp} data-path={signUp}>
            <Typography variant='body2'>Sign Up</Typography>
          </NavLink>
          <NavLink to={signIn} data-path={signIn}>
            <Typography variant='body2'>Sign In</Typography>
          </NavLink>
        </SignBox>
      )}
    </Navigation>
  );
};
export default ItemsNavi;
