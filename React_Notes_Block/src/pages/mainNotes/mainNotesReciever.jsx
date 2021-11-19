import Spinner from '../../components/spinner/spinner';
import LazyListNotes from './listNotes/LazyListNotes';
import LazyAboutNotes from './aboutNote/LazyAboutNotes';
import {
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
} from '../../api/sharedToolkit/sharedToolkit';
import { sharedArr } from '../../api/sharedToolkit/sharedSelectors';
import WAHA_NOTES from '../../config/constants/initNoteData';
import chooseNote, { callToEditNote } from '../../utils/ChooseNote';
import saveEditedNote from '../../utils/SaveEditedNote';
import sliceDescription from '../../utils/SliceDescription';
import deleteNote from '../../utils/DeleteNote';
import setToLocalStorage, {
  getToLocalStorage,
} from '../../utils/localStorage/SetGetLocStor';
import shareHelper from '../../utils/dispatchHelper/shareHelper';
import removeShareNote from '../../utils/dispatchHelper/removeShareNote';

export {
  Spinner,
  LazyListNotes,
  LazyAboutNotes,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedArr,
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
};
