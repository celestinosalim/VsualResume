import React, { Fragment } from "react";
import { connect } from "react-redux";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import Header from "../components/Homepage/Header/Header";
import HowItWorks from "../components/Homepage/Section1/HowItWorks";
import AboutUs from "../components/Homepage/Section2/AboutUs";
import Pricing from "../components/Homepage/Section3/Pricing";
import { withRouter } from "react-router-dom";

const HomePageContainer = props => {
  // console.log("homecontainer", props);

  return (
    <div className="page">
      <div>
        <HomeNavBar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <section id="section-1">
          <HowItWorks />
        </section>
      </div>
      <div>
        <section id="section-2">
          <AboutUs />
        </section>
      </div>
      <div>
        <section id="section-3">
          <Pricing />
        </section>
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     user: state.currentUser,
//     resume: state.resume
//   };
// };

export default withRouter(HomePageContainer);
