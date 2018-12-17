import React from "react";
import "./HomeNav.css";

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
      <a className="navbar-brand" href="/">
        <img
          className="logoNav"
          src="https://cdn4.iconfinder.com/data/icons/system-ui-set/512/modern-latin-alphabet-letter-v-512.png"
          alt=""
        />
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
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/resume/create-resume">
                CREATE RESUME
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/resume/edit-resume">
                EDIT RESUME
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/resume/review">
                REVIEW RESUME
              </a>
            ) : null}
          </li>

          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/resume/live">
                GO LIVE
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="profile" href="/profile">
                PROFILE
              </a>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfileNavBar;
