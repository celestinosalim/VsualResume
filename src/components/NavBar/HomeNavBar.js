import React from "react";
import "./HomeNav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkFor } from "react-router-dom";
import logo from "../../images/logo.png";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const HomeNavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar home-nav-bar">
      <Link
        className="navbar-brand"
        activeClass="active"
        onClick={scrollToTop}
        to="/"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img className="logoNav" src={logo} alt="logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="section-1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              id="howitworks"
            >
              HOW IT WORKS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="section-2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              id="aboutus"
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="section-3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              id="pricing"
            >
              PRICING
            </Link>
          </li>
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <LinkFor to="/profile" className="nav-link" id="profile">
                PROFILE
              </LinkFor>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <a className="nav-link" id="logout" href="/logout">
                LOG OUT
              </a>
            ) : (
              <a className="nav-link" id="login" href="/login">
                SIGN IN
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavBar;
