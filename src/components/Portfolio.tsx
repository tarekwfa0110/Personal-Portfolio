import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Experience from './Experience';
import Contact from './Contact';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';

const Portfolio: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
      
      if (cursorOutline) {
        cursorOutline.style.left = `${x}px`;
        cursorOutline.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      
      <div className="relative z-10">
        <Navigation 
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
        />
        
        <main>
          <Hero />
          
          <About ref={aboutRef} />
          
          <TechStack />
          
          <Projects ref={projectsRef} />
          
          <Experience ref={experienceRef} />
          
          <Contact ref={contactRef} />
        </main>
      </div>
    </div>
  );
};

export default Portfolio;