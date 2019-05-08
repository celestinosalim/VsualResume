import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div
      className={"Hero"}
      style={{
        backgroundImage:
          "url(https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg)"
      }}

      // "url(https://images.unsplash.com/photo-1525968681927-9cd76a0590a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2201&q=80)"
      //https://images.unsplash.com/photo-1528060624137-4220dde892b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80

      //https://images.unsplash.com/photo-1456081101716-74e616ab23d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80

      //https://images.unsplash.com/photo-1485340140625-c6edf4b069d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2248&q=80
      //
      //   https://media1.tenor.com/images/9e4f3f722d414afc613528dd10188bd2/tenor.gif?itemid=11198241
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
