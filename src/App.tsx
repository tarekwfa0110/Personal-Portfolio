import React, { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Projects from "./components/projects/Projects";

const App: React.FC = () => {
  // Refs for scrolling to sections
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-24 py-12 bg-black min-h-screen flex flex-col gap-12 justify-between">
    <Nav
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <Main />
      <hr />
      <Projects ref={servicesRef} />
      <hr />
      <About ref={aboutRef} id="about" />
      <hr />
      <Connect ref={contactRef} />
      <hr />
    </div>
  );
};

export default App;