import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Trophy } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Achievements = () => {
  const { achievements } = portfolioData;

  const getIcon = (type) => {
    switch (type) {
      case 'certification':
        return <Award size={24} />;
      case 'award':
        return <Trophy size={24} />;
      case 'education':
        return <BookOpen size={24} />;
      case 'contribution':
        return <Code size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'certification':
        return 'type-certification';
      case 'award':
        return 'type-award';
      case 'education':
        return 'type-education';
      case 'contribution':
        return 'type-contribution';
      default:
        return 'type-certification';
    }
  };

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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="achievements">
      <div className="section-container">
        <motion.div
          className="achievements-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Achievements & Recognition</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Milestones and accomplishments in my professional journey
            </p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="achievement-image">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    loading="lazy"
                  />
                  <div className="achievement-overlay">
                    <motion.div
                      className={`achievement-icon ${getTypeColor(achievement.type)}`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {getIcon(achievement.type)}
                    </motion.div>
                  </div>
                </div>

                <div className="achievement-content">
                  <div className="achievement-header">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                  
                  <p className="achievement-organization">{achievement.organization}</p>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  <div className="achievement-type">
                    <span className={`type-badge ${getTypeColor(achievement.type)}`}>
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;