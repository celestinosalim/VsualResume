import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";
import { MDBBtn, MDBIcon } from "mdbreact";

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
          backgroundColor: "rgba(212, 240, 160)",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <div>
          <MDBBtn
            tag="a"
            floating
            size="2x"
            className="mx-1 mb-0 btn-git"
            href="https://www.facebook.com/celestino.salim"
          >
            <MDBIcon icon="facebook" size="2x" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            floating
            size="2x"
            className="mx-1 mb-0 btn-git"
            href="https://instagram.com/alexsalim1"
          >
            <MDBIcon icon="instagram" size="2x" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            floating
            size="2x"
            className="mx-1 mb-0 btn-git"
            href="https://github.com/celestinosalim"
          >
            <MDBIcon icon="github" size="2x" />
          </MDBBtn>
        </div>
        <hr />
        <div>
          <h3>© 2019 Vsual Resume by: Celestino Salim</h3>
        </div>
      </StickyFooter>
    );
  }
}

export default Footer;
