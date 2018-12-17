import React, { Fragment } from "react";

const LeftColumn = props => {
  return (
    <Fragment>
      <div>
        <div className="card testimonial-card">
          <div className="card-up indigo lighten-1" />

          <div className="avatar mx-auto white">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
              className="rounded-circle"
              alt="woman avatar"
            />
          </div>

          <div className="card-body">
            <h4 className="card-title">Anna Doe</h4>
            <hr />

            <p>
              <i className="fa fa-quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Eos, adipiscia
              <i className="fa fa-quote-right" />
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LeftColumn;
