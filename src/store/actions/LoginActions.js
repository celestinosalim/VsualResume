import * as types from "./ActionTypes";

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  };
};

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  };
};

const authFailure = errors => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
  };
};

export const signup = user => {
  // debugger;
  const newUser = user;
  return dispatch => {
    return fetch(`${`https://my-resume-v2-api.herokuapp.com/api`}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user.signup_username,
          email: user.signup_email,
          password: user.signup_password,
          avatar: user.avatar
        }
      })
    })
      .then(response => response.json())
      .then(res =>
        dispatch(
          authenticate({
            username: newUser.signup_username,
            password: newUser.signup_password
          })
        )
      )
      .catch(errors => {
        dispatch(authFailure(errors));
      });
  };
};

export const authenticate = credentials => {
  // debugger;
  return dispatch => {
    dispatch(authRequest());
    return fetch(`${`https://my-resume-v2-api.herokuapp.com/api/`}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: credentials.username,
          password: credentials.password
        }
      })
    })
      .then(res => res.json())
      .then(response => {
        const token = response.jwt;
        localStorage.setItem("token", token);
        return getUser(credentials);
      })

      .then(user => {
        dispatch(authSuccess(user, localStorage.token));
      })

      .catch(errors => {
        dispatch(authFailure(errors));
        localStorage.clear();
      });
  };
};

export const getUser = credentials => {
  const request = new Request(
    `${`https://my-resume-v2-api.herokuapp.com/api/`}login`,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }),
      body: JSON.stringify({
        user: {
          username: credentials.username,
          password: credentials.password
        }
      })
    }
  );
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {
      return userJson;
    })
    .catch(error => {
      return error;
    });
};
