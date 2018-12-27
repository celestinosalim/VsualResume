import * as types from "./ActionTypes";
import { requestResume } from "./ResumeActions";

// Action Creators - FORM
const setSelectedResume = resume => {
  return {
    type: types.UPDATE_PROFILE,
    resume
  };
};

// Async Actions
export const updateResumeProfile = resume => {
  return dispatch => {
    dispatch(requestResume(resume))
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
                profile_attributes: {
                  name: resume.name,
                  age: resume.age,
                  location: resume.location,
                  number: resume.number,
                  profile_picture: resume.profile_picture,
                  headline: resume.headline,
                  about_me: resume.about_me,
                  background_image: resume.background_image,
                  profile_email: resume.profile_email
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
