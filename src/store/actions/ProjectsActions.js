import * as types from "./ActionTypes";

const setProjects = resume => {
  return {
    type: types.UPDATE_PROJECTS,
    resume
  };
};

export const updateResumeProjects = (resumeId, obj) => {
  return dispatch => {
    return fetch(`${types.BASE_URL}/api/resumes/${resumeId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: {
          projects_attributes: obj.projects
        }
      })
    })
      .then(response => response.json())

      .then(resume => {
        dispatch(setProjects(resume));
      })
      .catch(error => console.log(error));
  };
};
