import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const TextShimmer = ({ 
  children, 
  className = '',
  shimmerColor = '#ffffff',
  duration = 2
}) => {
  return (
    <motion.span
      className={cn('inline-block relative', className)}
      style={{
        background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default TextShimmer;
