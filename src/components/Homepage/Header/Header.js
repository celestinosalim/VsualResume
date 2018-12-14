import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div
      className={"Hero"}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1485340140625-c6edf4b069d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2248&q=80)"
      }}
      //   https://media1.tenor.com/images/9e4f3f722d414afc613528dd10188bd2/tenor.gif?itemid=11198241
      // https://images.unsplash.com/photo-1524048824421-51d2958dc634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80
    >
      <div className={"content"}>
        <img
          className={"logo"}
          src="https://cdn4.iconfinder.com/data/icons/system-ui-set/512/modern-latin-alphabet-letter-v-512.png"
          alt="background"
        />
        <h2>Welcome To Vsual Resume</h2>
        <p>Vsual Resume is Dope as F</p>
      </div>
      <div className={"overlay"} />
    </div>
  );
};

export default Header;
