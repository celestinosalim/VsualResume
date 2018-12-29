import React, { Component } from "react";
import { Container, Row, Col, Button } from "mdbreact";
import { connect } from "react-redux";

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
              <label htmlFor="start_date">Start Date</label>
              <input
                className="form-control"
                value={start_date}
                name="start_date"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="Date"
                required
              />
              <div className="invalid-feedback">Cannot be empty!</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="end_date">End Date</label>
              <input
                className="form-control"
                value={end_date}
                name="end_date"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="Date"
                required
              />
              <div className="invalid-feedback">Cannot be empty!</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="university">Institution</label>
              <input
                className="form-control"
                value={university}
                name="university"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
              />
              <div className="invalid-feedback">Cannot be empty!</div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </Row>
          <Row>
            <div className="col-md-4 mb-3">
              <label htmlFor="location">Location</label>
              <input
                className="form-control"
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
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="5"
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
              <label htmlFor="degree">Degree</label>
              <input
                className="form-control"
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
          <button className="btn btn-danger">Delete Field</button>
          <br />
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

  handleSubmit = (e, obj) => {
    e.preventDefault();
    this.props.saveEducationChangesSubmit(e, obj);
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
              onSubmit={e => this.handleSubmit(e, this.state)}
              noValidate
            >
              <div className="col-md-4 mb-3" />
              {this.state.education.length < 5 && (
                <button
                  className="btn btn-info"
                  onClick={e => this.handleClick(e)}
                >
                  Add New Education
                </button>
              )}

              {this.educationToAdd()}
              <Button color="primary" type="submit">
                Save Changes
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let { educations } = state.resume.resume;

  return {
    education: educations
  };
};

export default connect(mapStateToProps)(EducationForm);
