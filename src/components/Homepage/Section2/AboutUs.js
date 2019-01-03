import React from "react";
import {
  Animation,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";

import team from "../../../images/alex.JPG";

const AboutUs = () => {
  return (
    <div className="Sections">
      <MDBCard
        className="my-5 px-1 pb-5 text-center"
        style={{ backgroundColor: "#fff" }}
      >
        <Animation type="flipInY" infinite>
          <MDBIcon
            className="red-text pr-3"
            icon=" fa-user-secret"
            size="5x"
            fixed
          />
        </Animation>
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">About Us</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Visual Resume is designed to make your life easy, ever wanted to
            have your own portfolio website? we make it for you, 15 min and boom
            done.
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <h6
                className="text-uppercase grey-text mb-3"
                style={{ paddingTop: "300px" }}
              >
                Easy content management system that gives you the tools to
                create in 3 easy steps your own interactive resume.
              </h6>
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
              <h6
                className="text-uppercase grey-text mb-3"
                style={{ paddingTop: "300px" }}
              >
                Hi, My name is Celestino, I decided to create Visual Resume
                before graduating from Flatiron School. I was struggling with
                creating my personal portfolio i wanted it to be perfect, but it
                was so hard to decide on what to go for. Thats why i created
                VSR, now i have access to unlimited templates by just filling a
                form.
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AboutUs;
