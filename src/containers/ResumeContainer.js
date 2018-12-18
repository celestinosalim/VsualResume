import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import ResumeNavBar from "../components/NavBar/ResumeNavBar";
import ResumeHome from "../components/Resume/ResumeHome";
import CreateForm from "../components/Resume/CreateForm";
import Preview from "../components/Resume/Preview";
import Live from "../components/Resume/Live";
import "../style/ResumeContainer.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "../components/Footer/Footer";

const ResumeContainer = (props, { location }) => {
  console.log("resumecontainer", props);

  return (
    <Fragment>
      <div>
        <ResumeNavBar />
        <div style={{ paddingTop: "120px" }}>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path={"/resume"}
                      render={() => <ResumeHome />}
                    />
                    <Route
                      path={`${props.match.path}/create-resume`}
                      render={() => <CreateForm />}
                    />
                    <Route
                      path={`${props.match.path}/review`}
                      render={() => <Preview />}
                    />
                    <Route
                      path={`${props.match.path}/live`}
                      render={() => <Live />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
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
