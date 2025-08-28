import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Coffee, Code2, Users, Award, Clock, Zap } from 'lucide-react';

const FunFacts = () => {
  const facts = [
    {
      icon: <Code2 size={40} />,
      number: 50000,
      suffix: "+",
      label: "Lines of Code Written",
      description: "Crafted with passion and precision",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Coffee size={40} />,
      number: 1250,
      suffix: "+",
      label: "Cups of Coffee",
      description: "Fuel for late-night coding sessions",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Users size={40} />,
      number: 25,
      suffix: "+",
      label: "Happy Clients",
      description: "Successful projects delivered",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award size={40} />,
      number: 15,
      suffix: "+",
      label: "Technologies Mastered",
      description: "Always learning and growing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock size={40} />,
      number: 8760,
      suffix: "+",
      label: "Hours Coding",
      description: "Dedicated to perfecting the craft",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Zap size={40} />,
      number: 99.9,
      suffix: "%",
      label: "Uptime Achieved",
      description: "Reliable and robust applications",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const startCount = 0;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
      >
        {count}
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="fun-facts">
      <div className="section-container">
        <motion.div
          className="fun-facts-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Fun Facts & Numbers</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Some interesting statistics about my development journey
            </p>
          </motion.div>

          <div className="facts-grid">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                className="fact-card interactive magnetic"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`fact-icon bg-gradient-to-br ${fact.color}`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {fact.icon}
                </motion.div>
                
                <div className="fact-content">
                  <motion.div 
                    className="fact-number"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CountUp end={fact.number} />
                    <span className="fact-suffix">{fact.suffix}</span>
                  </motion.div>
                  
                  <h3 className="fact-label">{fact.label}</h3>
                  <p className="fact-description">{fact.description}</p>
                </div>

                {/* Animated background particles */}
                <div className="fact-particles">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="fact-particle"
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      style={{
                        position: 'absolute',
                        top: `${20 + i * 15}%`,
                        right: `${10 + i * 10}%`,
                        width: '4px',
                        height: '4px',
                        background: 'var(--color-accent-primary)',
                        borderRadius: '50%',
                        filter: 'blur(1px)'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFacts;