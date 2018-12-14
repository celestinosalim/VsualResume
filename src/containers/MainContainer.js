import React from "react";
import { connect } from "react-redux";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

const MainContainer = () => {
  return (
    <div className="Container">
      <HomePageContainer />
      <Footer />
      {/* <Login /> */}
    </div>
  );
};

export default MainContainer;
