import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = forwardRef<HTMLElement>((_, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experience = {
    company: "Retink",
    role: "Backend Developer Intern",
    period: "2025",
    location: "Remote",
    description: "Developed and maintained REST APIs using Node.js and Express, working with PostgreSQL databases and Redis caching for improved performance. Collaborated with cross-functional teams to implement user authentication systems, data validation, and API documentation.",
    achievements: [
      "Developed and maintained REST APIs using Node.js and Express",
      "Worked with PostgreSQL databases and Redis caching for improved performance",
      "Collaborated with cross-functional teams to implement user authentication systems",
      "Contributed to database schema optimization and query performance improvements",
      "Implemented automated testing and gained experience with Git workflows and code reviews",
      "Worked on production applications serving thousands of users"
    ],
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "REST APIs", "Authentication", "Git", "Agile"]
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 px-6 lg:px-8"
    >
      <div ref={inViewRef} className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and contributions in the tech industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 glow-on-hover"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {experience.role}
                </h3>
                <p className="text-xl text-primary font-semibold">
                  {experience.company}
                </p>
              </div>
              
              <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experience.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Key Achievements
            </h4>
            <div className="grid gap-4">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Skills Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Looking for new opportunities to contribute and grow
          </p>
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300">
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;