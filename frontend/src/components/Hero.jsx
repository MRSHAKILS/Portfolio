import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mockData';
import InteractiveAvatar from './InteractiveAvatar';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const { hero } = portfolioData;
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="hero-name">{hero.name}</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {hero.title}
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                className="hero-btn primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <Mail className="btn-icon" />
              </Button>
              
              <Button 
                variant="outline" 
                className="hero-btn secondary"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
                <Download className="btn-icon" />
              </Button>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          >
            <InteractiveAvatar
              src={hero.avatar}
              alt={hero.name}
              className="avatar-container"
            />
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>

        {/* Background Elements */}
        <ParallaxSection className="hero-bg" offset={-50}>
          <motion.div 
            className="hero-grid"
            style={{ y: backgroundY }}
          />
          <motion.div
            className="hero-orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="hero-orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Interactive floating elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              animate={{
                y: [0, -30 - i * 5, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: `${10 + (i % 4) * 20}%`,
                left: `${5 + (i % 6) * 15}%`,
                width: `${4 + (i % 3)}px`,
                height: `${4 + (i % 3)}px`,
                background: i % 2 === 0 ? 'var(--color-accent-primary)' : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                filter: 'blur(1px)',
                zIndex: -1
              }}
            />
          ))}
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Hero;