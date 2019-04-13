// REACT
//------------------------------------------------------------------------------------------
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// TEMPLATE
//------------------------------------------------------------------------------------------

import Header from "./PreviewSections/Header";
import Footer from "../Footer/Footer";
import ProfileSection from "./PreviewSections/ProfileSection";
import EducationSection from "./PreviewSections/EducationSection";
import ExperienceSection from "./PreviewSections/ExperienceSection";
import SkillSection from "./PreviewSections/SkillSection";
import ProjectSection from "./PreviewSections/ProjectSection";
import FooterSection from "./PreviewSections/FooterSection";

//TEMPLATE 2
import SecondTemplate from "./SecondTemplate/Test";

// STYLE
//------------------------------------------------------------------------------------------
import "../../style/preview.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Preview extends Component {
  render() {
    let props = this.props;
    return (
      <div className="page" style={{ paddingRight: "2em", paddingLeft: "2em" }}>
        <Carousel
          transitionTime={1000}
          showIndicators={true}
          showStatus={true}
          showArrows={true}
          useKeyboardArrows={true}
        >
          <div>
            <div>
              <img src="" />
              {props.resume && <Header resume={props.resume} />}
              <div id="Display">
                {props.resume && <ProfileSection resume={props.resume} />}

                {props.resume && <EducationSection resume={props.resume} />}

                {props.resume && <ExperienceSection resume={props.resume} />}

                {props.resume && <SkillSection resume={props.resume} />}

                {props.resume && <ProjectSection resume={props.resume} />}

                {props.resume && <FooterSection resume={props.resume} />}
              </div>
              <div
                style={{
                  backgroundColor: "black"
                }}
              >
                <div className="text-white text-center  align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h3 className="card-title pt-2">
                      <strong>GO LIVE</strong>
                    </h3>

                    <Link className="btn btn-info" to="/live">
                      LIVE
                    </Link>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <div>
            <img src="" />
            <SecondTemplate />
          </div>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Preview);
