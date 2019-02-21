// REACT
//------------------------------------------------------------------------------------------
import React from "react";
import { connect } from "react-redux";

// TEMPLATE
//------------------------------------------------------------------------------------------

import Header from "./PreviewSections/Header";
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

const Live = props => {
  console.log(props);
  return (
    <div>
      <div>
        <h1
          style={{
            color: "red",
            textAlign: "center",
            paddingTop: "1000px",
            backgroundColor: "black",
            fontSize: "50px"
          }}
        >
          asdasdasd
          {props ? props.resume : null}
        </h1>
      </div>
      {/* {window.scrollTo(0, 50)}

      {props.resume && <Header resume={props.resume} />}
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
      <div /> */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Live);
