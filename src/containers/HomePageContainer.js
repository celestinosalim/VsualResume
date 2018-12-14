import React, { Fragment } from "react";
import { connect } from "react-redux";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import Header from "../components/Homepage/Header/Header";
import HowItWorks from "../components/Homepage/Section1/HowItWorks";

const HomePageContainer = props => {
  console.log(props);

  return (
    <Fragment>
      <div style={{ paddingBottom: "60px" }}>
        <HomeNavBar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <HowItWorks />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    resume: state.resume
  };
};

export default connect(mapStateToProps)(HomePageContainer);
