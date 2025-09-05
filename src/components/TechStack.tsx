import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📁' },
    { name: 'Tailwind', icon: '💨' }
  ];

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Technologies I use to bring ideas to life
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First row - Left to Right */}
        <div className="flex overflow-hidden mb-8">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300 flex-shrink-0"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...technologies.reverse(), ...technologies].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300 flex-shrink-0"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;