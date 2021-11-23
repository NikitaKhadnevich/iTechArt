/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import notesShare from '../api/sharedToolkit/sharedToolkit';
import signAPI from '../api/signToolkit/signToolkit';

export default combineReducers({
  notesShare,
  signAPI,
});
