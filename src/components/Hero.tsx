import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import heroBackground from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/tarekwfa0110", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/tarek-wfa/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/TarekWfa/", label: "Twitter" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
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
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8"
        >
          <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-3" />
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-foreground mb-2">Hi, I'm</span>
          <span className="block gradient-text">Tarek Wfa</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
        >
          Full-Stack Developer & Medical Student
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting innovative web applications with modern technologies. 
          Passionate about creating seamless user experiences and scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:shadow-glow transition-all duration-300 glow-on-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center space-x-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 group-hover:animate-pulse" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2 font-mono">scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;