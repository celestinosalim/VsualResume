import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import ResumeNavBar from "../components/NavBar/ResumeNavBar";
import ResumeHome from "../components/Resume/ResumeHome";
import CreateForm from "../components/Resume/CreateForm";
import EditForm from "../components/Resume/EditForm";
import Preview from "../components/Resume/Preview";
import Live from "../components/Resume/Live";

const ResumeContainer = props => {
  console.log("resumecontainer", props);

  return (
    <Fragment>
      <div>
        <ResumeNavBar />
        <div style={{ paddingTop: "80px" }}>
          <Switch>
            <Route
              exact
              path={props.match.path}
              render={() => <ResumeHome />}
            />
            <Route
              path={`${props.match.path}/create-resume`}
              render={() => <CreateForm />}
            />
            <Route
              path={`${props.match.path}/edit-resume`}
              render={() => <EditForm />}
            />
            <Route
              path={`${props.match.path}/review`}
              render={() => <Preview />}
            />
            <Route path={`${props.match.path}/live`} render={() => <Live />} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

// const mapStateToProps = state => {
//   return {
//     user: state.currentUser,
//     resume: state.resume
//   };
// };

export default withRouter(ResumeContainer);
