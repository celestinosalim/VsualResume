import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  async componentDidMount() {
    await import("bootstrap/dist/css/bootstrap.min.css");
    await import("bootstrap/dist/js/bootstrap.bundle.min");
    await import("./style/App.css");
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
