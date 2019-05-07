import React, { Component } from "react";

import {
  SideBar,
  Intro,
  About,
  ProjectContainer,
  Skills,
  Footer
} from "vs-template1";

class Resume2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Intro />
        <SideBar />
        <div>
          <About />
        </div>
        <Skills />
        <ProjectContainer />
        <Footer />
      </div>
    );
  }
}

export default Resume2;
