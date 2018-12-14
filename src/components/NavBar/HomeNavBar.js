import React from "react";
import "./HomeNav.css";

const HomeNavBar = () => {
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
            <a className="nav-link" href="/menu">
              HOW IT WORKS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              PRICING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="login" href="/login">
              LOGIN
            </a>
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

export default HomeNavBar;
