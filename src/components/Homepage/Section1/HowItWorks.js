import React, { Fragment } from "react";

const HowItWorks = () => {
  return (
    <Fragment className="Container">
      <h1>Three easy steps</h1>
      <div class="row">
        <div class="col-sm">
          <h2>1.Input Your Information</h2>
          <img
            src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/fill_form-512.png"
            alt="form"
          />
        </div>
        <div class="col-sm">
          <h2>2.Review It</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/flaturici-set-8/512/search_document-512.png"
            alt="preview"
          />
        </div>
        <div class="col-sm">
          <h2>3.Go Live</h2>
          <img
            src="https://cdn3.iconfinder.com/data/icons/network-and-communications-2-1/130/82-512.png"
            alt="live"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HowItWorks;
