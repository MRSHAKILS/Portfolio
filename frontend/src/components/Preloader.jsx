import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing...",
    "Loading Portfolio...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 700);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Animated Logo/Name */}
        <motion.div 
          className="preloader-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="preloader-title"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(0, 255, 255, 0.3)",
                "0 0 20px rgba(0, 255, 255, 0.5)",
                "0 0 10px rgba(0, 255, 255, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SHAKIL AHMED
          </motion.h1>
          <motion.p 
            className="preloader-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="preloader-progress-container"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "300px" }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="preloader-progress-bar">
            <motion.div 
              className="preloader-progress-fill"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              className="preloader-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingTexts[currentText]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating Particles */}
        <div className="preloader-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [null, -100],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;