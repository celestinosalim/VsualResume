import React, { Component, Fragment } from "react";
import MainContainer from "./containers/MainContainer";
import { connect } from "react-redux";
import { getResume } from "./store/actions/ResumeActions";

class App extends Component {
  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("token");
    console.log("THIS IS THE TOKEN", localStorage.getItem("token"));
    fetch(`http://localhost:3001/api/userResume`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(resume => this.props.getResume(resume));
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default connect(
  null,
  { getResume }
)(App);
