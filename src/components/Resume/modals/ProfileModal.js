import React from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import ProfileForm from "../FormSections/ProfileForm";
import { connect } from "react-redux";
import { updateResumeProfile } from "../../../store/actions/ProfileActions";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

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

  saveChangesSubmit = (e, obj) => {
    this.setState({
      modal: !this.state.modal
    });
    let resumeId = this.props.resume.id;

    this.props.updateResumeProfile(resumeId, obj);
    setTimeout(() => window.location.reload(), 42);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Profile</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <ModalBody>
            <ProfileForm
              id="myForm"
              saveChangesSubmit={this.saveChangesSubmit}
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
  { updateResumeProfile }
)(ProfileModal);
