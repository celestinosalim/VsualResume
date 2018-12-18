import React, { Component } from "react";
import ProfileForm from "./FormSections/ProfileForm";
import EducationForm from "./FormSections/EducationForm";
import ExperienceForm from "./FormSections/ExperienceForm";
import SkillsForm from "./FormSections/SkillsForm";
import ProjectsForm from "./FormSections/ProjectsForm";

class CreateForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProfileForm />
        <EducationForm />
        <ExperienceForm />
        <SkillsForm />
        <ProjectsForm />
      </div>
    );
  }
}

export default CreateForm;
