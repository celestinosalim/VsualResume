import React, { Component } from "react";
import { MDBInput, Container, Row, Col } from "mdbreact";

class ProjectsForm extends Component {
  state = {
    projects: [
      {
        name: "",
        url: "",
        description: "",
        image: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      projects: [
        ...this.state.projects,
        {
          name: "",
          url: "",
          description: "",
          image: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newProjects = this.state.projects.map((projects, projectsIdx) => {
      if (idx !== projectsIdx) {
        return projects;
      }
      return { ...projects, [e.target.name]: e.target.value };
    });
    this.setState({ experience: newProjects });
  };

  projectsToAdd = () => {
    let { projects } = this.state;
    let { name, url, description, image } = this.state.projects;

    return projects.map((projects, idx) => {
      return (
        <div key={idx}>
          <Row>
            <div className="col-md-4 mb-3">
              <MDBInput
                label="Project Name"
                value={name}
                name="name"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                label="Project URL"
                value={url}
                name="url"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="url"
                required
              />

              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                label="Project Image"
                value={image}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="image"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Degree.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <MDBInput
                type="textarea"
                rows="3"
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
          </Row>
          <button className="btn btn-danger">Delete Field</button>
        </div>
      );
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Projects</h1>
            <hr />
            <form
              className="needs-validation"
              //   onSubmit={this.submitHandler}
              noValidate
            >
              <div className="col-md-4 mb-3" />
              {this.state.projects.length < 5 && (
                <button
                  className="btn btn-info"
                  onClick={e => this.handleClick(e)}
                >
                  Add New Projects
                </button>
              )}

              {this.projectsToAdd()}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectsForm;
