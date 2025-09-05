import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Navigation: React.FC<NavigationProps> = ({ 
  scrollToSection, 
  aboutRef, 
  projectsRef, 
  experienceRef, 
  contactRef 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', ref: aboutRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'Contact', ref: contactRef }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-xl border-b border-border shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="text-2xl lg:text-3xl font-bold gradient-text font-mono"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            TAREK.DEV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                className="relative py-2 px-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            ))}
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group"
            whileTap={{ scale: 0.95 }}
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-xl rounded-xl mx-4 mb-4 border border-border"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  scrollToSection(item.ref);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;