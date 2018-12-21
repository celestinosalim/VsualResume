import React, { Component } from "react";
import { Button, MDBInput, Container, Row, Col } from "mdbreact";
import { getResume } from "../../../store/actions/ResumeActions";
import { connect } from "react-redux";

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

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  // componentDidMount() {
  //   this.props.getUserResume();
  // }

  componentDidUpdate(prevState, prevProps) {
    // if (prevProps !== this.props.resume) {
    //   this.setState({
    //     name: this.props.name,
    //     age: this.props.age,
    //     location: this.props.location,
    //     number: this.props.number,
    //     profile_picture: this.props.profile_picture,
    //     headline: this.props.headline,
    //     about_me: this.props.about_me,
    //     background_image: this.props.background_image,
    //     email: this.props.email
    //   });
    // }
  }

  componentDidMount() {
    //   console.log(this.props.resume);
    //   this.setState({
    //     name: this.props.resume.name,
    //     age: this.props.resume.age,
    //     location: this.props.resume.location,
    //     number: this.props.resume.number,
    //     profile_picture: this.props.resume.profile_picture,
    //     headline: this.props.resume.headline,
    //     about_me: this.props.resume.about_me,
    //     background_image: this.props.resume.background_image,
    //     email: this.props.resume.email
    // });
  }

  render() {
    // console.log(this.state);
    console.log(this.props.resume);

    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Profile</h1>
            <hr />
            <form
              className="needs-validation"
              // onSubmit={e => this.submitHandler(e, this.state)}
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
        <Button
          color="primary"
          form="myForm"
          key="submit"
          onClick={e => this.props.saveChangesSubmit(e, this.state)}
        >
          Save changes
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    resume: state.resume
  };
};

export default connect(
  mapStateToProps,
  { getResume }
)(ProfileForm);
