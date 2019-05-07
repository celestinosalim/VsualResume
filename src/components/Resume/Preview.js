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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Preview extends Component {
  render() {
    return (
      <div className="page" style={{ paddingRight: "2em", paddingLeft: "2em" }}>
        <Carousel showThumbs={false} emulateTouch transitionTime={1000}>
          <div id="1">
            <img src="" alt="" />
            <Template1 />
          </div>
          <div id="2">
            <img src="" alt="" />
            <Template2 />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Preview;
