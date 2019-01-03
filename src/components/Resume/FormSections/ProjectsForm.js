import React, { Component } from "react";
import { Container, Row, Col, Button } from "mdbreact";
import { connect } from "react-redux";

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

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      projects: this.state.projects.filter((s, _idx) => _idx !== idx)
    });
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
    this.setState({ projects: newProjects });
  };

  projectsToAdd = () => {
    let { projects } = this.state;
    let { name, url, description, image } = this.state.projects;

    return projects.map((projects, idx) => {
      return (
        <div key={idx}>
          <Row>
            <div className="col-md-4 mb-3">
              <label htmlFor="name">Project Name</label>
              <input
                className="form-control"
                value={name}
                name="name"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
              />
              <div className="invalid-feedback">Cannot be empty!</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="url">Project URL</label>
              <input
                className="form-control"
                value={url}
                name="url"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="url"
                required
              />
              <div className="invalid-feedback">Cannot be empty!</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="image">Project Image</label>
              <input
                className="form-control"
                value={image}
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                name="image"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid image.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="3"
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
      this.props.saveProjectsChangesSubmit(e, obj);
    }
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
              onSubmit={e => this.handleSubmit(e, this.state)}
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
  let { projects } = state.resume.resume;

  return {
    projects
  };
};

export default connect(mapStateToProps)(ProjectsForm);
