import React, { Component } from "react";
import { MDBInput, Container, Row, Col } from "mdbreact";

class ProfileForm extends Component {
  state = {
    name: "",
    age: "",
    location: "",
    number: "",
    profile_picture: "",
    headline: "",
    about_me: "",
    background_image: "",
    email: ""
  };

  //   submitHandler = event => {
  //     event.preventDefault();
  //     event.target.className += " was-validated";
  //   };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Profile</h1>
            <hr />
            <form
              className="needs-validation"
              //   onSubmit={this.submitHandler}
              noValidate
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Full Name"
                    value={this.state.name}
                    name="name"
                    onChange={this.changeHandler}
                    type="text"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Full Address"
                    value={this.state.location}
                    name="location"
                    onChange={this.changeHandler}
                    type="text"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Number"
                    value={this.state.number}
                    onChange={this.changeHandler}
                    type="text"
                    name="number"
                    required
                  />
                  <div className="invalid-feedback">Please try again.</div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </Row>
              <Row>
                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Profile Picture"
                    value={this.state.profile_picture}
                    onChange={this.changeHandler}
                    type="text"
                    name="profile_picture"
                    required
                  />
                  <div className="invalid-feedback">Please try again.</div>
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Age"
                    value={this.state.age}
                    name="age"
                    onChange={this.changeHandler}
                    type="text"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    name="email"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Headline"
                    value={this.state.headline}
                    onChange={this.changeHandler}
                    type="text"
                    name="headline"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Headline.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    type="textarea"
                    label="About Me"
                    rows="5"
                    value={this.state.about_me}
                    onChange={this.changeHandler}
                    name="about_me"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid description.
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

export default ProfileForm;
