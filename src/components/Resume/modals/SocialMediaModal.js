import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import SocialMediaForm from "../FormSections/SocialMediaForm";
import { connect } from "react-redux";
import { updateResumeMedia } from "../../../store/actions/SocialMediaActions";

class SocialMediaModal extends Component {
  state = { modal: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  saveMediaChangesSubmit = (e, obj) => {
    this.setState({
      modal: !this.state.modal
    });

    let resumeId = this.props.resume.id;
    this.props.updateResumeMedia(resumeId, obj);
    setTimeout(() => window.location.reload(), 300);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Social Media</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Social Media</ModalHeader>
          <ModalBody>
            <SocialMediaForm
              saveMediaChangesSubmit={this.saveMediaChangesSubmit}
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
  { updateResumeMedia }
)(SocialMediaModal);
