import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import ExperienceForm from "../FormSections/ExperienceForm";
import { connect } from "react-redux";
import { updateResumeExperience } from "../../../store/actions/ExperienceActions";

class ExperienceModal extends Component {
  state = { modal: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  saveExperienceChangesSubmit = (e, obj) => {
    this.setState({
      modal: !this.state.modal
    });
    let resumeId = this.props.resume.id;

    this.props.updateResumeExperience(resumeId, obj);
    setTimeout(() => window.location.reload(), 42);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Experience</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Experience</ModalHeader>
          <ModalBody>
            <ExperienceForm
              saveExperienceChangesSubmit={this.saveExperienceChangesSubmit}
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
  { updateResumeExperience }
)(ExperienceModal);
