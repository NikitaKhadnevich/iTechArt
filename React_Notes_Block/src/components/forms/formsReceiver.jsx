import validationSchema from '../../utils/signHelper/Schemas/valid_UP';
import validationIN from '../../utils/signHelper/Schemas/valid_IN';
import { runGETusers, runPOSTuser } from '../../api/_RESTClient/RESTApi';
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
  USERS_URL,
  initSignUpvalue,
  initSignInvalue,
} from '../../api/_RESTClient/apiConstants';
import Spinner from '../spinner/spinner';
import ROUTERS from '../../config/routers/routers';
import {
  setToLocalStorage,
  getToLocalStorage,
} from '../../utils/localStorage/SetGetLocStor';
import { useQueryWrapper } from '../../api/auth/useQueryWrapper';
import {
  GetUsersForAuth,
  InfiniteNotes,
  GetUsersSignUp,
  isAuthUser,
} from '../../config/constants/queryKeys';

import {
  AUTH_LOCAL_STATUS,
  AUTH_LOCAL_DATA,
} from '../../config/constants/localStoreKeys';
import SignUpError from './SignAvatars/SignUpError';
import SignUpSuccess from './SignAvatars/SignUpSuccess';

import SignEmail from './SignInputs/SIgnUpEmail';
import SignUpFirstName from './SignInputs/SIgnUpFirstName';
import SignUpLastName from './SignInputs/SIgnUpLastName';
import SignUpBirth from './SignInputs/SIgnUpBirth';
import SignPassword from './SignInputs/SIgnUpPassword';
import SignUpConfirmPass from './SignInputs/SIgnUpConfirmPass';

import SignInError from './SignAvatars/SignInError';
import SignInInfo from './SignAvatars/SignInInfo';
import SignInMessage from './SignAvatars/SignInMessage';

import { usePostWrapper } from '../../api/auth/useMutationWrapper';

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
  USERS_URL,
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
  SignUpError,
  SignUpSuccess,
  SignEmail,
  SignUpFirstName,
  SignUpLastName,
  SignUpBirth,
  SignPassword,
  SignUpConfirmPass,
  SignInError,
  SignInInfo,
  SignInMessage,
  useQueryWrapper,
  InfiniteNotes,
  GetUsersForAuth,
  GetUsersSignUp,
  isAuthUser,
  usePostWrapper,
};
