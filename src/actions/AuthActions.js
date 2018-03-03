import { Actions } from 'react-native-router-flux';

export const usernameChanged = (username) => {
  return {
    type: 'USERNAME_CHANGED',
    payload: username
  };
};

export const passwordChanged = (password) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export const emailChanged = (email) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: email
  };
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('http://localhost:3000/v1/authentications', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        }
      })
    }).then((response) => {
      console.log(response);
      if (response.status === 401) {
        console.log('AUTHENTICATION ERROR!!');
        dispatch({
          type: 'LOGIN_FAILED'
        });
      } else {
        console.log('SUCCESS!!');
        response.json().then(data => {
          console.log(data);
          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: data
          });
        });
        Actions.mainMenu();
      }
    });
  };
};

export const createUser = ({ username, password, email }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('http://localhost:3000/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        }
      })
    }).then((response) => {
      if (response.status === 422) {
        console.log('CREAT USER ERROR!!');
        response.json().then(data => {
          dispatch({
            type: 'CREAT_USER_ERROR',
            payload: data.data.error
          });
        });
      } else {
        console.log('SUCCESS!!');
        response.json().then(data => {
          dispatch({
            type: 'CREATE_USER_SUCCESS',
            payload: data
          });
        });
        Actions.mainMenu();
      }
    });
  };
};
