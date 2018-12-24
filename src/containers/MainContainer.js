import React from "react";
import { connect } from "react-redux";
import { MDBContainer } from "mdbreact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePageContainer from "./HomePageContainer";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import { Route, withRouter, Switch } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import ResumeContainer from "./ResumeContainer";
import "../style/MainContainer.css";
import Live from "../components/Resume/Live";

const MainContainer = ({ location }) => {
  return (
    <MDBContainer fluid>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={450} classNames="fade" key={location.key}>
              <Switch location={location}>
                <Route exact path="/" render={() => <HomePageContainer />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/logout" render={() => <Logout />} />
                <Route path="/resume" render={() => <ResumeContainer />} />
                <Route path="/live" render={() => <Live />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </MDBContainer>
  );
};

export default withRouter(MainContainer);
