/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const initSharedState = {
  sharedArr: [],
  isShared: false,
  urlPath: '',
};

export const notesShare = createSlice({
  name: 'shared-reducer',
  initialState: initSharedState,
  reducers: {
    GET_SHARED_POST: (state, action) => {
      state, (state.sharedArr = [...state.sharedArr, action.payload]);
    },
    GET_UPDATE_SHARED_POST: (state, action) => {
      state, (state.sharedArr = action.payload);
    },
  },
});

export default notesShare.reducer;
export const { GET_SHARED_POST, GET_UPDATE_SHARED_POST } = notesShare.actions;
