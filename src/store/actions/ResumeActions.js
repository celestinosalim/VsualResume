import * as types from "./ActionTypes";

export const getProfile = resume => {
  return {
    type: types.REQUEST_PROFILE,
    resume //resume object
  };
};

export const getEducation = resume => {
  let educations = resume.resume.educations;
  return {
    type: types.REQUEST_EDUCATION,
    educations //resume object
  };
};

export const getResume = resume => {
  return {
    type: types.REQUEST_RESUME,
    resume //resume object
  };
};

export const requestProfile = resume => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("token");
    return (
      fetch(`http://localhost:3001/api/userResume`, {
        method: "GET",
        headers: {
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(resume => dispatch(getProfile(resume)))
        // .then(res => console.log(res))
        .catch(error => console.log(error))
    );
  };
};

export const requestEducation = resume => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("token");
    return fetch(`http://localhost:3001/api/userResume`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(resume => dispatch(getEducation(resume)))
      .catch(error => console.log(error));
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
