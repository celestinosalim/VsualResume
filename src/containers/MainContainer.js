import React from "react";
import { connect } from "react-redux";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import { Route, withRouter, Switch } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const MainContainer = () => {
  return (
    <MDBContainer fluid>
      <div className="Container">
        <Switch>
          <Route exact path="/" render={() => <HomePageContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/logout" render={() => <Logout />} />
        </Switch>
        <Footer />
      </div>
    </MDBContainer>
  );
};

export default withRouter(MainContainer);
