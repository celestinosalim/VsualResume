import React, { Component } from "react";
import { MDBInput, MDBDatePicker, Container, Row, Col } from "mdbreact";

class ExperienceForm extends Component {
  state = {
    experience: [
      {
        start_date: "",
        end_date: "",
        location: "",
        role: "",
        company: "",
        description: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      experience: [
        ...this.state.experience,
        {
          start_date: "",
          end_date: "",
          location: "",
          degree: "",
          university: "",
          description: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newExperience = this.state.experience.map(
      (experience, experienceIdx) => {
        if (idx !== experienceIdx) {
          return experience;
        }
        return { ...experience, [e.target.name]: e.target.value };
      }
    );
    this.setState({ experience: newExperience });
  };

  experienceToAdd = () => {
    let { experience } = this.state;
    let {
      start_date,
      end_date,
      location,
      role,
      company,
      description
    } = this.state.experience;

    return experience.map((experience, idx) => {
      return (
        <div key={idx}>
          <Row>
            <div className="col-md-4 mb-3">
              <MDBInput
                label="Start Date"
                value={start_date}
                name="start_date"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="Date"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                label="End Date"
                value={end_date}
                name="end_date"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="Date"
                required
              />

              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                label="Enter Institution"
                value={company}
                name="company"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </Row>
          <Row>
            <div className="col-md-4 mb-3">
              <MDBInput
                label="Enter Location"
                value={location}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="location"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Location.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                type="textarea"
                rows="5"
                label="Description"
                value={description}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                name="description"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid description.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                label="Role"
                value={role}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="role"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Degree.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </Row>
          <button className="btn btn-danger">Delete Field</button>
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Experience</h1>
            <hr />
            <form
              className="needs-validation"
              //   onSubmit={this.submitHandler}
              noValidate
            >
              <div className="col-md-4 mb-3" />
              {this.state.experience.length < 5 && (
                <button
                  className="btn btn-info"
                  onClick={e => this.handleClick(e)}
                >
                  Add New Experience
                </button>
              )}

              {this.experienceToAdd()}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ExperienceForm;
