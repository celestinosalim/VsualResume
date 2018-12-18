import React, { Component } from "react";
import { MDBInput, Container, Row, Col } from "mdbreact";

class SkillsForm extends Component {
  state = {
    tools: "",
    interpersonals: "",
    others: ""
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Tools & Skills</h1>
            <hr />
            <form
              className="needs-validation"
              //   onSubmit={this.submitHandler}
              noValidate
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx"
                        className="grey-text"
                      >
                        <h5>Tools and Technologies</h5>
                      </label>
                      <input
                        value={this.state.tools}
                        name="tools"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx"
                        className="form-control"
                        placeholder="Tools & Skills..."
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <button className="btn btn-info">Add</button>
                </div>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx2"
                        className="grey-text"
                      >
                        <h5>Interpersonal Skills</h5>
                      </label>
                      <input
                        value={this.state.interpersonals}
                        name="interpersonals"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx2"
                        className="form-control"
                        placeholder="Interpersonal Skills..."
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <button className="btn btn-info">Add</button>
                </div>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx3"
                        className="grey-text"
                      >
                        <h5>Others</h5>
                      </label>
                      <input
                        value={this.state.others}
                        name="others"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx3"
                        className="form-control"
                        placeholder="Other Skills."
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <button className="btn btn-info">Add</button>
                </div>
              </Row>

              <div className="col-md-4 mb-3" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkillsForm;
