import React, { useRef } from 'react'
import './App.css'
import About from './components/About'
import Connect from './components/Connect'
import Main from './components/Main'
import Nav from './components/Nav'
import Projects from './components/projects/Projects'

const App: React.FC = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='px-24 py-12 bg-black min-h-screen flex flex-col gap-12 justify-between'>
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
      <About ref={aboutRef} />  
      <hr />
      <Connect ref={contactRef} />
    </div>
  )
}

export default App
