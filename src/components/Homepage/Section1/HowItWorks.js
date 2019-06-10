import React from "react";
import { MDBIcon, MDBRow } from "mdbreact";
const HowItWorks = () => {
  return (
    <div className="Sections">
      <section className="text-center my-5">
        <MDBIcon className="red-text pr-3" icon="cog" size="5x" fixed />
        <h2
          className="h1-responsive font-weight-bold my-5"
          style={{ color: "#438496" }}
        >
          How It Works?
        </h2>
        <hr />

        <p
          className="lead font-weight-bold w-responsive mx-auto mb-5"
          style={{ color: "#286da8" }}
        >
          Three Easy Steps
        </p>

        <div className="row">
          <div className="col-md-4">
            <MDBIcon
              icon=" fa-file-text-o"
              className="red-text pr-3"
              size="5x"
              fixed
            />
            <h5 className="font-weight-bold my-4" style={{ color: "#438496" }}>
              1. Input Your Information
            </h5>
            <p
              className="font-weight-bold mb-md-0 mb-5"
              style={{ color: "#286da8" }}
            />
          </div>

          <div className="col-md-4">
            <MDBIcon
              icon=" fa-hand-pointer-o"
              className="red-text pr-3"
              size="5x"
              fixed
            />
            <h5 className="font-weight-bold my-4" style={{ color: "#438496" }}>
              2. Choose A Template
            </h5>
            <p
              className="font-weight-bold mb-md-0 mb-5"
              style={{ color: "#286da8" }}
            />
          </div>

          <div className="col-md-4">
            <MDBIcon icon="upload" className="red-text pr-3" size="5x" fixed />
            <h5 className="font-weight-bold my-4" style={{ color: "#438496" }}>
              3. Go Live
            </h5>
            <p
              className="font-weight-bold mb-md-0 mb-5"
              style={{ color: "#286da8" }}
            />
          </div>
        </div>
        <div>
          <hr />
        </div>
        <br />
        <MDBRow>
          <div className="col-md-4" />
          <div className="col-md-4" style={{ textAlign: "center" }}>
            {/* <MDBIcon icon="quote-left" size="3x" pull="left" />
            <h3>If you can dream it, you can do it....</h3>
            <MDBIcon icon="quote-right" size="3x" pull="right" />
            <h3>(Walt Disney)</h3> */}
          </div>
        </MDBRow>
      </section>
    </div>
  );
};

export default HowItWorks;
