import { PiCertificateFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import "../styles/Details.css";

const Details = () => {
  return (
    <>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <PiCertificateFill className="icon" />
            <h3>Experience</h3>
            <p>
              2+ years <br />
              Software Development
            </p>
          </div>
          <div className="details-container">
            <IoSchoolSharp className="icon" />
            <h3>Education</h3>
            <p>
              BA Computer Science
              <br />
              Colby College
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Greetings! 👋 I'm Derrick, a passionate computer
            science student at Colby College, pursuing a Bachelor of
            Arts degree, set to graduate in May 2026. 🎓 My tech journey is
            fueled by an insatiable love for problem-solving and creating
            impactful solutions through code. 💻🚀 Beyond coding, I'm an active
            member of the Colby Hackers Club, where I've participated in several
            hackathons, building innovative products. 🏆🔧 Additionally, I
            mentor middle school students in the WJHS Coding Club, introducing
            them to the fascinating world of computer science concepts. 👨‍🏫📚
            When I'm not immersed in coding or mentoring, I enjoy exploring new
            places, meeting new people, and embracing diverse cultures. 🌍✈️🤝 I
            also have a passion for soccer, both playing on the field and in the
            FIFA video game during my free time. ⚽🎮 It's a great way to unwind
            and recharge. Thank you for taking the time to read this, and I look
            forward to connecting with you! 😊🤝
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
