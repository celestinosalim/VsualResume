import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import ProjectsForm from "../FormSections/ProjectsForm";
import { connect } from "react-redux";
import { updateResumeProjects } from "../../../store/actions/ProjectsActions";

class ProjectsModal extends Component {
  state = { modal: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  saveProjectsChangesSubmit = (e, obj) => {
    this.setState({
      modal: !this.state.modal
    });
    let resumeId = this.props.resume.id;
    console.log(obj);
    // debugger;
    this.props.updateResumeProjects(resumeId, obj);
    setTimeout(() => window.location.reload(), 42);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Projects</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Projects</ModalHeader>
          <ModalBody>
            <ProjectsForm
              saveProjectsChangesSubmit={this.saveProjectsChangesSubmit}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              Close
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let resume = state.resume.resume;
  return {
    resume
  };
};

export default connect(
  mapStateToProps,
  { updateResumeProjects }
)(ProjectsModal);
