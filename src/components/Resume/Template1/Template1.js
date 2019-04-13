import React, { Component } from "react";
import Header from "../PreviewSections/Header";
import Footer from "../../Footer/Footer";
import ProfileSection from "../PreviewSections/ProfileSection";
import EducationSection from "../PreviewSections/EducationSection";
import ExperienceSection from "../PreviewSections/ExperienceSection";
import SkillSection from "../PreviewSections/SkillSection";
import ProjectSection from "../PreviewSections/ProjectSection";
import FooterSection from "../PreviewSections/FooterSection";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Template1 extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        <Link className="btn btn" to="/live">
          SELECT TEMPLATE
        </Link>
        <img src="" />
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
            backgroundColor: "white"
          }}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Template1);
