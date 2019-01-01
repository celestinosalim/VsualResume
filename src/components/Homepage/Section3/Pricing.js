import React from "react";

const Pricing = () => {
  return (
    <div className="Sections" id="pricingsection">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Pricing
        </h2>

        <p className="lead grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="row">
          <div className="col-lg-5 text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt="Sample"
            />
          </div>

          <div className="col-lg-7">
            <div className="row mb-3">
              <div className="col-1">
                <i className="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Safety</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-1">
                <i className="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <i className="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
