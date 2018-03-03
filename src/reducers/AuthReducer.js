import { 
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  EMAIL_CHANGED,
  LOGIN_FAILED,
  LOGIN_USER_SUCCESS,
  LOAD_SPINNER,
  CREAT_USER_ERROR,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
  username: '',
  password: '',
  email: '',
  authentication_token: '',
  error: '',
  errorFlag: false,
  spinner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USERNAME_CHANGED':
      return { ...state, username: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'LOGIN_FAILED':
      return { ...state, errorFlag: true, password: '', spinner: false };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, ...action.payload, ...INITIAL_STATE };
    case 'LOAD_SPINNER':
      return { ...state, spinner: true };
    case 'CREAT_USER_ERROR':
      return { ...state, error: action.payload, errorFlag: true, spinner: false, password: '' };
    case 'CREAT_USER_SUCCESS':
      return { ...state, ...action.payload, ...INITIAL_STATE };
    default:
      return state;
  }
};
