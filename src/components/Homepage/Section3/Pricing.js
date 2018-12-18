import React, { Fragment } from "react";

const Pricing = () => {
  return (
    <div className="Sections">
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Pricing</h2>

        <p class="lead grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div class="row">
          <div class="col-lg-5 text-center text-lg-left">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt="Sample image"
            />
          </div>

          <div class="col-lg-7">
            <div class="row mb-3">
              <div class="col-1">
                <i class="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div class="col-xl-10 col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Safety</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-1">
                <i class="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div class="col-xl-10 col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Technology</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-1">
                <i class="fa fa-mail-forward fa-lg indigo-text" />
              </div>

              <div class="col-xl-10 col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Finance</h5>
                <p class="grey-text mb-0">
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
