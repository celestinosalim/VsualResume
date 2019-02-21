import React from "react";
// TEMPLATE
//------------------------------------------------------------------------------------------

import HeaderLive from "./LiveSections/HeaderLive";
import ProfileSection from "./PreviewSections/ProfileSection";
import EducationSection from "./PreviewSections/EducationSection";
import ExperienceSection from "./PreviewSections/ExperienceSection";
import SkillSection from "./PreviewSections/SkillSection";
import ProjectSection from "./PreviewSections/ProjectSection";
import FooterSection from "./PreviewSections/FooterSection";
import SideNavPage from "./SideNavPage";
// STYLE
//------------------------------------------------------------------------------------------
import "../../style/preview.css";

const Resume = props => {
  return (
    <div>
      {window.scrollTo(0, 50)}
      {props.resume && <HeaderLive resume={props.resume} />}
      <div id="Display">
        <section id="profilelive">
          {props.resume && <ProfileSection resume={props.resume} />}
        </section>
        <section id="educationlive">
          {props.resume && <EducationSection resume={props.resume} />}
        </section>
        <SideNavPage />
        <section id="experiencelive">
          {props.resume && <ExperienceSection resume={props.resume} />}
        </section>
        <section id="skillslive">
          {props.resume && <SkillSection resume={props.resume} />}
        </section>
        <section id="projectslive">
          {props.resume && <ProjectSection resume={props.resume} />}
        </section>
        {props.resume && <FooterSection resume={props.resume} />}
      </div>
      <div />
    </div>
  );
};

export default Resume;
