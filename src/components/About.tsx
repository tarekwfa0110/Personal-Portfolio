import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Coffee } from 'lucide-react';

const About = forwardRef<HTMLElement>((_, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Built" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Learning Mode" }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, TypeScript, and cloud platforms."
    },
    {
      icon: Heart,
      title: "Medical Student",
      description: "Studying medicine while pursuing my passion for technology, bringing analytical thinking to development."
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges and creating elegant solutions that make a real impact."
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      <div ref={inViewRef} className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer based in Egypt, currently pursuing my medical degree 
                while building innovative web applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology started with curiosity and has evolved into a deep passion for creating 
                digital solutions that solve real-world problems. I believe in writing clean, efficient code 
                and building user-centric applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me studying medicine, playing football, or exploring new 
                technologies. I'm always eager to learn and collaborate on exciting projects.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300">
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right column - Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border glow-on-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;