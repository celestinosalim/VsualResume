import * as types from "./ActionTypes";

const setSkills = resume => {
  return {
    type: types.UPDATE_SKILLS,
    resume
  };
};

export const updateResumeSkills = (resumeId, obj) => {
  console.log(obj);

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
            skills_attributes: [
              {
                tools_attributes: obj.tools,
                others_attributes: obj.others,
                interpersonals_attributes: obj.interpersonals
              }
            ]
          }
        })
      }
    )
      .then(response => response.json())

      .then(resume => {
        dispatch(setSkills(resume));
      })

      .catch(error => console.log(error));
  };
};
