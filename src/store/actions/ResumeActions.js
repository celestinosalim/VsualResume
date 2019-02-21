import * as types from "./ActionTypes";

export const getResume = resume => {
  return {
    type: types.REQUEST_RESUME,
    resume //resume object
  };
};

export const getResumetoUser = resume => {
  return {
    type: types.REQUEST_RESUME_USER,
    resume //resume object
  };
};
export const requestResume = resume => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("token");
    return fetch(`http://localhost:3001/api/userResume`, {
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

export const requestLive = resume => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/resumes${window.location.pathname}`)
      .then(response => response.json())
      .then(console.log)
      .then(resume => dispatch(getResumetoUser(resume)))
      .catch(error => console.log(error));
  };
};
