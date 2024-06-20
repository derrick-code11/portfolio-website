import aboutProfilePic from "../assets/about-pic.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Details from "./Details";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={aboutProfilePic}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <Details></Details>
        </div>

        <a href="#skills">
          <MdKeyboardDoubleArrowDown />
        </a>
      </section>
    </>
  );
};

export default About;
