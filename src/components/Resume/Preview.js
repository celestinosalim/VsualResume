// REACT
//------------------------------------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// TEMPLATE
//------------------------------------------------------------------------------------------

import Header from "./PreviewSections/Header";
import Footer from "../Footer/Footer";
import ProfileSection from "./PreviewSections/ProfileSection";
import EducationSection from "./PreviewSections/EducationSection";
import ExperienceSection from "./PreviewSections/ExperienceSection";
import SkillSection from "./PreviewSections/SkillSection";
import ProjectSection from "./PreviewSections/ProjectSection";
import FooterSection from "./PreviewSections/FooterSection";

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

        {props.resume && <FooterSection resume={props.resume} />}
      </div>
      <div
        style={{
          backgroundColor: "black"
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
