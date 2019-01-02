import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProfileNavBar from "../components/NavBar/ProfileNavBar";
import LeftColumn from "../components/Profile/LeftColumn";
import RightColumn from "../components/Profile/RightColumn";
import Footer from "../components/Footer/Footer";
import { requestUser } from "../store/actions/UserActions";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.requestUser();
  }

  render() {
    return (
      <div className="page">
        <div style={{ paddingBottom: "120px" }}>
          <ProfileNavBar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <LeftColumn user={this.props.user} />
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
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { requestUser }
  )(ProfileContainer)
);
