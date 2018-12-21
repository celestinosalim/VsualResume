import * as types from "./ActionTypes";

// Action Creators - FORM
export const resetProfileForm = () => {
  return {
    type: types.RESET_FORM
  };
};

const setSelectedResume = resume => {
  return {
    type: types.UPDATE_PROFILE,
    resume
  };
};

// Async Actions
export const updateResume = (resumeId, resume) => {
  return dispatch => {
    return (
      fetch(`http://localhost:3001/api/resumes/${1}`, {
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
              background_image: resume.background_image
            }
          }
        })
      })
        .then(response => response.json())
        .then(console.log)
        //   .then(resume => {
        //     dispatch(setSelectedResume(resume));
        //     dispatch(resetProfileForm());
        //   })
        .catch(error => console.log(error))
    );
  };
};
