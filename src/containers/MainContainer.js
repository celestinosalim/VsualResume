import React from "react";
import { connect } from "react-redux";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";

const MainContainer = () => {
  return (
    <div className="Container">
      <HomePageContainer />
      <Footer />
    </div>
  );
};

export default MainContainer;
