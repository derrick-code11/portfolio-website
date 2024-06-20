import "../styles/Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>
          Copyright &#169; {currentYear} Derrick Agyemang Duah. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
