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

class MainContainer extends Component {
  state = {
    resume: null
  };
  componentDidMount() {
    this.props.requestResume();
    fetch(
      `https://my-resume-v2-api.herokuapp.com/api/resumes${
        window.location.pathname
      }`
    )
      .then(response => response.json())
      .then(resume =>
        this.setState({
          resume
        })
      );
  }

  render() {
    // console.log(this.props);
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
                  {this.state.resume !== null && (
                    <Route
                      path={`${location.pathname}`}
                      render={() => <Resume resume={this.state.resume} />}
                    />
                  )}
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
    { requestResume }
  )(MainContainer)
);
