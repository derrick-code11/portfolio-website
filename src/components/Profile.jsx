import IMG from "/assets/profile-pic.png";
import Socials from "./Socials";
import "../styles/Profile.css"


const Profile = () => {
  const handleDownloadResume = () => {
    window.open('https://www.linkedin.com/in/derrick-agyemang-duah/', '_blank');
  };

  const handleContactInfo = () => {
    window.location.href = '#contact';
  };

  return (
    <section className="profile">
      <div className="section__pic-container">
        <img className="home-profile" src={IMG} alt="Derrick's profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Derrick</h1>
        <p className="section__text__p2">Aspiring Software Engineer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadResume}>
            Download Resume
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <Socials />
      </div>
    </section>
  );
};

export default Profile;

