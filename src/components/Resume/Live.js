import React from "react";

const timing = () => {
  setTimeout(() => {
    window.location.pathname = localStorage.getItem("user");
  }, 1000);
};

const Live = props => {
  return (
    <div>
      {window.scrollTo(0, 50)}
      {timing()}
    </div>
  );
};

export default Live;
