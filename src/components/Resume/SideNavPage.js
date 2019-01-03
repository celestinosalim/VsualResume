import React from "react";

import { MDBBtn, MDBBtnGroup } from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const SideNavPage = props => {
  const sidebar = {
    padding: "10px 15px",
    float: "right"
  };

  return (
    <div>
      <div className="fixed-bottom">
        <div style={sidebar}>
          <div className="SideHove1">
            <MDBBtnGroup vertical>
              <ul>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="profilelive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    Profile
                  </MDBBtn>
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="educationlive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    Education
                  </MDBBtn>
                </Link>

                <Link
                  className="nav-link"
                  activeClass="active"
                  to="experiencelive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    Experiences
                  </MDBBtn>
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="skillslive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    Skills
                  </MDBBtn>
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="projectslive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    Projects
                  </MDBBtn>
                </Link>

                <Link
                  className="nav-link"
                  activeClass="active"
                  onClick={scrollToTop}
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MDBBtn color="white" className="SideHove">
                    TOP
                  </MDBBtn>
                </Link>
              </ul>
            </MDBBtnGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavPage;
