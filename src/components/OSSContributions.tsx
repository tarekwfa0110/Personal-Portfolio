import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, GitBranch, FileText, Code, Calendar } from 'lucide-react';
import npmLogo from '../../public/npm-svgrepo-com.svg';
import liveCodesLogo from '../../public/livecodes-logo.svg';

const OSSContributions = forwardRef<HTMLElement>((_, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const contributions = [
    {
      id: 1,
      organization: "npm",
      repository: "npm/cli",
      logo: npmLogo,
      title: "npm CLI: Script Execution Environment Standardization",
      type: "Technical Enhancement",
      date: "May 2025",
      issue: {
        number: 8305,
        title: "Working directory of npm scripts in older versions of npm",
        url: "https://github.com/npm/cli/issues/8305"
      },
      pr: {
        number: 8307,
        title: "docs: Clarify script working directory behavior",
        url: "https://github.com/npm/cli/pull/8307"
      },
      description: "Resolved critical ambiguity in npm CLI script execution behavior by standardizing documentation and providing clear technical specifications for script working directory across npm versions.",
      impact: [
        "Established authoritative technical specification for npm script execution environment",
        "Resolved developer confusion around script working directory behavior in npm v6 vs v7+",
        "Documented INIT_CWD environment variable for advanced script development",
        "Created reference implementation for script path verification patterns"
      ],
      technologies: ["npm CLI", "Node.js", "Shell Scripting", "Technical Writing"],
      status: "Merged"
    },
    {
      id: 2,
      organization: "Live Codes",
      repository: "live-codes/livecodes",
      logo: liveCodesLogo,
      title: "Live Codes: HTML Language Support Implementation",
      type: "Feature Development",
      date: "May 2025",
      issue: {
        number: 769,
        title: "Add missing language docs",
        url: "https://github.com/live-codes/livecodes/issues/769"
      },
      pr: {
        number: 822,
        title: "Add HTML language documentation",
        url: "https://github.com/live-codes/livecodes/pull/822"
      },
      description: "Implemented comprehensive HTML language support for the Live Codes online development platform, expanding the tool's capabilities for web development education and prototyping.",
      impact: [
        "Extended Live Codes platform with complete HTML language support",
        "Enhanced developer experience for web development workflows",
        "Improved platform's educational value for HTML learning",
        "Contributed to comprehensive multi-language development environment"
      ],
      technologies: ["HTML", "Live Codes", "Web Development", "Online IDE"],
      status: "Merged"
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-20 px-6 lg:px-8"
    >
      <div ref={inViewRef} className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhancing developer tools and improving the ecosystem through technical contributions
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 glow-on-hover"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <img 
                    src={contribution.logo} 
                    alt={`${contribution.organization} logo`}
                    className="w-10 h-10 rounded-lg object-contain bg-white/10 p-1"
                  />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                      {contribution.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <span className="font-semibold text-primary">
                        {contribution.organization}
                      </span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{contribution.type}</span>
                      <span className="text-sm">•</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{contribution.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    contribution.status === 'Merged' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {contribution.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {contribution.description}
              </p>

              {/* Impact */}
              <div className="mb-6">
                <h4 className="text-base font-semibold text-foreground mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Technical Impact
                </h4>
                <div className="grid gap-2">
                  {contribution.impact.map((item, impactIndex) => (
                    <motion.div
                      key={impactIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + impactIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-base font-semibold text-foreground mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {contribution.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + techIndex * 0.05 }}
                      className="bg-primary/10 text-primary px-3 py-1.5 rounded-md text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={contribution.issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-blue-500/30 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Issue #{contribution.issue.number}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={contribution.pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-green-500/30 text-sm"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>PR #{contribution.pr.number}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-base text-muted-foreground mb-4">
            Always looking for opportunities to contribute to the open source community
          </p>
          <a
            href="https://github.com/tarekwfa0110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:shadow-glow transition-all duration-300 text-sm"
          >
            <span>View More Contributions</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

OSSContributions.displayName = 'OSSContributions';

export default OSSContributions;
