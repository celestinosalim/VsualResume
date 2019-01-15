import * as types from "./ActionTypes";

const setSocialMedia = resume => {
  return {
    type: types.UPDATE_SOCIALMEDIA,
    resume
  };
};

export const updateResumeMedia = (resumeId, obj) => {
  return dispatch => {
    return fetch(
      `https://visualresume-api.herokuapp.com/api/resumes/${resumeId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          resume: {
            social_medium_attributes: obj.social_medium
          }
        })
      }
    )
      .then(response => response.json())

      .then(resume => {
        dispatch(setSocialMedia(resume));
      })

      .catch(error => console.log(error));
  };
};
