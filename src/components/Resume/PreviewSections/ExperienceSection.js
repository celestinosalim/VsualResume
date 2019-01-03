import React from "react";
import ExperienceModal from "../modals/ExperienceModal";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import { withRouter } from "react-router-dom";

const ExperienceSection = props => {
  let { experiences } = props.resume;

  return (
    <div id="Experience">
      <h1
        className="h1-responsive font-weight-bold my-5"
        style={{ color: "#438496" }}
      >
        Experiences
      </h1>
      <hr />
      {experiences.map((experience, idx) => (
        <div className="row" key={idx} style={{ paddingBottom: "10px" }}>
          <div className="col-md-4">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h4 className="mb-4" style={{ color: "#286da8" }}>
                  {experience.company.toUpperCase()}
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    Start Date:
                    <br /> {experience.start_date}
                  </div>
                  <div className="col-md-6">
                    End Date: <br />
                    {experience.end_date}
                  </div>
                </div>
                <div className="d-flex justify-content-center" />
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-8">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h4 className="mb-4" style={{ color: "#286da8" }}>
                  {experience.role.toUpperCase()}
                </h4>
                <div className="d-flex justify-content-center" />
                <h2 style={{ color: "#cd5360" }}>{experience.description}</h2>

                <h2 style={{ color: "#cd5360" }}>
                  <br />
                  <MDBIcon
                    className="blue-text pr-3"
                    icon="  fa-map-marker"
                    size="1x"
                    fixed
                  />
                  {experience.location}
                </h2>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      ))}
      {props.location.pathname !== "/live" && (
        <div style={{ textAlign: "right", paddingLeft: "380px" }}>
          <ExperienceModal />
        </div>
      )}
    </div>
  );
};

export default withRouter(ExperienceSection);
