import React from "react";
import SocialMediaModal from "../modals/SocialMediaModal";
import { MDBIcon, MDBRow } from "mdbreact";
import { withRouter } from "react-router-dom";
import logo from "../../../images/logo.png";

const FooterSection = props => {
  let { social_medium } = props.resume;

  return (
    <div id="contact">
      <h1 className="h1-responsive font-weight-bold my-5">Contact</h1>
      <hr />
      <h3>
        Having different types of stocks in your portfolio can enhance returns.
        "Kenneth Fisher"
      </h3>
      <br />
      <div
        className="grid d-flex justify-content-center"
        style={{ fontSize: "30px", paddingLeft: "200px" }}
      >
        <MDBRow>
          {social_medium.map((social_media, idx) => (
            <div key={idx} style={{ paddingBottom: "10px" }}>
              <div />
              <ul>
                {social_media.name.includes("facebook") ? (
                  <div>
                    <MDBIcon icon="facebook-square" size="lg" />
                    {social_media.name}
                  </div>
                ) : null}
                {social_media.name.includes("linkedin") ? (
                  <div>
                    <MDBIcon icon="linkedin-square" size="lg" />
                    {social_media.name}
                  </div>
                ) : null}
                {social_media.name.includes("github") ? (
                  <div>
                    <MDBIcon icon="github-square" size="lg" />
                    {social_media.name}
                  </div>
                ) : null}
                {social_media.name.includes("instagram") ? (
                  <div>
                    <MDBIcon icon=" fa-instagram" size="lg" />
                    {social_media.name}
                  </div>
                ) : null}
                {social_media.name.includes("twitter") ? (
                  <div className="col-md-4">
                    <MDBIcon icon="twitter-square" size="lg" />
                    {social_media.name}
                  </div>
                ) : null}
                <div />
              </ul>
            </div>
          ))}
        </MDBRow>
      </div>
      <div style={{ paddingRight: "85%", position: "relative" }}>
        <img src={logo} alt="" width="150px" height="50%" />
      </div>
      {props.location.pathname === "/resume/review" && (
        <div style={{ textAlign: "right", paddingLeft: "400px" }}>
          <SocialMediaModal />
        </div>
      )}
    </div>
  );
};

export default withRouter(FooterSection);
