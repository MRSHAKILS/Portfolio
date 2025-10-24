import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Cloud, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with React, HTML, CSS, and modern JavaScript frameworks.",
      features: ["React Applications", "Responsive Design", "Modern CSS", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development", 
      description: "Building robust server-side applications with Python, Java, and database management systems.",
      features: ["API Development", "Database Design", "Server Architecture", "Security Implementation"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Full Stack Solutions",
      description: "End-to-end application development from concept to deployment with modern technologies.",
      features: ["Complete Web Apps", "System Integration", "DevOps & Deployment", "Maintenance & Support"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
      features: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines", "Monitoring & Scaling"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences with modern design principles.",
      features: ["User Experience", "Interface Design", "Prototyping", "Design Systems"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and scalability across all platforms.",
      features: ["Code Optimization", "Load Time Reduction", "Database Tuning", "Caching Strategies"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="services">
      <div className="section-container">
        <motion.div
          className="services-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">What I Do</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Comprehensive development services to bring your ideas to life
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card interactive magnetic"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`service-icon bg-gradient-to-br ${service.gradient}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="service-feature"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="feature-bullet" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;