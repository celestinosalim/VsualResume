import React from "react";
import "./HomeNav.css";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

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
      <Link
        className="navbar-brand"
        activeClass="active"
        onClick={scrollToTop}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          className="logoNav"
          src="https://cdn4.iconfinder.com/data/icons/system-ui-set/512/modern-latin-alphabet-letter-v-512.png"
          alt=""
        />
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
            >
              PRICING
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="login" href="/login">
              LOGIN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="signup" href="/signup">
              SIGN UP
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
