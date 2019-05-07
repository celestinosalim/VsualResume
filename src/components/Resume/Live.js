// REACT
//------------------------------------------------------------------------------------------
import React from "react";
import { connect } from "react-redux";

// TEMPLATE
//------------------------------------------------------------------------------------------

// import Header from "./PreviewSections/Header";
// import ProfileSection from "./PreviewSections/ProfileSection";
// import EducationSection from "./PreviewSections/EducationSection";
// import ExperienceSection from "./PreviewSections/ExperienceSection";
// import SkillSection from "./PreviewSections/SkillSection";
// import ProjectSection from "./PreviewSections/ProjectSection";
// import FooterSection from "./PreviewSections/FooterSection";
// import SideNavPage from "./SideNavPage";
// STYLE
//------------------------------------------------------------------------------------------
import "../../style/preview.css";

const timing = () => {
  setTimeout(() => {
    window.location.pathname = localStorage.getItem("user");
  }, 1000);
};

const Live = props => {
  return (
    <div>
      {window.scrollTo(0, 50)}
      {timing()}
    </div>
  );
};

const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Live);
