/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const initSharedState = {
  sharedNotes: [],
  isShared: false,
  urlPath: '',
};

export const notesShare = createSlice({
  name: 'shared-reducer',
  initialState: initSharedState,
  reducers: {
    GET_SHARED_POST: (state, action) => {
      state, (state.sharedNotes = [...state.sharedNotes, action.payload]);
    },
    GET_UPDATE_SHARED_POST: (state, action) => {
      state, (state.sharedNotes = action.payload);
    },
  },
});

export default notesShare.reducer;
export const { GET_SHARED_POST, GET_UPDATE_SHARED_POST } = notesShare.actions;
