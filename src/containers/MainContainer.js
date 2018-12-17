import React from "react";
import { connect } from "react-redux";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import { Route, withRouter } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="Container">
      <Route exact path="/" render={() => <HomePageContainer />} />
      <Route exaxct path="/login" render={() => <Login />} />
      <Route exaxct path="/logout" render={() => <Logout />} />
      <Footer />
    </div>
  );
};

export default withRouter(MainContainer);
