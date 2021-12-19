import Spinner from '../../components/spinner/spinner';
import { sharedNotes } from '../../api/sharedToolkit/sharedSelectors';
import ERROR_MESSAGES from '../../config/constants/errorMessages';
import INFO_MESSAGES from '../../config/constants/infoMessages';
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
  GetUserSharedData,
  SharedLink,
} from '../../config/constants/queryKeys';
import { useQueryWrapper, useMultiQuery } from '../../api/auth/useQueryWrapper';

import { USERS_URL } from '../../api/_RESTClient/apiConstants';

export {
  Spinner,
  sharedNotes,
  ERROR_MESSAGES,
  INFO_MESSAGES,
  userData,
  isSignUp,
  isSignIn,
  isSignUpError,
  isSignInError,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
  USERS_URL,
  GetUserSharedData,
  useQueryWrapper,
  useMultiQuery,
  SharedLink,
};
