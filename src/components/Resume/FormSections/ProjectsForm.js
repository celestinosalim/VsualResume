import React, { Component } from "react";
import { MDBInput, Container, Row, Col } from "mdbreact";

class ProjectsForm extends Component {
  state = {
    name: "",
    url: "",
    description: "",
    image: ""
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
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
              <Row>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx"
                        className="grey-text"
                      >
                        <h5>Project Name</h5>
                      </label>
                      <input
                        value={this.state.name}
                        name="name"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx"
                        className="form-control"
                        placeholder="My Awesome Project"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx2"
                        className="grey-text"
                      >
                        <h5>Project Url</h5>
                      </label>
                      <input
                        value={this.state.url}
                        name="url"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx2"
                        className="form-control"
                        placeholder="a link to your project"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx3"
                        className="grey-text"
                      >
                        <h5>Project Description</h5>
                      </label>
                      <input
                        value={this.state.description}
                        name="description"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx3"
                        className="form-control"
                        placeholder="Small description about your project"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div>
                    <div>
                      <label
                        htmlFor="defaultFormRegisterNameEx4"
                        className="grey-text"
                      >
                        <h5>Project Image</h5>
                      </label>
                      <input
                        value={this.state.image}
                        name="image"
                        onChange={this.changeHandler}
                        type="text"
                        id="defaultFormRegisterNameEx4"
                        className="form-control"
                        placeholder="Image For your Project Card"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>
              </Row>
              <button className="btn btn-info">Add Project</button>
              <div className="col-md-4 mb-3" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectsForm;
