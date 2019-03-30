import React from "react";
import SkillsModal from "../modals/SkillsModal";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { withRouter } from "react-router-dom";

const SkillSection = props => {
  let { tools } = props.resume;
  let { interpersonals } = props.resume;
  let { others } = props.resume;

  return (
    <div id="Skills">
      <h1
        className="h1-responsive font-weight-bold my-5"
        style={{ color: "#438496" }}
      >
        Skills
      </h1>
      <hr />

      <MDBContainer>
        <h2 className="mb-4" style={{ color: "#286da8" }}>
          Tools & Technologies
        </h2>

        <MDBRow>
          {tools.map((tools, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <MDBCol md="4" />
              <MDBCol md="4">
                <ul>
                  <button className="btn btn-outline-danger btn-rounded waves-effect">
                    {tools.name}
                  </button>
                </ul>
              </MDBCol>
              <MDBCol md="4" />
            </div>
          ))}
        </MDBRow>
      </MDBContainer>
      <br />
      <hr />
      <MDBContainer>
        <h2 className="mb-4" style={{ color: "#286da8" }}>
          Interpersonals Skills
        </h2>

        <MDBRow>
          {interpersonals.map((interpersonals, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <MDBCol md="4" />
              <MDBCol md="4">
                <ul>
                  <button className="btn btn-outline-danger btn-rounded waves-effect">
                    {interpersonals.name}
                  </button>
                </ul>
              </MDBCol>
              <MDBCol md="4" />
            </div>
          ))}
        </MDBRow>
      </MDBContainer>
      <br />
      <hr />
      <MDBContainer>
        <h2 className="mb-4" style={{ color: "#286da8" }}>
          Other Skills
        </h2>

        <MDBRow>
          {others.map((others, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <MDBCol md="4" />
              <MDBCol md="4">
                <ul>
                  <button className="btn btn-outline-danger btn-rounded waves-effect">
                    {others.name}
                  </button>
                </ul>
              </MDBCol>
              <MDBCol md="4" />
            </div>
          ))}
        </MDBRow>
      </MDBContainer>
      {props.location.pathname === "/resume/review" && (
        <div style={{ textAlign: "right", paddingLeft: "380px" }}>
          <SkillsModal />
        </div>
      )}
    </div>
  );
};

export default withRouter(SkillSection);
