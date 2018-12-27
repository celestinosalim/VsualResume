import React from "react";
import "../../style/preview.css";
import ProfileModal from "./modals/ProfileModal";
import EducationModal from "./modals/EducationModal";
import ExperienceModal from "./modals/ExperienceModal";
import SkillsModal from "./modals/SkillsModal";
import ProjectsModal from "./modals/ProjectsModal";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <div className="page">
      <div id="Display">
        <div id="Profile">
          <h1>Profile</h1>

          <hr />
          <div className="row">
            <div className="col-md-4">
              <h1>About Me:</h1>
              <p>blabla</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                id="image"
                src="https://avatars1.githubusercontent.com/u/36177119?s=460&v=4"
                alt="Celestino Salim"
                width="246"
                height="246"
              />
            </div>
            <div className="col-md-4">
              <h1>Details:</h1>
              <p>Name:</p>
              <p>Age:</p>
              <p>Location:</p>
            </div>
          </div>
          <div style={{ textAlign: "right", paddingLeft: "380px" }}>
            <ProfileModal />
          </div>
        </div>
        <div id="Experience">
          <div>
            <h1>Education:</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>here is gonna be the dates</p>
            </div>

            <div className="col-md-8">Hello</div>
          </div>
          <div style={{ textAlign: "right", paddingLeft: "400px" }}>
            <EducationModal />
          </div>
          <div>
            <h1>Experiences:</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>here is gonna be the dates</p>
            </div>

            <div className="col-md-8">hello</div>
          </div>
          <div style={{ textAlign: "right", paddingLeft: "400px" }}>
            <ExperienceModal />
          </div>
        </div>

        <div id="abilities">
          <h1>Skills</h1>
          <h2>Programming Languages and any other skill</h2>
          <h2>Javascript</h2>
          <h2>React</h2>
          <h2>Ruby</h2>
          <h2>Programming Languages List</h2>
          <div style={{ textAlign: "right", paddingLeft: "400px" }}>
            <SkillsModal />
          </div>
        </div>

        <div id="projects">
          <h1>Projects</h1>
          <p>
            image with hover with a link to the working website of the project
          </p>
          <div style={{ textAlign: "right", paddingLeft: "400px" }}>
            <ProjectsModal />
          </div>
        </div>
        <div id="contact">
          <h1>Contact Info</h1>
          <p>footer with the information of the user.</p>
        </div>
      </div>
      <div
        className="card card-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"
        }}
      >
        <div className="text-white text-center  align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h3 className="card-title pt-2">
              <strong>GO LIVE</strong>
            </h3>

            <Link className="btn btn-info" to="/live">
              LIVE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Preview;
