import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  async componentDidMount() {
    await import("bootstrap/dist/js/bootstrap.bundle.min");
    await import("font-awesome/css/font-awesome.min.css");
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
