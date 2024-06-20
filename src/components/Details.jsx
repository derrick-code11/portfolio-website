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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
