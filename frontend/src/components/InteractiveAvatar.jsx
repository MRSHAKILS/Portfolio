import React from 'react';
import { motion } from 'framer-motion';
import { useEyeTracking } from '../hooks/useEyeTracking';

const InteractiveAvatar = ({ src, alt, className }) => {
  const { eyePosition, avatarRef } = useEyeTracking();

  return (
    <div className="interactive-avatar-container" ref={avatarRef}>
      <motion.div
        className="avatar-glow"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`avatar-wrapper ${className}`}
        whileHover={{ 
          rotateY: 10,
          scale: 1.05
        }}
        animate={{
          rotateX: eyePosition.y * 0.1,
          rotateY: eyePosition.x * 0.1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={src}
          alt={alt}
          className="avatar-image"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80";
          }}
        />
        
        {/* Eye tracking overlay */}
        <div className="eye-overlay">
          <motion.div
            className="eye left-eye"
            animate={{
              x: eyePosition.x * 0.5,
              y: eyePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className="eye right-eye"
            animate={{
              x: eyePosition.x * 0.5,
              y: eyePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>
      </motion.div>
      
      <div className="avatar-ring" />
      
      {/* Floating particles around avatar */}
      <div className="avatar-particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${20 + i * 10}%`,
              left: `${10 + (i % 4) * 20}%`,
              width: '4px',
              height: '4px',
              background: 'var(--color-accent-primary)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveAvatar;