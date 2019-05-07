import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Template2 extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Link className="btn btn-blue" to="/live">
            SELECT TEMPLATE
          </Link>
          <div style={{ color: "red" }}>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { resume: state.resume.resume };
};

export default connect(mapStateToProps)(Template2);
