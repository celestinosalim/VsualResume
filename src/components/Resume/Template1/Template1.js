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
import { updateTemplate } from "../../../store/actions/TemplateActions";

class Template1 extends Component {
  setTemplate = e => {
    let templateId = 1;

    if (this.props.resume) {
      let resumeId = this.props.resume.id;
      this.props.updateTemplate(resumeId, templateId);
      console.log(this.props.resume);
    }
  };
  render() {
    let props = this.props;

    return (
      <div>
        <Link
          onClick={e => this.setTemplate(e)}
          className="btn btn-red"
          to="/live"
        >
          SELECT TEMPLATE
        </Link>
        <img src="" alt="" />
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

export default connect(
  mapStateToProps,
  { updateTemplate }
)(Template1);
