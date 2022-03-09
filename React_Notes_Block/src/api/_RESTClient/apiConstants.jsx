const USERS_URL = 'http://localhost:3001/users';
const NOTES_URL = 'http://localhost:3100/WAHA_NOTES';

const INFINITY_COUNTER = 6;
const BASE_NOTES_LIMIT = 4;
const PAGE_STEP = 1;

const initSignUpvalue = {
  email: '',
  firstName: '',
  lastName: '',
  birthday: '',
  password: '',
  confirmPassword: '',
  sharedNotes: [],
};

const initSignInvalue = {
  email: '',
  password: '',
};

export {
  USERS_URL,
  initSignUpvalue,
  initSignInvalue,
  NOTES_URL,
  INFINITY_COUNTER,
  PAGE_STEP,
  BASE_NOTES_LIMIT,
};
