import React from "react";
import { connect } from "react-redux";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import { Route, withRouter } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="Container">
      <Route exact path="/" render={() => <HomePageContainer />} />
      <Footer />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
};

export default MainContainer;
