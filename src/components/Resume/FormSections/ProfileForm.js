import React, { Component } from "react";
import { Container, Row, Col, Button } from "mdbreact";
import { connect } from "react-redux";

class ProfileForm extends Component {
  state = {
    id: 0,
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

  componentDidMount() {
    this.setState({
      state: this.state
    });
  }

  componentDidUpdate(prevState, prevProps) {
    // console.log(this.props);
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

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    e.target.className += " was-validated";

    if (e.target.checkValidity() === true) {
      this.props.saveChangesSubmit(e, obj);
    }
  };

  render() {
    console.log(this.props);

    return (
      <Container className="mt-5">
        <Row className="mt-6">
          <Col md="">
            <h1>Profile</h1>
            <hr />
            <form
              className="needs-validation"
              noValidate
              onSubmit={e => this.handleSubmit(e, this.state)}
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    value={this.state.name}
                    name="name"
                    onChange={this.changeHandler}
                    className="form-control"
                    type="text"
                    required
                    pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                    minLength="5"
                    maxLength="50"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Cannot be empty!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="location">Full Address</label>
                  <input
                    value={this.state.location}
                    name="location"
                    className="form-control"
                    onChange={this.changeHandler}
                    type="text"
                    required
                    pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                    minLength="5"
                    maxLength="50"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Cannot be empty!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="number">Contact Number</label>
                  <input
                    className="form-control"
                    value={this.state.number}
                    onChange={this.changeHandler}
                    type="tel"
                    name="number"
                    required
                    pattern="^\d{3}-\d{3}-\d{4}$"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Cannot be empty, format: 000-000-0000
                  </div>
                </div>
              </Row>
              <Row>
                <div className="col-md-4 mb-3">
                  <label htmlFor="profile_picture">Profile Picture</label>
                  <input
                    className="form-control"
                    value={this.state.profile_picture}
                    onChange={this.changeHandler}
                    type="text"
                    name="profile_picture"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Cannot be empty!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="age">Age</label>
                  <input
                    className="form-control"
                    value={`${this.state.age}`}
                    name="age"
                    onChange={this.changeHandler}
                    type="number"
                    required
                    min="18"
                    max="75"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Must be at least 18</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="profile_email">Contact Email</label>
                  <input
                    className="form-control"
                    value={this.state.profile_email}
                    onChange={this.changeHandler}
                    type="email"
                    name="profile_email"
                    required
                    pattern="^\S+@\S+$"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please enter a valid email! example@gmail.com
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="headline"> Profession</label>
                  <input
                    className="form-control"
                    value={this.state.headline}
                    onChange={this.changeHandler}
                    type="text"
                    name="headline"
                    pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                    minLength="5"
                    maxLength="30"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Headline.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="about_me">About Me</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    value={this.state.about_me}
                    onChange={this.changeHandler}
                    name="about_me"
                    required
                    pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                    minLength="15"
                    maxLength="700"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid description about yourself.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="background_image">Background Image</label>
                  <input
                    className="form-control"
                    value={this.state.background_image}
                    onChange={this.changeHandler}
                    type="text"
                    name="background_image"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Background Image.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </Row>
              <div className="col-md-4 mb-3" />
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
  let { profile } = state.resume.resume;
  return {
    profile: profile
  };
};

export default connect(mapStateToProps)(ProfileForm);
