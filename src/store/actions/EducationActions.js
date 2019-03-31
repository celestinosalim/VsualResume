import * as types from "./ActionTypes";

const setEducation = resume => {
  return {
    type: types.UPDATE_EDUCATION,
    resume
  };
};

export const updateResumeEducation = (resumeId, obj) => {
  return dispatch => {
    return fetch(`${types.BASE_URL}/api/resumes/${resumeId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: {
          educations_attributes: obj.education
        }
      })
    })
      .then(response => response.json())

      .then(resume => {
        dispatch(setEducation(resume));
      })

      .catch(error => console.log(error));
  };
};
