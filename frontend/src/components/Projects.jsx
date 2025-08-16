import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mockData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const { projects } = portfolioData;

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-progress';
      default:
        return 'status-planned';
    }
  };

  return (
    <section className="projects">
      <div className="section-container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <motion.div className="projects-slider" variants={itemVariants}>
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              loop={true}
              className="projects-swiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="project-slide">
                  <motion.div
                    className="project-card interactive parallax-card holographic"
                    whileHover={{ 
                      y: -10,
                      rotateX: 5,
                      rotateY: 5,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                      <div className="project-overlay">
                        <div className="overlay-buttons">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overlay-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={20} />
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overlay-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div className="project-info">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className={`project-status ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-features">
                        <h4 className="features-title">Key Features:</h4>
                        <ul className="features-list">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="feature-item">
                              <ArrowRight size={14} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-actions">
                        <Button
                          variant="outline"
                          className="project-btn"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={16} />
                          Code
                        </Button>
                        <Button
                          className="project-btn"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;