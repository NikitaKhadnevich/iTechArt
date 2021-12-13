import { getToLocalStorage } from './SetGetLocStor';
import {
  AUTH_LOCAL_STATUS,
  AUTH_LOCAL_DATA,
} from '../../config/constants/localStoreKeys';

const SetLocalHelper = (setData, setStatus) => {
  const localUserData = getToLocalStorage(AUTH_LOCAL_DATA);
  const localAuthStatus = getToLocalStorage(AUTH_LOCAL_STATUS);
  setData(localUserData);
  setStatus(localAuthStatus);
};

export default SetLocalHelper;
