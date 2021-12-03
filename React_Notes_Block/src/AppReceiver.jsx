import MainNotesContainer from './pages/mainNotes/mainNotesContainer';
import HeaderNav from './pages/header/HeaderNav';
import SharedWrapper from './pages/sharedNotePage/sharedWrapper';
import AboutWrapper from './pages/aboutPage/aboutWrapper';
import VisitWrapper from './pages/visit404/VisitWrapper';
import ROUTERS from './config/routers/routers';
import FormikUp from './components/forms/FormikWrappers/FormikUpContainer';
import FormikIn from './components/forms/FormikWrappers/FormikInContainer';
import {
  setToLocalStorage,
  getToLocalStorage,
} from './utils/localStorage/SetGetLocStor';
import SetLocalHelper from './utils/localStorage/SetLocalHelper';
import {
  userData,
  isSignUp,
  isSignIn,
  isSignUpError,
  isSignInError,
} from './api/signToolkit/signSelectors';

import {
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
} from './api/signToolkit/signToolkit';

import PrivateSignRoute from './utils/routing/PrivateSignRoute';
import PrivateRoute from './utils/routing/PrivateRoute';

export {
  MainNotesContainer,
  HeaderNav,
  SharedWrapper,
  AboutWrapper,
  VisitWrapper,
  ROUTERS,
  FormikUp,
  FormikIn,
  setToLocalStorage,
  getToLocalStorage,
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
  SetLocalHelper,
  PrivateSignRoute,
  PrivateRoute,
};
