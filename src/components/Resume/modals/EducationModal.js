import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import EducationForm from "../FormSections/EducationForm";
import { connect } from "react-redux";
import { updateResumeEducation } from "../../../store/actions/EducationActions";

class EducationModal extends Component {
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

  saveEducationChangesSubmit = (e, obj) => {
    this.setState({
      modal: !this.state.modal
    });
    let resumeId = this.props.resume.id;

    this.props.updateResumeEducation(resumeId, obj);
    setTimeout(() => window.location.reload(), 42);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Education</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Education</ModalHeader>
          <ModalBody>
            <EducationForm
              saveEducationChangesSubmit={this.saveEducationChangesSubmit}
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
  { updateResumeEducation }
)(EducationModal);
