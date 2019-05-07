// REACT
//------------------------------------------------------------------------------------------
import React, { Component } from "react";

// TEMPLATE
import Template1 from "./Template1/Template1";
//TEMPLATE 2
import Template2 from "./Template2/Template2";

// STYLE
//------------------------------------------------------------------------------------------
import "../../style/preview.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// MODALS
import ProfileModal from "./modals/ProfileModal";
import SkillsModal from "./modals/SkillsModal";
import EducationModal from "./modals/EducationModal";
import ExperienceModal from "./modals/ExperienceModal";
import ProjectsModal from "./modals/ProjectsModal";
import SocialMediaModal from "./modals/SocialMediaModal";

//------------------------------------------------------------------------------------------

class Preview extends Component {
  render() {
    return (
      <div className="container">
        <CarouselProvider
          naturalSlideWidth={100}
          // naturalSlideHeight={520}
          totalSlides={2}
          visibleSlides={1}
          id="carousel"
        >
          <ButtonBack className="btn btn-yellow">Back</ButtonBack>
          <ButtonNext className="btn btn-yellow">Next</ButtonNext>

          <div className="container justify-content-center table">
            <ul id="horizontal-list">
              <li>
                <ProfileModal />
              </li>
              <li>
                <SkillsModal />
              </li>
              <li>
                <EducationModal />
              </li>
              <li>
                <ExperienceModal />
              </li>
              <li>
                <ProjectsModal />
              </li>
              <div id="socialm">
                <li>
                  <SocialMediaModal />
                </li>
              </div>
            </ul>
          </div>

          <Slider>
            <Slide index={0} className="slide1">
              <Template2 />
            </Slide>
            <Slide index={1} className="slide2">
              <Template1 />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    );
  }
}

export default Preview;
