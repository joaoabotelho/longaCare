import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_FAILED,
  LOGIN_USER_SUCCESS,
  LOAD_SPINNER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  auth_token: '',
  error: '',
  errorFlag: false,
  spinner: false,
  mainMenuReady: false
};

export default (state = INITIAL_STATE, action) => {
  console.log('action: ' + action.type)
  switch (action.type) {
    case 'USERNAME_CHANGED':
      return { ...state, username: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'LOGIN_FAILED':
      return { ...state, errorFlag: true, password: '', spinner: false };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, ...INITIAL_STATE, auth_token: action.payload, mainMenuReady: true};
    case 'LOAD_SPINNER':
      return { ...state, spinner: true };
    case 'CREATE_USER_ERROR':
      return { ...state, error: action.payload, errorFlag: true, spinner: false, password: '' };
    case 'CREATE_USER_SUCCESS':
      return { ...state, ...action.payload, ...INITIAL_STATE };
    default:
      return state;
  }
};
