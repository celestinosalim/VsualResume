import * as types from "./ActionTypes";

const setTemplate = resume => {
  return {
    type: types.UPDATE_TEMPLATE,
    resume
  };
};

export const updateTemplate = (resumeId, template) => {
  console.log(template);
  return dispatch => {
    return fetch(`${types.BASE_URL}/api/resumes/${resumeId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        resume: {
          template: template
        }
      })
    })
      .then(res => console.log(res))
      .then(response => response.json())
      .then(resume => {
        dispatch(setTemplate(resume));
      })

      .catch(error => console.log(error));
  };
};
