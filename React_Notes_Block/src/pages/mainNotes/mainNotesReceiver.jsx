/* eslint-disable no-unused-vars */
import AboutNoteContainer from './aboutNote/AboutNoteContainer';
import {
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
} from '../../api/sharedToolkit/sharedToolkit';
import { sharedNotes } from '../../api/sharedToolkit/sharedSelectors';
import WAHA_NOTES from '../../config/constants/initNoteData';
import chooseNote, { callToEditNote } from '../../utils/ChooseNote';
import saveEditedNote from '../../utils/SaveEditedNote';
import sliceDescription from '../../utils/SliceDescription';
import deleteNote from '../../utils/DeleteNote';
import {
  setToLocalStorage,
  getToLocalStorage,
} from '../../utils/localStorage/SetGetLocStor';
import shareHelper from '../../utils/dispatchHelper/shareHelper';
import removeShareNote from '../../utils/dispatchHelper/removeShareNote';
import ListWrapper from './listNotes/ListWrapper';
import LazyListNotes from './listNotes/index';
import { Spinner, ERROR_MESSAGES } from './listNotes/ListNotesReceiver';
import {
  NOTES_LIST,
  AUTH_LOCAL_DATA,
  AUTH_LOCAL_STATUS,
} from '../../config/constants/localStoreKeys';
import { notesURL } from '../../api/RESTClient/apiConstants';
import {
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
} from '../../api/RESTClient/RESTApi';

export {
  notesURL,
  LazyListNotes,
  ListWrapper,
  AboutNoteContainer,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedNotes,
  WAHA_NOTES,
  chooseNote,
  callToEditNote,
  saveEditedNote,
  sliceDescription,
  deleteNote,
  setToLocalStorage,
  getToLocalStorage,
  shareHelper,
  removeShareNote,
  Spinner,
  NOTES_LIST,
  AUTH_LOCAL_DATA,
  AUTH_LOCAL_STATUS,
  ERROR_MESSAGES,
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
};
