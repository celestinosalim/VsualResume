import React, { Component } from "react";
import { MDBInput, MDBDatePicker, Container, Row, Col } from "mdbreact";

class EducationForm extends Component {
  state = {
    start_date: "",
    end_date: "",
    location: "",
    degree: "",
    university: "",
    description: ""
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Education</h1>
            <hr />
            <form
              className="needs-validation"
              //   onSubmit={this.submitHandler}
              noValidate
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Start Date
                  </label>
                  <input
                    value={this.state.start_date}
                    name="start_date"
                    onChange={this.changeHandler}
                    type="Date"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    End Date
                  </label>
                  <input
                    value={this.state.end_date}
                    name="end_date"
                    onChange={this.changeHandler}
                    type="Date"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Institution
                  </label>
                  <input
                    value={this.state.university}
                    name="university"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Enter Institution"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </Row>
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Location
                  </label>
                  <input
                    value={this.state.location}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="location"
                    placeholder="Location"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Location.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    value={this.state.description}
                    onChange={this.changeHandler}
                    name="description"
                    placeholder="Degree details"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid description.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Degree
                  </label>
                  <input
                    value={this.state.degree}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="degree"
                    placeholder="E.g. Software Engineering"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Degree.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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

export default EducationForm;
