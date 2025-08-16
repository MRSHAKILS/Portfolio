import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Trophy } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="experience">
      <div className="section-container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Professional Experience</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              My journey through the world of software development
            </p>
          </motion.div>

          <div className="timeline">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-marker">
                  <motion.div
                    className="marker-dot"
                    whileHover={{ scale: 1.2 }}
                  />
                  {index < experience.length - 1 && (
                    <div className="timeline-line" />
                  )}
                </div>

                <motion.div 
                  className="timeline-content"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="job-card">
                    <div className="job-header">
                      <div className="job-title-section">
                        <h3 className="job-position">{job.position}</h3>
                        <h4 className="job-company">{job.company}</h4>
                      </div>
                      <div className="job-meta">
                        <div className="job-duration">
                          <Calendar size={16} />
                          <span>{job.duration}</span>
                        </div>
                        <div className="job-location">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="job-description">{job.description}</p>

                    <div className="job-technologies">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="tech-tag"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="job-achievements">
                      <div className="achievements-header">
                        <Trophy size={18} />
                        <span>Key Achievements</span>
                      </div>
                      <ul className="achievements-list">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="achievement-item">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;