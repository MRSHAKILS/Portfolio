import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const FloatingDock = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'flex items-end gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg p-3 shadow-xl',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.6 }}
                className="absolute -top-12 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white"
              >
                {item.title}
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.a
            href={item.href}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700',
              hoveredIndex === idx && 'ring-2 ring-blue-500'
            )}
            whileHover={{ 
              scale: 1.2,
              y: -8,
              transition: { type: 'spring', stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
          </motion.a>
        </div>
      ))}
    </div>
  );
};
