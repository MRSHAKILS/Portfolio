import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/mockData';

const About = () => {
  const { about } = portfolioData;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="about">
      <div className="section-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-description">{about.description}</p>
              
              <div className="about-highlights">
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <div className="highlight-bullet" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="about-card">
                <motion.div
                  className="card-glow"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="card-content">
                  <div className="card-stats">
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;