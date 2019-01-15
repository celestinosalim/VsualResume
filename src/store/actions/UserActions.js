import * as types from "./ActionTypes";

export const getUserInfo = user => {
  return {
    type: types.REQUEST_USER,
    user
  };
};
export const requestUser = user => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("token");
    return fetch(`https://visualresume-api.herokuapp.com/api/profile`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(user => dispatch(getUserInfo(user)))
      .catch(error => console.log(error));
  };
};
