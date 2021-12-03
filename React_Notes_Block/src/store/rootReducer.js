/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import notesShare from '../api/sharedToolkit/sharedToolkit';
import signAPI from '../api/signToolkit/signToolkit';
import noteList from '../api/notesToolkit/notesToolkit';

export default combineReducers({
  notesShare,
  signAPI,
  noteList,
});
