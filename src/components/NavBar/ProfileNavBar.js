import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const ProfileNavBar = () => {
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
      <div style={{ paddingLeft: "150px" }}>
        <a className="navbar-brand" href="/">
          <img className="logoNav" src={logo} alt="logo" />
        </a>
      </div>

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
            <Link className="nav-link" to="/" id="home">
              HOME
            </Link>
          </li>

          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <a className="nav-link" id="contactus" href="/contact">
                CONTACT US
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") !== "undefined" ? (
              <a className="nav-link" id="myVSR" href="/resume/review">
                MY VSR
              </a>
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

export default ProfileNavBar;
