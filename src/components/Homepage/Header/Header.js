import React from "react";
import "./header.css";
import * as vsualresume from "../../../images/vsualresume.png";

const Header = () => {
  return (
    <div
      className={"Hero"}
      style={{
        backgroundImage: `url(${vsualresume})`
      }}
    >
      <div>
        <div>
          <div className="content">
            <h2 id="content-texth2" style={{ fontWeight: "bolder" }}>
              With VsualResume create an interactive resume that makes it easy
              to showcase projects.
            </h2>
            {/* <h1 id="content-texth1" style={{ fontWeight: "bolder" }}>
              Create a Must-Have Portfolio
            </h1>
            <hr /> */}
          </div>
        </div>
      </div>
      <div className={"overlay"} />
    </div>
  );
};

export default Header;
