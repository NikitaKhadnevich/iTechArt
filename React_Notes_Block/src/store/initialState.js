/* eslint-disable import/prefer-default-export */
import { initSharedState } from '../api/sharedToolkit/sharedToolkit';
import { initSignState } from '../api/signToolkit/signToolkit';
import { initNotesList } from '../api/notesToolkit/notesToolkit';

export const initialState = {
  notesShare: initSharedState,
  signAPI: initSignState,
  notesList: initNotesList,
};
