import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";

class Footer extends Component {
  state = {};
  render() {
    return (
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "#f5f5f5",
          padding: "5rem",
          textAlign: "center"
        }}
        stickyStyles={{
          opacity: 0
        }}
      >
        <div>
          <i className="big facebook icon" />
          <i className="big instagram icon" />
          <i className="big twitter icon" />
        </div>

        <div>
          <h3>© 2018 Vsual Resume by: Celestino Salim</h3>
        </div>
      </StickyFooter>
    );
  }
}

export default Footer;
