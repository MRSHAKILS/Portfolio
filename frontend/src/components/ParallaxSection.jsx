import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, className, offset = 50 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div 
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;