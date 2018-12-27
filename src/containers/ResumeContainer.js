import React, { Fragment } from "react";

import { Route, withRouter, Switch } from "react-router-dom";
import ResumeNavBar from "../components/NavBar/ResumeNavBar";
import ResumeHome from "../components/Resume/ResumeHome";
import Preview from "../components/Resume/Preview";
import "../style/ResumeContainer.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ResumeContainer = (props, { location }) => {
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
                      path={`${props.match.path}/review`}
                      render={() => <Preview />}
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

export default withRouter(ResumeContainer);
