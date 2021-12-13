/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initNotesList = {
  notesList: [],
  isActiveNote: false,
};

export const notesList = createSlice({
  name: 'notes-reducer',
  initialState: initNotesList,
  reducers: {
    SET_NOTES_LIST: (state, action) => {
      state, (state.notesList = action.payload);
    },
    IS_ACTIVE_NOTE: (state, action) => {
      state, (state.isActiveNote = action.payload);
    },
  },
});

export default notesList.reducer;
export const { SET_NOTES_LIST, IS_ACTIVE_NOTE } = notesList.actions;
