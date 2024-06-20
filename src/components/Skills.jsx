import Languages from "./Languages";
import Tools from "./Tools";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "../styles/Skills.css"

const Skills = () => {
  return (
    <>
      <section id="skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="skills-details-container">
          <div className="about-containers">
            <Languages></Languages>
            <Tools></Tools>
          </div>
        </div>
        <a className="arrow" href="#projects">
          <MdKeyboardDoubleArrowDown />
        </a>
      </section>
    </>
  );
};

export default Skills;
