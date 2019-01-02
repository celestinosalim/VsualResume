import React, { Fragment } from "react";

const LeftColumn = props => {
  return (
    <Fragment>
      <div>
        <div
          className="card testimonial-card"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="card-up indigo lighten-1" />

          <div className="avatar mx-auto white">
            {props.user && (
              <img
                style={{ width: "300px" }}
                src={props.user.avatar}
                className="rounded-circle"
                alt="avatar"
              />
            )}
          </div>

          <div className="card-body" style={{ color: "#CD5360" }}>
            {props.user && (
              <h4 className="card-title">{props.user.username}</h4>
            )}
            <hr />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftColumn;
