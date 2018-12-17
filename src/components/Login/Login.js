import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authenticate } from "../../store/actions/LoginActions";

import "./Login.css";

class Login extends Component {
  state = {
    credentials: {
      email: "",
      password: "",
      avatar: "",
      username: "",
      register_username: "",
      register_password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    if (this.props.authenticate(this.state)) {
      // debugger;
      // this.props.history.push("/user_profile");
      window.alert("You're Logged In!");
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.");
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleLoginSubmit}>
            <input
              className="form-item"
              placeholder="Username..."
              name="username"
              type="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password..."
              name="password"
              type="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <input type="submit" name="Submit" className="form-submit" />
          </form>
        </div>
        {/*
        STARTS SIGN UP FORM
        */}
        {/* <div className="card">
          <h1>Sign Up</h1>
          <form onSubmit={e => this.props.register(e, this.state)}>
            <input
              className="form-item"
              placeholder="Username..."
              name="username"
              type="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Email..."
              name="register_username"
              type="email"
              value={this.state.credentials.register_username}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password..."
              name="register_password"
              type="password"
              value={this.state.credentials.register_password}
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Avatar..."
              name="avatar"
              type="avatar"
              value={this.state.credentials.avatar}
              onChange={this.handleChange}
            />
            <input type="submit" name="Submit" className="form-submit" />
          </form>
        </div> */}
      </div>
    );
  }
}

export default connect(
  null,
  { authenticate }
)(Login);
