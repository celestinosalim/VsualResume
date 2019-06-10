import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";

import team from "../../../images/alex.png";

const AboutUs = () => {
  return (
    <div className="Sections">
      <MDBCard
        className="my-5 px-1 pb-5 text-center"
        style={{ backgroundColor: "#fff" }}
      >
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">About Us</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Visual Resume was created by Celestion Salim as a graduation project
            for the Software Engineering Immersive Program at Flatiron School.
            Creating personal portfolios was time consuming but Celestino
            realized that by creating just a few templates, anyone could have a
            beautiful resume available online.
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              {/* <h6
                className="text-uppercase grey-text mb-3"
                style={{ paddingTop: "300px" }}
              /> */}
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={team}
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Celestino Salim
              </h4>
              <h6 className="text-uppercase grey-text mb-3">
                Full Stack Developer
              </h6>
              <MDBBtn
                tag="a"
                floating
                size="2x"
                className="mx-1 mb-0 btn-email"
                href={`mailto:celestino.salim@gmail.com`}
              >
                <MDBIcon icon="envelope" size="2x" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="2x"
                className="mx-1 mb-0 btn-fb"
                href="https://www.facebook.com/celestino.salim"
              >
                <MDBIcon icon="facebook" size="2x" />
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
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              {/* <h6
                className="text-uppercase grey-text mb-3"
                style={{ paddingTop: "300px" }}
              /> */}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AboutUs;
