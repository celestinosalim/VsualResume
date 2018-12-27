import React from "react";

const AboutUs = () => {
  return (
    <div className="Sections">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          About Us
        </h2>

        <p className="lead grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-2">
                <i className="fa fa-2x fa-flag-checkered deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">International</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-2">
                <i className="fa fa-2x fa-flask deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">Experimental</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div className="row mb-md-0 mb-3">
              <div className="col-2">
                <i className="fa fa-2x fa-glass deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">Relaxing</h5>
                <p className="grey-text mb-md-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt="Sample2"
            />
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-2">
                <i className="fa fa-2x fa-heart deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">Beloved</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-2">
                <i className="fa fa-2x fa-flash deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">Rapid</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fa fa-2x fa-magic deep-purple-text" />
              </div>

              <div className="col-10">
                <h5 className="font-weight-bold mb-3">Magical</h5>
                <p className="grey-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
