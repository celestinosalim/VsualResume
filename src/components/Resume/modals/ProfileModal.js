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
  };

  saveChangesSubmit = (e, obj) => {
    // e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });

    this.props.updateResumeProfile(obj);
    console.log("this is props from savechanges", obj);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Profile</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <ModalBody>
            <ProfileForm
              toggle={this.toggle}
              id="myForm"
              saveChangesSubmit={this.saveChangesSubmit}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default connect(
  null,
  { updateResumeProfile }
)(ProfileModal);
