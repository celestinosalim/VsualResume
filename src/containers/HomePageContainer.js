import React, { Fragment } from "react";
import { connect } from "react-redux";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import Header from "../components/Homepage/Header/Header";
import HowItWorks from "../components/Homepage/Section1/HowItWorks";
import AboutUs from "../components/Homepage/Section2/AboutUs";
import Pricing from "../components/Homepage/Section3/Pricing";

const HomePageContainer = props => {
  console.log(props);
  return (
    <Fragment>
      <div style={{ paddingBottom: "60px" }}>
        <HomeNavBar />
      </div>
      <div style={{ paddingBottom: "60px" }}>
        <Header />
      </div>
      <div style={{ paddingBottom: "60px" }}>
        <section id="section-1">
          <HowItWorks />
        </section>
      </div>
      <div style={{ paddingBottom: "60px" }}>
        <section id="section-2">
          <AboutUs />
        </section>
      </div>
      <div style={{ paddingBottom: "60px" }}>
        <section id="section-3">
          <Pricing />
        </section>
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
