/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initNotesList = {
  notesList: [],
  usersList: [],
  notesListPart: '',
  pageLimit: 1,
  isActiveNote: false,
  fetchHelper: 0,
};

export const notesList = createSlice({
  name: 'notesList-reducer',
  initialState: initNotesList,
  reducers: {
    SET_NOTES_LIST: (state, action) => {
      state, (state.notesList = action.payload);
    },
    IS_ACTIVE_NOTE: (state, action) => {
      state, (state.isActiveNote = action.payload);
    },
    SET_INFINITE_FETCH_COUNTER: (state, action) => {
      state, (state.fetchHelper = action.payload);
    },
    SET_USERS_LIST: (state, action) => {
      state, (state.usersList = action.payload);
    },
    SET_INFINITY_PART: (state, action) => {
      state, (state.notesListPart = action.payload);
    },
    SET_PAGE_LIMIT: (state, action) => {
      state, (state.pageLimit = action.payload);
    },
  },
});

export default notesList.reducer;
export const {
  SET_NOTES_LIST,
  IS_ACTIVE_NOTE,
  SET_INFINITE_FETCH_COUNTER,
  SET_USERS_LIST,
  SET_INFINITY_PART,
  SET_PAGE_LIMIT,
} = notesList.actions;
