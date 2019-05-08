import React, { Component } from "react";
import {
  SideBar,
  Intro,
  About,
  ProjectContainer,
  Skills,
  Footer
} from "vs-template1";

const sidebar = {
  navLinks: [
    {
      pathName: "About",
      pathRef: "about"
    },
    {
      pathName: "Skills",
      pathRef: "skills"
    },
    {
      pathName: "Projects",
      pathRef: "projects"
    },
    {
      pathName: "Contact",
      pathRef: "footer"
    }
  ]
};

const skillsToRender = skill => {
  return skill.map(obj => obj.name);
};

const ProjectstoRender = projects => {
  return projects.map(project => {
    return {
      imageURL: project.image,
      title: project.name,
      link: project.url,
      languages: project.description.split(",")
    };
  });
};

const mediaToRender = media => {
  return media.map(media => {
    return {
      name: media.name,
      link: media.link
    };
  });
};

class Resume2 extends Component {
  render() {
    let { resume } = this.props;

    return (
      <div>
        {resume && (
          <div>
            <div id="intro">
              <Intro
                name={resume.profile.name}
                profession={resume.profile.headline}
                link={"about"}
              />
            </div>

            <SideBar
              name="Menu"
              navLinks={sidebar.navLinks}
              color="#00aced"
              linkColor="#00aced"
            />

            <div id="about">
              <About
                name={resume.profile.name}
                imageURL={resume.profile.profile_picture}
                description={resume.profile.about_me}
              />
            </div>
            <div id="skills">
              <Skills skills={[...skillsToRender(resume.tools)]} />
            </div>
            <div id="projects">
              <ProjectContainer projects={ProjectstoRender(resume.projects)} />
            </div>
            <div id="footer">
              <Footer
                name={resume.profile.name}
                media={mediaToRender(resume.social_medium)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Resume2;
