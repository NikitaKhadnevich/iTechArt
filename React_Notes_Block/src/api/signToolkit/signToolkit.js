/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const initSignState = {
  usersArr: [],
  isSignUp: false,
  isSignIn: false,
};

export const signAPI = createSlice({
  name: 'sign-reducer',
  initialState: initSignState,
  reducers: {
    GET_SIGN_UP: (state, action) => {
      state, (state.usersArr = [...state.usersArr, action.payload]);
    },
    GET_SIGN_IN: (state, action) => {
      state, (state.isSignUp = action.payload);
    },
    GET_SIGN_OUT: (state, action) => {
      state, (state.isSignUp = action.payload);
    },
  },
});

export default signAPI.reducer;
export const { GET_SIGN_UP, GET_SIGN_IN, GET_SIGN_OUT } = signAPI.actions;
