import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import { connect } from "react-redux";
import { requestResume } from "./store/actions/ResumeActions";

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
