import * as types from "./ActionTypes";
import { requestResume } from "./ResumeActions";

// Action Creators - FORM
const setEducation = resume => {
  return {
    type: types.UPDATE_EDUCATION,
    resume
  };
};

// Async Actions
export const updateResumeEducation = (resumeId, education) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/resumes/${resumeId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: {
          educations_attributes: education.education
        }
      })
    })
      .then(response => response.json())

      .then(resume => {
        dispatch(setEducation(resume));
      })
      .then(dispatch(requestResume()))
      .catch(error => console.log(error));
  };
};
