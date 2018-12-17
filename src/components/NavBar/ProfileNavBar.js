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
      className="navbar navbar-expand-lg navbar-light navbar-fixed-bottom"
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
              <a className="nav-link" id="" href="/create-resume">
                CREATE RESUME
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/contact">
                CONTACT US
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
              <a className="nav-link" id="" href="/something">
                ANOTHER LINK THAT I NEED TO FIGURE OUT
              </a>
            ) : null}
          </li>
          <li className="nav-item">
            {localStorage.getItem("username") ? (
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
        {/* {this.props.user && (
          <a href="/profile">
            <button className="btn btn-info">
              Logged in as: {this.props.user.username}
            </button>
          </a>
        )} */}
        {/* {localStorage.getItem("jwt") ? (
          <a href="/logout">
            <button className="btn btn-danger">Log Out</button>
          </a>
        ) : null} */}
      </div>
    </nav>
  );
};

export default ProfileNavBar;
