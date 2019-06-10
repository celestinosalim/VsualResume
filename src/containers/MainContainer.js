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
import Resume from "../components/Resume/Template1/Resume";
import Resume2 from "../components/Resume/Template2/Resume2";
import { connect } from "react-redux";
import { requestResume } from "../store/actions/ResumeActions";
import { BASE_URL } from "../store/actions/ActionTypes";
import { requestUser } from "../store/actions/UserActions";

class MainContainer extends Component {
  state = {
    resume: null
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.requestResume();
      this.props.requestUser();
    }
    if (
      !window.location.pathname.includes("/login") &&
      !window.location.pathname.includes("/resume") &&
      !window.location.pathname.includes("/profile")
    ) {
      fetch(`${BASE_URL}/api/resumes${window.location.pathname}`)
        .then(response => response.json())
        .then(resume =>
          this.setState({
            resume
          })
        )
        .catch(err => console.log(err));
    }
  }

  render() {
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
                  {this.state.resume !== null &&
                    this.state.resume.template === 1 && (
                      <Route
                        path={`${location.pathname}`}
                        render={() => <Resume resume={this.state.resume} />}
                      />
                    )}
                  {this.state.resume !== null &&
                    this.state.resume.template === 2 && (
                      <Route
                        path={`${location.pathname}`}
                        render={() => <Resume2 resume={this.state.resume} />}
                      />
                    )}
                  }
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
    { requestResume, requestUser }
  )(MainContainer)
);
