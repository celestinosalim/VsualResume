import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";
import LeftColumn from "../components/Profile/LeftColumn";
import RightColumn from "../components/Profile/RightColumn";

const ProfileContainer = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    resume: state.resume
  };
};

export default withRouter(ProfileContainer);
