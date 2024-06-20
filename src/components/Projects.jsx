import projectData from "../projects.json";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Project from "./Project";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="skills-details-container">
          <div class="about-containers">
            {projectData.map((project)=>(
                <Project
                key={project.id}
                media={project.media}
                name={project.name}
                glink={project["github-link"]}
                dlink={project["demo-link"]}
                ></Project>
            ))}
          </div>
        </div>
        <a className="arrow" href="#contact">
          <MdKeyboardDoubleArrowDown />
        </a>
      </section>
    </>
  );
};

export default Projects;
