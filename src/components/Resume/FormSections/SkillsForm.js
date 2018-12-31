import React, { Component } from "react";
import { Container, Row, Col, Button } from "mdbreact";
import ToolsForm from "./ToolsForm";
import InterpersonalsForm from "./InterpersonalsForm";
import OthersForm from "./OthersForm";
import { connect } from "react-redux";
import { updateResumeSkills } from "../../../store/actions/SkillsActions";

class SkillsForm extends Component {
  state = {
    tools: [],
    interpersonals: [],
    others: []
  };

  saveToolsToSkillState = (e, obj) => {
    this.setState({
      tools: obj.tools
    });
  };

  saveOthersToSkillState = (e, obj) => {
    this.setState({
      others: obj.others
    });
  };

  saveInterpersonalsToSkillState = (e, obj) => {
    this.setState({
      interpersonals: obj.interpersonals
    });
  };

  SkillsToUpdate = e => {
    let resumeId = this.props.resume.id;

    this.props.updateResumeSkills(resumeId, this.state);
    this.props.toggle();
    setTimeout(() => window.location.reload(), 300);
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Tools & Skills</h1>
            <hr />
            <Row>
              <div className="col-md-4 mb-3">
                <ToolsForm saveToolsToSkillState={this.saveToolsToSkillState} />
              </div>
              <div className="col-md-4 mb-3">
                <InterpersonalsForm
                  saveInterpersonalsToSkillState={
                    this.saveInterpersonalsToSkillState
                  }
                />
              </div>
              <div className="col-md-4 mb-3">
                <OthersForm
                  saveOthersToSkillState={this.saveOthersToSkillState}
                />
              </div>
            </Row>
            <div className="col-md-4 mb-3" />
          </Col>
        </Row>
        <div>
          <Button color="primary" onClick={e => this.SkillsToUpdate()}>
            Save changes
          </Button>
        </div>
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
  { updateResumeSkills }
)(SkillsForm);
