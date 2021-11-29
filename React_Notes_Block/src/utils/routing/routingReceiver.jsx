import ROUTERS from '../../config/routers/routers';
import { isSignUp, isSignIn } from '../../api/signToolkit/signSelectors';
import { getToLocalStorage } from '../localStorage/SetGetLocStor';
import { AUTH_LOCAL_STATUS } from '../../config/constants/localStoreKeys';

export { ROUTERS, isSignUp, isSignIn, getToLocalStorage, AUTH_LOCAL_STATUS };
