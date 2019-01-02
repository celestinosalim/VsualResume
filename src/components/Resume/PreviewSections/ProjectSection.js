import React from "react";
import ProjectsModal from "../modals/ProjectsModal";
import { MDBRow, MDBCol, MDBView, MDBMask, MDBIcon } from "mdbreact";

const ProjectSection = props => {
  let { projects } = props.resume;

  const linked = (e, obj) => {
    setTimeout(window.location.replace(obj.url), 3000);
  };

  return (
    <div id="projects">
      <h1
        className="h1-responsive font-weight-bold my-5"
        style={{ color: "#438496" }}
      >
        Projects
      </h1>
      <hr />

      {projects.map((project, idx) => (
        <MDBRow key={idx} style={{ paddingBottom: "10px" }}>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src={project.image}
                className="img-fluid"
                alt=""
                style={{ width: "650px", height: "350px" }}
              />

              <MDBMask overlay="black-strong">
                <p
                  style={{
                    paddingTop: "5px",
                    paddingLeft: "15px",
                    textAlign: "left",
                    fontSize: "50px",
                    fontWeight: "bolder",
                    color: "#cd5360"
                  }}
                >
                  {project.name}
                </p>
                <hr style={{ background: "white" }} />

                <p>{project.description}</p>
                <div
                  style={{ textAlign: "right" }}
                  onClick={e => linked(e, project)}
                >
                  <MDBIcon
                    className="blue-text pr-3"
                    icon="  fa-external-link"
                    size="2x"
                  />
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      ))}
      <div style={{ textAlign: "right", paddingLeft: "380px" }}>
        <ProjectsModal />
      </div>
    </div>
  );
};

export default ProjectSection;
