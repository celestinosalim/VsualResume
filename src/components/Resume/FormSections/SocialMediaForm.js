import React, { Component } from "react";
import { Button, Container } from "mdbreact";
import { connect } from "react-redux";

class SocialMediaForm extends Component {
  state = {
    social_medium: [
      {
        name: "",
        link: ""
      }
    ]
  };

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      social_medium: this.state.social_medium.filter((s, _idx) => _idx !== idx)
    });
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      social_medium: [
        ...this.state.social_medium,
        {
          name: "",
          link: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newSocialMedium = this.state.social_medium.map(
      (social_medium, social_mediumIdx) => {
        if (idx !== social_mediumIdx) {
          return social_medium;
        }
        return { ...social_medium, [e.target.name]: e.target.value };
      }
    );
    this.setState({ social_medium: newSocialMedium });
  };

  socialMediaToAdd = () => {
    let { social_medium } = this.state;
    let { name, link } = this.state.social_medium;

    return social_medium.map((social_medium, idx) => {
      return (
        <div key={idx}>
          <div>
            <Container>
              <label htmlFor="name">Ex: linkedin</label>
              <input
                className="form-control"
                value={name}
                name="name"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
                // pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="100"
              />
              <div className="invalid-feedback">
                Cannot be empty! You must Have at least one Social Media.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <label htmlFor="link">
                Ex: https://www.linkedin.com/in/celestinosalim/
              </label>
              <input
                className="form-control"
                value={link}
                name="link"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
                // pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="100"
              />
              <div className="invalid-feedback">
                Cannot be empty! You must Have at least one Social Media.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Container>
          </div>
          <div>
            <button
              onClick={e => this.handleDeleteField(e, idx)}
              className="btn btn-danger"
            >
              Delete Field
            </button>
          </div>
          <br />
        </div>
      );
    });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (e.target.checkValidity() === true) {
      this.props.saveMediaChangesSubmit(e, obj);
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Social Media</h3>
        <form
          className="needs-validation"
          onSubmit={e => this.handleSubmit(e, this.state)}
          noValidate
        >
          {this.state.social_medium.length < 4 && (
            <button className="btn btn-info" onClick={e => this.handleClick(e)}>
              Add
            </button>
          )}

          {this.socialMediaToAdd()}
          <div style={{ textAlign: "right" }}>
            <Button color="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { social_medium } = state.resume.resume;

  return {
    social_medium
  };
};

export default connect(mapStateToProps)(SocialMediaForm);
