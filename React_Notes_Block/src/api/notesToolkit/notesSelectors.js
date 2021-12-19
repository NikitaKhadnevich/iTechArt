const notesList = (state) => state.notesList.notesList;
const isActiveNote = (state) => state.notesList.isActiveList;
const fetchHelper = (state) => state.notesList.fetchHelper;
const usersList = (state) => state.notesList.usersList;
const notesListPart = (state) => state.notesList.notesListPart;
const pageLimit = (state) => state.notesList.pageLimit;
export {
  notesList,
  isActiveNote,
  fetchHelper,
  usersList,
  notesListPart,
  pageLimit,
};
