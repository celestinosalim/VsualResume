import React, { Component } from "react";
import { Container, Row, Col, Button } from "mdbreact";
import { connect } from "react-redux";

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

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience.filter((s, _idx) => _idx !== idx)
    });
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
          role: "",
          company: "",
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
              <label htmlFor="company">Institution</label>
              <input
                className="form-control"
                value={company}
                name="company"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
                pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="35"
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
                pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="35"
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
                pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="15"
                maxLength="150"
              />
              <div className="invalid-feedback">
                Please provide a valid description.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="role">Role</label>
              <input
                className="form-control"
                value={role}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="role"
                required
                pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="35"
              />
              <div className="invalid-feedback">
                Please provide a valid Role.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </Row>

          <br />
          <div>
            <button
              onClick={e => this.handleDeleteField(e, idx)}
              className="btn btn-danger"
            >
              Delete Field
            </button>
          </div>
        </div>
      );
    });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (e.target.checkValidity() === true) {
      this.props.saveExperienceChangesSubmit(e, obj);
    }
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
              onSubmit={e => this.handleSubmit(e, this.state)}
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
  let { experiences } = state.resume.resume;

  return {
    experience: experiences
  };
};

export default connect(mapStateToProps)(ExperienceForm);
