import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import ToolsForm from "./ToolsForm";
import InterpersonalsForm from "./InterpersonalsForm";
import OthersForm from "./OthersForm";

class SkillsForm extends Component {
  state = {};

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Tools & Skills</h1>
            <hr />
            <Row>
              <div className="col-md-4 mb-3">
                <ToolsForm />
              </div>
              <div className="col-md-4 mb-3">
                <InterpersonalsForm />
              </div>
              <div className="col-md-4 mb-3">
                <OthersForm />
              </div>
            </Row>
            <div className="col-md-4 mb-3" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkillsForm;
