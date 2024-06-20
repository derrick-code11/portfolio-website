import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <TfiEmail className="icon contact-icon email-icon" />
            <p>
              <a className="email" href="mailto:agyemangderrick777@gmail.com">
                agyemangderrick777@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/derrick-agyemang-duah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
