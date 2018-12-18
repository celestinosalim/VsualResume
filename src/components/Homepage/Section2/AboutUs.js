import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <div className="Sections">
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">
          About Us
        </h2>

        <p class="lead grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div class="row">
          <div class="col-md-4">
            <div class="row mb-3">
              <div class="col-2">
                <i class="fa fa-2x fa-flag-checkered deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">International</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-2">
                <i class="fa fa-2x fa-flask deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">Experimental</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div class="row mb-md-0 mb-3">
              <div class="col-2">
                <i class="fa fa-2x fa-glass deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">Relaxing</h5>
                <p class="grey-text mb-md-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt="Sample image"
            />
          </div>

          <div class="col-md-4">
            <div class="row mb-3">
              <div class="col-2">
                <i class="fa fa-2x fa-heart deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">Beloved</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-2">
                <i class="fa fa-2x fa-flash deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">Rapid</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-2">
                <i class="fa fa-2x fa-magic deep-purple-text" />
              </div>

              <div class="col-10">
                <h5 class="font-weight-bold mb-3">Magical</h5>
                <p class="grey-text mb-0">
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
