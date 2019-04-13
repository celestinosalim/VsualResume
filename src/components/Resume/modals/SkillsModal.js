import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import SkillsForm from "../FormSections/SkillsForm";

class SkillsModal extends Component {
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

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Edit Skills</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>Edit Skills</ModalHeader>
          <ModalBody>
            <SkillsForm
              saveSkillsHandleClick={this.saveSkillsHandleClick}
              toggle={this.toggle}
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

export default SkillsModal;
