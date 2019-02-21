import * as types from "./ActionTypes";

const setExperience = resume => {
  return {
    type: types.UPDATE_EXPERIENCE,
    resume
  };
};

export const updateResumeExperience = (resumeId, obj) => {
  return dispatch => {
    return fetch(`https://my-resume-v2-api.herokuapp.com/resumes/${resumeId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: {
          experiences_attributes: obj.experience
        }
      })
    })
      .then(response => response.json())

      .then(resume => {
        dispatch(setExperience(resume));
      })

      .catch(error => console.log(error));
  };
};
