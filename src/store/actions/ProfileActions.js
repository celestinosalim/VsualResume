import * as types from "./ActionTypes";
import { requestResume } from "./ResumeActions";

// Action Creators - FORM
const setProfile = resume => {
  return {
    type: types.UPDATE_PROFILE,
    resume
  };
};

// Async Actions
export const updateResumeProfile = (resumeId, profile) => {
  let {
    name,
    age,
    location,
    number,
    profile_picture,
    headline,
    about_me,
    background_image,
    profile_email
  } = profile;

  return dispatch => {
    return fetch(
      `https://my-resume-v2-api.herokuapp.com/api/resumes/${resumeId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          resume: {
            profile_attributes: {
              name: name,
              age: age,
              location: location,
              number: number,
              profile_picture: profile_picture,
              headline: headline,
              about_me: about_me,
              background_image: background_image,
              profile_email: profile_email
            }
          }
        })
      }
    )
      .then(response => response.json())

      .then(resume => {
        dispatch(setProfile(resume));
      })
      .then(dispatch(requestResume()))
      .catch(error => console.log(error));
  };
};
