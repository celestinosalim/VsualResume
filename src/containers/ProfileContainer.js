import React from "react";

import { withRouter } from "react-router-dom";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";
import LeftColumn from "../components/Profile/LeftColumn";
import RightColumn from "../components/Profile/RightColumn";
import Footer from "../components/Footer/Footer";

const ProfileContainer = props => {
  return (
    <div className="page">
      <div style={{ paddingBottom: "120px" }}>
        <ProfileNavBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <LeftColumn />
          </div>
          <div className="col">
            <RightColumn />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(ProfileContainer);
