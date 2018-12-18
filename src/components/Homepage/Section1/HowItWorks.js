import React from "react";

const HowItWorks = () => {
  return (
    <div className="Sections">
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">How It Works?</h2>

        <p className="lead grey-text w-responsive mx-auto mb-5">
          Three Easy Steps
        </p>

        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-area-chart fa-3x red-text" />
            <h5 className="font-weight-bold my-4">Analytics</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>

          <div className="col-md-4">
            <i className="fa fa-book fa-3x cyan-text" />
            <h5 className="font-weight-bold my-4">Tutorials</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>

          <div className="col-md-4">
            <i className="fa fa-comments-o fa-3x orange-text" />
            <h5 className="font-weight-bold my-4">Support</h5>
            <p className="grey-text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
