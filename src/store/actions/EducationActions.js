import * as types from "./ActionTypes";
import { requestEducation } from "./ResumeActions";

// Action Creators - FORM
const setSelectedResume = resume => {
  return {
    type: types.UPDATE_EDUCATION,
    resume
  };
};

// Async Actions
export const updateResumeEducation = resume => {
  return dispatch => {
    dispatch(requestEducation(resume))
      .then(res => {
        return fetch(
          `http://localhost:3001/api/resumes/${res.resume.resume.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              resume: {
                education_attributes: {
                  start_date: resume.start_date,
                  end_date: resume.end_date,
                  location: resume.location,
                  degree: resume.degree,
                  university: resume.university,
                  description: resume.description
                }
              }
            })
          }
        );
      })
      .then(response => response.json())

      .then(resume => {
        dispatch(setSelectedResume(resume));
      })
      .catch(error => console.log(error));
  };
};
