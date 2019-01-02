import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const ResumeNavBar = () => {
  const navStyle = {
    backgroundColor: "#FFF",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: "500",
    color: "black",
    fontWeight: "bold"
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar"
      style={navStyle}
    >
      <a className="navbar-brand-resume" href="/">
        <img className="logoNav" src={logo} alt="logo" />
      </a>
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
          {/* <li className="nav-item">
            {localStorage.getItem("token") ? (
              <Link className="nav-link" to="/resume/create-resume">
                FILL THE FORM
              </Link>
            ) : null}
          </li> */}
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <Link className="nav-link" id="resumereview" to="/resume/review">
                REVIEW RESUME
              </Link>
            ) : null}
          </li>

          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <Link className="nav-link" id="profile" to="/profile">
                PROFILE
              </Link>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <Link className="nav-link" id="home" to="/">
                HOME
              </Link>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <Link className="nav-link" id="logout" to="/logout">
                LOG OUT
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ResumeNavBar;
