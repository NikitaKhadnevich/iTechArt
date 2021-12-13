/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const initSignState = {
  userData: '',
  isSignUp: false,
  isSignIn: false,
  isSignOut: true,
  isSignUpError: false,
  isSignInError: false,
};

export const signAPI = createSlice({
  name: 'sign-reducer',
  initialState: initSignState,
  reducers: {
    SET_AUTH_USER_DATA: (state, action) => {
      state, (state.userData = action.payload);
    },
    IS_SIGN_UP: (state, action) => {
      state, (state.isSignUp = action.payload);
    },
    IS_SIGN_IN: (state, action) => {
      state, (state.isSignIn = action.payload);
    },
    SET_SIGNUP_ERROR: (state, action) => {
      state, (state.isSignUpError = action.payload);
    },
    SET_SIGNIN_ERROR: (state, action) => {
      state, (state.isSignInError = action.payload);
    },
    GET_SIGN_OUT: (state, action) => {
      state, (state.isSignOut = action.payload);
    },
  },
});

export default signAPI.reducer;
export const {
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
} = signAPI.actions;
