import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/mockData';

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', data: skills.frontend },
    { id: 'backend', label: 'Backend', data: skills.backend },
    { id: 'database', label: 'Database', data: skills.database },
    { id: 'tools', label: 'Tools', data: skills.tools }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="skills">
      <div className="section-container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div className="skills-tabs" variants={itemVariants}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`skill-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <div className="skills-grid">
            <AnimatePresence mode="wait">
              {categories
                .find(cat => cat.id === activeCategory)
                ?.data.map((skill, index) => (
                  <motion.div
                    key={`${activeCategory}-${skill.name}`}
                    className="skill-card interactive magnetic ripple"
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="skill-header">
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                    
                    <span className="skill-category">{skill.category}</span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;