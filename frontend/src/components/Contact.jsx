import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../data/mockData';

const Contact = () => {
  const { contact } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="contact">
      <div className="section-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line" />
            <p className="section-subtitle">
              Ready to work together? Let's discuss your next project
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-cards">
                <motion.div 
                  className="info-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>{contact.email}</p>
                    <a href={`mailto:${contact.email}`} className="info-link">
                      Send a message
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="info-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>{contact.location}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="info-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Availability</h3>
                    <p>{contact.availability}</p>
                  </div>
                </motion.div>
              </div>

              <div className="social-links">
                <h3>Connect with me</h3>
                <div className="social-buttons">
                  <motion.a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    GitHub
                  </motion.a>
                  
                  <motion.a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form" variants={itemVariants}>
              <motion.form 
                onSubmit={handleSubmit}
                className="form-container"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project discussion, job opportunity, etc."
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="loading-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;