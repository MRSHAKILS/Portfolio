import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const AnimatedGradientText = ({ 
  children, 
  className,
  colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe']
}) => {
  return (
    <motion.span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};
