import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authenticate, signup } from "../../store/actions/LoginActions";

import "./Login.css";

class Login extends Component {
  state = {
    password: "",
    avatar:
      "https://winstemplymouth.org/wp-content/uploads/2018/02/Female-Avatar-5-e1518176677210.png",
    username: "",
    signup_username: "",
    signup_password: "",
    signup_email: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    if (this.props.authenticate(this.state)) {
      this.props.history.push("/");
      setTimeout(() => window.location.reload(), 1100);
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.");
    }
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      this.props.history.push("/");
      setTimeout(() => window.location.reload(), 1100);
    } else {
      window.alert("We're having issues creating your account.");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="center">
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <h1>Login</h1>
                <form onSubmit={this.handleLoginSubmit}>
                  <input
                    className="form-item"
                    placeholder="Username..."
                    name="username"
                    type="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <input
                    className="form-item"
                    placeholder="Password..."
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <input type="submit" name="Submit" className="form-submit" />
                </form>
              </div>
            </div>
            {/*
        SIGN UP FORM
        //
        //
        //
        */}
            <br />
            <div className="col-md-6 col-sm-12">
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

                  <input type="submit" name="Submit" className="form-submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { authenticate, signup }
  )(Login)
);
