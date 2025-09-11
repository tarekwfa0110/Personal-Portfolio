import React from 'react';
import { motion } from 'framer-motion';
// REMOVED: ChevronDown is no longer needed
// import { ChevronDown } from 'lucide-react'; 
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import heroBackground from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/tarekwfa0110', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tarek-wfa/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/TarekWfa/', label: 'Twitter' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-20"
      >
        {/* Personal Photo */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="relative group cursor-pointer">
            {/* CHANGED: Photo size reduced */}
             <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-muted-foreground/20 group-hover:border-primary/60 transition-all duration-500">
              <img
                 src="/Personal-photo.jpg"
                alt="Tarek Wfa - Full-Stack Developer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-4"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping" />
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="block text-foreground mb-2">Hi, I'm</span>
          <span className="block gradient-text">Tarek Wfa</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
        >
          Full-Stack Developer & Medical Student
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
        >
          Crafting innovative web applications with modern technologies. Passionate about creating seamless user experiences and scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium text-lg hover:shadow-glow transition-all duration-300 glow-on-hover w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* REMOVED: Animated scroll down indicator */}
    </section>
  );
};

export default Hero;