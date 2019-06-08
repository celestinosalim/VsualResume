import React, { Component } from "react";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import Header from "../components/Homepage/Header/Header";
import HowItWorks from "../components/Homepage/Section1/HowItWorks";
import AboutUs from "../components/Homepage/Section2/AboutUs";
import Pricing from "../components/Homepage/Section3/Pricing";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";

class HomePageContainer extends Component {
  async componentDidMount() {
    await import("font-awesome/css/font-awesome.min.css");
  }

  render() {
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(HomePageContainer);
