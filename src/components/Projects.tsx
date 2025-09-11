import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  year: number;
  featured: boolean;
}

const Projects = forwardRef<HTMLElement>((_, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      title: "Chronos E-Commerce",
      description: "Modern luxury watch e-commerce platform with advanced features",
      longDescription: "A sophisticated e-commerce platform specializing in luxury watches, featuring dynamic product listings, advanced filtering, shopping cart functionality, secure checkout process, and responsive design. Built with modern web technologies for optimal performance and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API", "Vite"],
      liveUrl: "https://chronos-eg.vercel.app",
      githubUrl: "https://github.com/tarekwfa0110/Chronos-E-Commerce",
      imageUrl: "/src/assets/Chronos-Modern-Watch-Store.png",
      year: 2024,
      featured: true
    },
    {
      title: "Chronos Dashboard",
      description: "Comprehensive admin dashboard for e-commerce management",
      longDescription: "Feature-rich admin dashboard designed for managing the Chronos e-commerce platform. Includes analytics, user management, product inventory control, order tracking, sales reports, and real-time data visualization with interactive charts and graphs.",
      technologies: ["React", "TypeScript", "Charts.js", "Admin Panel", "Data Visualization"],
      liveUrl: "https://chronos-dashboard-ten.vercel.app",
      githubUrl: "https://github.com/tarekwfa0110/Chronos-Dashboard",
      imageUrl: "/src/assets/Chronos-Dashboard.png",
      year: 2024,
      featured: true
    },
    {
      title: "UniQuiz",
      description: "AI-powered PDF to Quiz conversion platform",
      longDescription: "An innovative educational platform that converts PDF documents into interactive quizzes using AI technology. Features include PDF upload and processing, automatic question generation, quiz management, progress tracking, and a user-friendly dashboard for students and educators.",
      technologies: ["React", "AI Integration", "PDF Processing", "Quiz Engine", "User Management"],
      liveUrl: "https://uniquiz.vercel.app",
      githubUrl: "https://github.com/tarekwfa0110/UniQuiz",
      imageUrl: "/src/assets/UniQuiz-PDF-to-Quiz-Application.png",
      year: 2024,
      featured: true
    }
  ];

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

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 px-6 lg:px-8"
    >
      <div ref={inViewRef} className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Showcasing my passion for creating innovative web applications and user experiences
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  className="relative group project-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-card border border-border"
                  />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 rounded-2xl">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card text-foreground p-3 rounded-full hover:scale-110 transition-transform duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-primary font-mono">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-card/50 text-foreground px-3 py-1 rounded-lg text-sm font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300"
                  >
                    <span>View Live</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;