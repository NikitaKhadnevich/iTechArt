/* eslint-disable import/prefer-default-export */
import { initSharedState } from '../api/sharedToolkit/sharedToolkit';
import { initSignState } from '../api/signToolkit/signToolkit';

export const initialState = {
  notesShare: initSharedState,
  signAPI: initSignState,
};
