import React, { Component } from "react";
import { MDBInput, MDBDatePicker, Container, Row, Col } from "mdbreact";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class EducationForm extends Component {
  state = {
    education: [
      {
        start_date: "",
        end_date: "",
        location: "",
        degree: "",
        university: "",
        description: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      education: [
        ...this.state.education,
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

  educationToAdd = () => {
    let { education } = this.state;
    let {
      start_date,
      end_date,
      location,
      degree,
      university,
      description
    } = this.state.education;

    return education.map((education, idx) => {
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
                value={university}
                name="university"
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
                label="Degree"
                value={degree}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="degree"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Degree.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </Row>
        </div>
      );
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newEducation = this.state.education.map((education, educationIdx) => {
      if (idx !== educationIdx) {
        return education;
      }
      return { ...education, [e.target.name]: e.target.value };
    });
    this.setState({ education: newEducation });
  };

  render() {
    console.log(this.state);

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
              <div className="col-md-4 mb-3" />
              <button
                className="btn btn-info"
                onClick={e => this.handleClick(e)}
              >
                Add New Education
              </button>
              {this.educationToAdd()}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EducationForm;