import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Hamburger from "./components/Hamburger";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isScreenAllowed, setIsScreenAllowed] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768 || window.innerHeight < 768){
        setIsScreenAllowed(false);
      } else {
        setIsScreenAllowed(true);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize); 

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup listener on unmount
  }, []);

  return (
    <main id="app">
      {isScreenAllowed ? (
        <>
          <Header />
          <Hamburger />
          <Profile />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      ) : (
        <div className="restricted-message">
          <p>
            This application is not available on screens smaller than 768px.
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
