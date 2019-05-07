import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateTemplate } from "../../../store/actions/TemplateActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  SideBar,
  Intro,
  About,
  ProjectContainer,
  Skills,
  Footer
} from "vs-template1";

class Template2 extends Component {
  setTemplate = e => {
    let templateId = 2;

    if (this.props.resume) {
      let resumeId = this.props.resume.id;
      this.props.updateTemplate(resumeId, templateId);
      console.log(this.props.resume);
    }
  };

  render() {
    return (
      <div>
        <Link
          onClick={e => this.setTemplate(e)}
          className="btn btn-blue"
          to="/live"
        >
          SELECT TEMPLATE
        </Link>
        <Intro />
        {this.props.location.pathname === "/resume/review" ? null : <SideBar />}
        <About />
        <Skills />
        <ProjectContainer />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateTemplate }
  )(Template2)
);
