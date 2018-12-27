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
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Education</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Education</ModalHeader>
          <ModalBody>
            <EducationForm />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>{" "}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default connect(
  null,
  { updateResumeEducation }
)(EducationModal);
