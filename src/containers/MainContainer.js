import React, { Component } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePageContainer from "./HomePageContainer";

import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import { Route, withRouter, Switch } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import ResumeContainer from "./ResumeContainer";
import "../style/MainContainer.css";
import Live from "../components/Resume/Live";
import Resume from "../components/Resume/Resume";
import { connect } from "react-redux";
import { requestResume } from "../store/actions/ResumeActions";
import { requestLive } from "../store/actions/ResumeActions";

class MainContainer extends Component {
  componentDidMount() {
    this.props.requestLive();

    this.props.requestResume();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                timeout={3000}
                classNames="fade"
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path="/" render={() => <HomePageContainer />} />
                  <Route path="/profile" render={() => <ProfileContainer />} />
                  <Route path="/login" render={() => <Login />} />
                  <Route path="/logout" render={() => <Logout />} />
                  <Route path="/resume" render={() => <ResumeContainer />} />
                  <Route path="/live" render={() => <Live />} />
                  <Route
                    path={`${location.pathname}`}
                    render={() => <Resume />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default withRouter(
  connect(
    mapStateToProps,
    { requestLive, requestResume }
  )(MainContainer)
);
