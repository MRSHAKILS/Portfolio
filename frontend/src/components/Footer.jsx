import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <motion.h3 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
              >
                Shakil Ahmed
              </motion.h3>
              <p className="footer-tagline">
                Building digital experiences with passion and precision
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#about" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                    }}>About</a>
                  </li>
                  <li>
                    <a href="#experience" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
                    }}>Experience</a>
                  </li>
                  <li>
                    <a href="#projects" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }}>Projects</a>
                  </li>
                  <li>
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}>Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Full Stack Solutions</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <motion.a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  
                  <motion.a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${contact.email}`}
                    className="social-link"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider" />
            <div className="footer-copyright">
              <p>
                © {currentYear} Shakil Ahmed. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} fill="currentColor" />
                </motion.span>{' '}
                and cutting-edge technology.
              </p>
              <p className="footer-note">
                Available for freelance opportunities and full-time positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;