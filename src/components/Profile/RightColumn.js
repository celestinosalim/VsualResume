import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RightColumn = props => {
  return (
    <Fragment>
      <div>
        <div className="card testimonial-card">
          <div className="card-up indigo lighten-1" />

          <div className="card-body">
            <h4 className="card-title">SETTINGS</h4>
            <hr />

            <p>Change Password:</p>
            <p>Change Profile Picture:</p>
            <p>Change Email:</p>
          </div>

          <div
            className="card card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h3 className="card-title pt-2">
                  <strong>My Resume</strong>
                </h3>

                <Link className="btn btn-orange" to="/resume/edit-resume">
                  Edit My Resume
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
