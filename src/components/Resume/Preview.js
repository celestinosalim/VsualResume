// REACT
//------------------------------------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SocialMediaModal from "./modals/SocialMediaModal";

// TEMPLATE
//------------------------------------------------------------------------------------------

import Header from "./PreviewSections/Header";
import Footer from "../Footer/Footer";
import ProfileSection from "./PreviewSections/ProfileSection";
import EducationSection from "./PreviewSections/EducationSection";
import ExperienceSection from "./PreviewSections/ExperienceSection";
import SkillSection from "./PreviewSections/SkillSection";
import ProjectSection from "./PreviewSections/ProjectSection";

// STYLE
//------------------------------------------------------------------------------------------
import "../../style/preview.css";

const Preview = props => {
  return (
    <div className="page" style={{ paddingRight: "2em", paddingLeft: "2em" }}>
      {props.resume && <Header resume={props.resume} />}
      <div id="Display">
        {props.resume && <ProfileSection resume={props.resume} />}

        {props.resume && <EducationSection resume={props.resume} />}

        {props.resume && <ExperienceSection resume={props.resume} />}

        {props.resume && <SkillSection resume={props.resume} />}

        {props.resume && <ProjectSection resume={props.resume} />}

        <div id="contact">
          <h1>Contact Info</h1>
          <p>footer with the information of the user.</p>
          <div style={{ textAlign: "right", paddingLeft: "400px" }}>
            <SocialMediaModal />
          </div>
        </div>
      </div>
      <div
        className="card card-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"
        }}
      >
        <div className="text-white text-center  align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h3 className="card-title pt-2">
              <strong>GO LIVE</strong>
            </h3>

            <Link className="btn btn-info" to="/live">
              LIVE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Preview);
