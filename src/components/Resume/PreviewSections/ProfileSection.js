import React from "react";
import ProfileModal from "../modals/ProfileModal";
import { MDBCard, MDBCardBody } from "mdbreact";
import { withRouter } from "react-router-dom";

const ProfileSection = props => {
  let { profile } = props.resume;
  return (
    <div id="Profile">
      <h1
        className="h1-responsive font-weight-bold my-5"
        style={{ color: "#438496" }}
      >
        Profile
      </h1>
      <h3
        className="lead font-weight-bold w-responsive mx-auto mb-5"
        style={{ color: "#286da8" }}
      >
        {profile.headline}
      </h3>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <MDBCard style={{ backgroundColor: "#fff" }}>
            <MDBCardBody>
              <h2 className="mb-4" style={{ color: "#286da8" }}>
                ABOUT ME
              </h2>
              <div className="d-flex justify-content-center" />
              <h2 style={{ color: "#cd5360" }}>{profile.about_me}</h2>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-md-4 text-center">
          <img
            id="image"
            src={profile.profile_picture}
            alt="yourself"
            width="60%"
            height="340px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <MDBCard style={{ backgroundColor: "#fff" }}>
            <MDBCardBody>
              <h2 className="mb-4" style={{ color: "#286da8" }}>
                DETAILS
              </h2>
              <div className="d-flex justify-content-center" />
              <h2 style={{ color: "#cd5360" }}>{`Name: ${profile.name}`}</h2>
              <h2 style={{ color: "#cd5360" }}>{`Age: ${profile.age} yrs`}</h2>
              <h2 style={{ color: "#cd5360" }}>
                {" "}
                {`Location: ${profile.location}`}
              </h2>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" />
        <div className="col-md-4">
          <MDBCard style={{ backgroundColor: "#fff" }}>
            <MDBCardBody>
              <h2 className="mb-4" style={{ color: "#286da8" }}>
                CONTACT
              </h2>
              <div className="d-flex justify-content-center" />
              <h2 style={{ color: "#cd5360" }}>{profile.profile_email}</h2>
              <h2 style={{ color: "#cd5360" }}>{profile.number}</h2>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <hr />
      {props.location.pathname !== "/live" && (
        <div style={{ textAlign: "right", paddingLeft: "380px" }}>
          <ProfileModal />
        </div>
      )}
    </div>
  );
};

export default withRouter(ProfileSection);
