import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Internships />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
