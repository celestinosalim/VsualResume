import React, { Component } from "react";
import { MDBInput, Container, Row, Col, Button } from "mdbreact";
import { requestProfile } from "../../../store/actions/ResumeActions";
import { connect } from "react-redux";

class ProfileForm extends Component {
  state = {
    id: "",
    name: "",
    age: 0,
    location: "",
    number: "",
    profile_picture: "",
    headline: "",
    about_me: "",
    background_image: "",
    profile_email: ""
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.id !== this.props.profile.id) {
      let {
        name,
        age,
        location,
        number,
        profile_picture,
        headline,
        about_me,
        background_image,
        profile_email,
        id
      } = this.props.profile;
      this.setState({
        id: id,
        name: name,
        age: age,
        location: location,
        number: number,
        profile_picture: profile_picture,
        headline: headline,
        about_me: about_me,
        background_image: background_image,
        profile_email: profile_email
      });
    }
  }

  componentDidMount() {
    this.props.requestProfile();
  }

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
            <form className="needs-validation" noValidate>
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
                    value={`${this.state.age}`}
                    name="age"
                    onChange={this.changeHandler}
                    type="text"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Contact Email"
                    value={this.state.profile_email}
                    onChange={this.changeHandler}
                    type="email"
                    name="profile_email"
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

                <div className="col-md-4 mb-3">
                  <MDBInput
                    label="Background Image"
                    value={this.state.background_image}
                    onChange={this.changeHandler}
                    type="text"
                    name="background_image"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Headline.
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
    profile: state.resume
  };
};

export default connect(
  mapStateToProps,
  { requestProfile }
)(ProfileForm);
