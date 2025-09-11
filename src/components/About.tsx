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
      description: "Specializing in Next.js, React, and TypeScript on the frontend, with Node.js and PostgreSQL powering the backend. Passionate about AI integration and complex data processing."
    },
    {
      icon: Heart,
      title: "Continuous Learning",
      description: "Currently expanding skills in systems programming with Rust and Go, while contributing to open-source projects and creating technical content for Arabic-speaking developers."
    },
    {
      icon: Coffee,
      title: "Innovation Focus",
      description: "Drawn to projects involving AI integration, seamless user experiences, and pushing the boundaries of what's possible with web technologies."
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
                I'm a <strong>full-stack developer</strong> passionate about building innovative web applications that solve real problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with curiosity about how things work and evolved into a deep love for creating 
                digital experiences that make a difference. I specialize in building <strong>modern web applications</strong> using 
                <strong> Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong> on the frontend, with <strong>Node.js</strong> and 
                <strong> PostgreSQL</strong> powering the backend.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm particularly drawn to projects that involve <strong>AI integration</strong>, <strong>complex data processing</strong>, 
                and <strong>seamless user experiences</strong>. Currently expanding my skills in <strong>systems programming</strong> with 
                <strong> Rust</strong> and <strong>Go</strong>, while contributing to <strong>open-source projects</strong> and sharing knowledge 
                through technical writing.
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
              <a 
                href="/resume/resume_tarek_wfa_frontend.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300"
              >
                Download Resume
              </a>
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