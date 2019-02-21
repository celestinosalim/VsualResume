import React from "react";
import "../../../style/PreviewHeader.css";
import logo from "../../../images/logo.png";

const HeaderLive = props => {
  let { profile } = props.resume;

  return (
    <div>
      <div
        className="previewHeaderImage"
        style={{
          backgroundImage: `url(${profile.background_image})`
        }}
      >
        <div>
          <div>
            <div className="previewHeaderContent">
              <h1
                style={{
                  fontWeight: "bolder",
                  color: "red",
                  fontSize: "80px"
                }}
              >
                {profile.name}
              </h1>
              <hr />
              <h4 style={{ fontWeight: "bolder", color: "red" }}>
                powered by:
              </h4>
              <img src={logo} alt="" style={{ width: "5%" }} />
            </div>
          </div>
        </div>
        <div className={"overlay"} />
      </div>
    </div>
  );
};

export default HeaderLive;
