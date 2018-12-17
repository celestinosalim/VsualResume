import React from "react";
import { connect } from "react-redux";
import { MDBContainer } from "mdbreact";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import { Route, withRouter, Switch } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import ResumeContainer from "./ResumeContainer";

const MainContainer = () => {
  return (
    <MDBContainer fluid>
      <Switch>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/logout" render={() => <Logout />} />
        <Route path="/resume" render={() => <ResumeContainer />} />
      </Switch>
      <div style={{ paddingTop: "80px" }}>
        <Footer />
      </div>
    </MDBContainer>
  );
};

export default withRouter(MainContainer);
