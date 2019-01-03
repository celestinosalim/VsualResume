import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  Animation
} from "mdbreact";

const Pricing = () => {
  return (
    <div className="Sections" id="pricingsection">
      <section className="text-center my-5">
        <br />
        <Animation type="bounce" infinite>
          <MDBIcon className="red-text pr-3" icon=" fa-usd" size="5x" fixed />
        </Animation>
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#438496" }}
        >
          Our pricing plans
        </h2>
        <p
          className="lead font-weight-bold text-center w-responsive mx-auto mb-5"
          style={{ color: "#CD5360" }}
        >
          Tools for pros. Prices for everyone.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h5 className="mb-4" style={{ color: "#286da8" }}>
                  FREE
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon icon=" fa-unlock" className="red-text" size="3x" />
                  </div>
                </div>
                <h2
                  className="font-weight-bold my-4"
                  style={{ color: "#286da8" }}
                >
                  $0
                </h2>
                <p style={{ color: "#286da8" }}>
                  Get your portfolio up and running.
                </p>
                {localStorage.getItem("token") ? (
                  <MDBBtn href="/resume/review" outline rounded color="red">
                    MY VSR
                  </MDBBtn>
                ) : (
                  <MDBBtn href="/login" outline rounded color="red">
                    Buy now
                  </MDBBtn>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h5 className="mb-4" style={{ color: "#286da8" }}>
                  GROW
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon
                      icon=" fa-thumbs-up"
                      className="red-text"
                      size="3x"
                    />
                  </div>
                </div>
                <h2
                  className="font-weight-bold my-4"
                  style={{ color: "#286da8" }}
                >
                  $5/mo
                </h2>
                <p style={{ color: "#286da8" }}>
                  Level up with features that grow with you.
                </p>
                {localStorage.getItem("token") ? (
                  <MDBBtn href="/resume/review" outline rounded color="red">
                    MY VSR
                  </MDBBtn>
                ) : (
                  <MDBBtn href="/login" outline rounded color="red">
                    Buy now
                  </MDBBtn>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h5 className="mb-4" style={{ color: "#286da8" }}>
                  PRO
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <MDBIcon
                      icon=" fa-line-chart"
                      className="red-text"
                      size="3x"
                    />
                  </div>
                </div>
                <h2
                  className="font-weight-bold my-4"
                  style={{ color: "#286da8" }}
                >
                  $10/mo
                </h2>
                <p style={{ color: "#286da8" }}>
                  Add more power to your portfolio with advanced tools.
                </p>
                {localStorage.getItem("token") ? (
                  <MDBBtn href="/resume/review" outline rounded color="red">
                    MY VSR
                  </MDBBtn>
                ) : (
                  <MDBBtn href="/login" outline rounded color="red">
                    Buy now
                  </MDBBtn>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default Pricing;
