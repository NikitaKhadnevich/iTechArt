/* eslint-disable no-unused-vars */
import AboutNoteContainer from './aboutNote/AboutNoteContainer';
import {
  GET_SHARED_POST,
  IS_SHARED,
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
import {
  NOTES_URL,
  INFINITY_COUNTER,
  PAGE_STEP,
  BASE_NOTES_LIMIT,
} from '../../api/_RESTClient/apiConstants';
import {
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
  runGETInfinityNotes,
} from '../../api/_RESTClient/RESTApi';

import {
  userData,
  isSignUp,
  isSignIn,
  isSignUpError,
  isSignInError,
} from '../../api/signToolkit/signSelectors';
import {
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
} from '../../api/signToolkit/signToolkit';

import {
  notesList,
  isActiveNote,
  fetchHelper,
  notesListPart,
  pageLimit,
} from '../../api/notesToolkit/notesSelectors';

import {
  SET_NOTES_LIST,
  IS_ACTIVE_NOTE,
  SET_INFINITE_FETCH_COUNTER,
  SET_INFINITY_PART,
  SET_PAGE_LIMIT,
} from '../../api/notesToolkit/notesToolkit';

import { useInfinityWrapper } from '../../api/auth/useQueryWrapper';
import {
  useDeleteWrapper,
  useUpdateWrapper,
} from '../../api/auth/useMutationWrapper';
import {
  InfiniteNotes,
  DeleteNote,
  UpdateNote,
} from '../../config/constants/queryKeys';

import removeDuplicates from '../../utils/dispatchHelper/removeDublicates';

export {
  notesListPart,
  NOTES_URL,
  INFINITY_COUNTER,
  BASE_NOTES_LIMIT,
  PAGE_STEP,
  notesList,
  fetchHelper,
  isActiveNote,
  LazyListNotes,
  ListWrapper,
  AboutNoteContainer,
  GET_SHARED_POST,
  IS_SHARED,
  SET_NOTES_LIST,
  IS_ACTIVE_NOTE,
  GET_UPDATE_SHARED_POST,
  SET_INFINITE_FETCH_COUNTER,
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
  runGETInfinityNotes,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
  userData,
  isSignUp,
  isSignIn,
  isSignUpError,
  isSignInError,
  useInfinityWrapper,
  InfiniteNotes,
  DeleteNote,
  UpdateNote,
  SET_INFINITY_PART,
  useDeleteWrapper,
  useUpdateWrapper,
  pageLimit,
  SET_PAGE_LIMIT,
  removeDuplicates,
};
