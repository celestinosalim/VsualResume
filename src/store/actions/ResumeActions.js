import * as types from "./ActionTypes";

export const getResume = resume => {
  return {
    type: types.REQUEST_RESUME,
    resume //resume object
  };
};
export const requestResume = resume => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("token");
    return fetch(`https://visualresume-api.herokuapp.com/api/userResume`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(resume => dispatch(getResume(resume)))
      .catch(error => console.log(error));
  };
};
