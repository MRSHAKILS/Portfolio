import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "Tech Innovations Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Shakil delivered an exceptional full-stack application that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      project: "E-commerce Platform"
    },
    {
      id: 2, 
      name: "Michael Chen",
      position: "CTO", 
      company: "Digital Solutions Ltd",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Working with Shakil was a game-changer for our startup. He transformed our ideas into a beautiful, functional application with incredible performance.",
      project: "SaaS Dashboard"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Creative Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Shakil's development skills are top-notch. He delivered our project on time and the user experience is phenomenal. Highly recommended!",
      project: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80",
      rating: 5,
      text: "Exceptional work quality and communication. Shakil understood our vision perfectly and brought it to life with cutting-edge technology.",
      project: "MVP Development"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="testimonials">
      <div className="section-container">
        <motion.div
          className="testimonials-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Client Testimonials</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="testimonials-container">
            <motion.button
              className="testimonial-nav prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="testimonials-slider">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="testimonial-card"
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="testimonial-quote">
                    <Quote className="quote-icon" size={40} />
                  </div>
                  
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star size={20} fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.p 
                      className="testimonial-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                    
                    <div className="testimonial-author">
                      <motion.img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="author-avatar"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                        <p className="author-position">
                          {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                        </p>
                        <span className="author-project">
                          Project: {testimonials[currentIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="testimonial-nav next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="testimonials-indicators">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;