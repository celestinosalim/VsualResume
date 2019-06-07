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
            <h1 id="content-texth1" style={{ fontWeight: "bolder" }}>
              Create a Must-Have Portfolio
            </h1>
            <hr />
            <h2 id="content-texth2" style={{ fontWeight: "bolder" }}>
              With VisualResume, you can create beautiful interactive resume
              pages in just a few minutes. An amazing portfolio website, that
              makes it easy for people to contact you, or see your projects.
            </h2>
          </div>
        </div>
      </div>
      <div className={"overlay"} />
    </div>
  );
};

export default Header;
