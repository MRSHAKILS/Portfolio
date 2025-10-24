import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const TargetCursor = ({ children, className = '' }) => {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Check if hovering over clickable element
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.className.includes('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {children}
      <motion.div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference ${className}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isPointer ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            scale: isPointer ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Crosshair lines */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-white -translate-y-1/2"
          animate={{
            opacity: isPointer ? 0.3 : 0.6,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white -translate-x-1/2"
          animate={{
            opacity: isPointer ? 0.3 : 0.6,
          }}
        />
      </motion.div>
    </>
  );
};

export default TargetCursor;
