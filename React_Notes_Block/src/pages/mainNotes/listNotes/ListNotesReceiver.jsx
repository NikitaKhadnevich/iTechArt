import {
  ButtonEdit,
  ButtonShare,
  ButtonShareContainer,
} from '../../../components/notes/ButtonReceiver';
import InputChange from '../../../components/notes/InputChange';
import FormikAddNote from '../../../components/notes/inputAddNote/FormikWrappers/FormikAddNote';
import ERROR_MESSAGES from '../../../config/constants/errorMessages';
import Spinner from '../../../components/spinner/spinner';
import {
  notesList,
  isActiveNote,
  fetchHelper,
} from '../../../api/notesToolkit/notesSelectors';
import {
  SET_NOTES_LIST,
  IS_ACTIVE_NOTE,
  SET_INFINITE_FETCH_COUNTER,
} from '../../../api/notesToolkit/notesToolkit';
import NotesStatus from '../../../components/notes/notesStatus/NotesStatus';
import NotesFetching from '../../../components/notes/notesStatus/NotesFetching';
import {
  sharedNotes,
  urlPath,
  isShared,
} from '../../../api/sharedToolkit/sharedSelectors';
import {
  GET_SHARED_POST,
  IS_SHARED,
  GET_UPDATE_SHARED_POST,
} from '../../../api/sharedToolkit/sharedToolkit';
import GetUsersContainer from '../../../components/notes/userCheckList/GetUsersContainer';

import chooseNote, { callToEditNote } from '../../../utils/ChooseNote';
import sliceDescription from '../../../utils/SliceDescription';

export {
  ButtonEdit,
  ButtonShare,
  ButtonShareContainer,
  InputChange,
  FormikAddNote,
  ERROR_MESSAGES,
  Spinner,
  notesList,
  isActiveNote,
  fetchHelper,
  SET_NOTES_LIST,
  IS_ACTIVE_NOTE,
  SET_INFINITE_FETCH_COUNTER,
  NotesStatus,
  NotesFetching,
  sharedNotes,
  urlPath,
  isShared,
  IS_SHARED,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  GetUsersContainer,
  chooseNote,
  callToEditNote,
  sliceDescription,
};
