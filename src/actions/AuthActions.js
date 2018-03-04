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

export const loginUser = ({ username, password }) => (
  (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('https://floating-escarpment-15714.herokuapp.com/authentications', {
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
    })
      .then((response) => {
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');
          response.json()
            .then(data => {
              loginUserSuccess(dispatch, data["auth_token"])
            })
            .catch((error) => {
              console.log('ERROROROR2: ' + error)
            })
        }
      })
      .catch((error) => {
        console.log('ERROROROR3: ' + error)
      });
  }
);

const loginUserSuccess = (dispatch, data) => {
  console.log(data)
  dispatch({
    type: 'LOGIN_USER_SUCCESS',
    payload: data,
  })
  console.log('okokok')
  Actions.mainMenu();
}

export const createUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('https://floating-escarpment-15714.herokuapp.com/users', {
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
      if (response.status === 422) {
        console.log('CREAT USER ERROR!!');
        response.json().then(data => {
          dispatch({
            type: 'CREATE_USER_ERROR',
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
        Actions.login();
      }
    });
  };
};
