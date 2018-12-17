import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signup } from "../../store/actions/LoginActions";

class Login extends Component {
  state = {
    signup_email: "",
    avatar: "",
    signup_username: "",
    signup_password: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      //   this.props.history.push("/user_profile");
      window.alert("Thank you for signing up.");
    } else {
      window.alert("We're having issues creating your account.");
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="center">
        <div className="card">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSignUpSubmit}>
            <input
              className="form-item"
              placeholder="Username..."
              name="signup_username"
              type="text"
              value={this.state.signup_username}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Email..."
              name="signup_email"
              type="email"
              value={this.state.signup_email}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password..."
              name="signup_password"
              type="password"
              value={this.state.signup_password}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Avatar..."
              name="avatar"
              type="avatar"
              value={this.state.avatar}
              onChange={this.handleChange}
            />
            <input type="submit" name="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { signup }
)(Login);
