import "../styles/Header.css"
const Header = () => {
  return (
    <>
      <header>
        <nav className="desktop-nav">
          <div className="logo">Derrick Agyemang Duah</div>
          <div>
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
      </header>
    </>
  );
};

export default Header;
