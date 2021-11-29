import validationSchema from '../../utils/signHelper/Schemas/valid_UP';
import validationIN from '../../utils/signHelper/Schemas/valid_IN';
import { runGETusers, runPOSTuser } from '../../api/RESTClient/RESTApi';
import {
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
} from '../../api/signToolkit/signToolkit';
import {
  userData,
  isSignUp,
  isSignIn,
  isSignUpError,
  isSignInError,
} from '../../api/signToolkit/signSelectors';
import ERROR_MESSAGES from '../../config/constants/errorMessages';
import {
  baseURL,
  initSignUpvalue,
  initSignInvalue,
} from '../../api/RESTClient/apiConstants';
import Spinner from '../spinner/spinner';
import ROUTERS from '../../config/routers/routers';
import {
  setToLocalStorage,
  getToLocalStorage,
} from '../../utils/localStorage/SetGetLocStor';

import {
  AUTH_LOCAL_STATUS,
  AUTH_LOCAL_DATA,
} from '../../config/constants/localStoreKeys';

const { signIn, signUp, notes, about } = ROUTERS;

export {
  validationSchema,
  validationIN,
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
  runGETusers,
  runPOSTuser,
  baseURL,
  signIn,
  signUp,
  notes,
  about,
  ERROR_MESSAGES,
  initSignUpvalue,
  initSignInvalue,
  isSignInError,
  Spinner,
  getToLocalStorage,
  setToLocalStorage,
  AUTH_LOCAL_STATUS,
  AUTH_LOCAL_DATA,
};
