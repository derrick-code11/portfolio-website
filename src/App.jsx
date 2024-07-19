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
  return (
    <main id="app">
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
    </main>
  );
}

export default App;
