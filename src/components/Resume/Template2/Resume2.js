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
      pathName: "Link1",
      pathRef: "/first"
    },
    {
      pathName: "Link2",
      pathRef: "/second"
    },
    {
      pathName: "Link3",
      pathRef: "/third"
    }
  ],
  name: "MENU",
  color: "black",
  linkColor: "black"
};

const skillsToRender = skill => {
  return skill.map(obj => obj.name);
};

const ProjectstoRender = projects => {
  let arr = [];

  return projects.map(project => {
    return {
      imageURL: project.image,
      title: project.name,
      link: project.url,
      languages: ["aa"]
    };
  });
};

const mediaToRender = media => {
  let arr = [];

  return media.map(media => {
    return {
      name: media.name,
      link: media.logo
    };
  });
};

class Resume2 extends Component {
  render() {
    let { resume } = this.props;
    console.log(resume);
    return (
      <div>
        {resume && (
          <div>
            <Intro
              name={resume.profile.name}
              profession={resume.profile.headline}
              link={"#about"}
            />

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

            <ProjectContainer projects={ProjectstoRender(resume.projects)} />
            <Footer
              name={resume.profile.name}
              media={mediaToRender(resume.social_medium)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Resume2;
