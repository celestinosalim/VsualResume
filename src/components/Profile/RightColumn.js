import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CardImage } from "mdbreact";

const RightColumn = props => {
  return (
    <Fragment>
      <div>
        <div
          className="card testimonial-card"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="card-up indigo lighten-1" />
          <div>
            <div className="text-white text-center d-flex align-items-center  py-5 px-4">
              <div className="text-center align-items-center py-5 px-4">
                <CardImage
                  className="img-fluid"
                  src="https://appleoneblogdotcom.files.wordpress.com/2017/02/shutterstock_217401814.jpg"
                  waves
                />
                <h3 className="card-title pt-2">
                  <strong style={{ color: "#CD5360" }}>My Visual Resume</strong>
                </h3>

                <Link className="btn btn-outline-info" to="/resume/review">
                  MY VSR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RightColumn;
