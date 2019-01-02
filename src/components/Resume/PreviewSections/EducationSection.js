import React from "react";
import EducationModal from "../modals/EducationModal";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const EducationSection = props => {
  let { educations } = props.resume;

  return (
    <div id="Education">
      <h1
        className="h1-responsive font-weight-bold my-5"
        style={{ color: "#438496" }}
      >
        Education
      </h1>
      <hr />
      {educations.map((education, idx) => (
        <div className="row" key={idx} style={{ paddingBottom: "10px" }}>
          <div className="col-md-4">
            <MDBCard style={{ backgroundColor: "#fff" }}>
              <MDBCardBody>
                <h4 className="mb-4" style={{ color: "#286da8" }}>
                  {education.university.toUpperCase()}
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    Start Date:
                    <br /> {education.start_date}
                  </div>
                  <div className="col-md-6">
                    End Date: <br />
                    {education.end_date}
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
                  {education.degree.toUpperCase()}
                </h4>
                <div className="d-flex justify-content-center" />
                <h2 style={{ color: "#cd5360" }}>{education.description}</h2>

                <h2 style={{ color: "#cd5360" }}>
                  <br />
                  <MDBIcon
                    className="blue-text pr-3"
                    icon="  fa-map-marker"
                    size="1x"
                    fixed
                  />
                  {education.location}
                </h2>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "right", paddingLeft: "380px" }}>
        <EducationModal />
      </div>
    </div>
  );
};

export default EducationSection;
