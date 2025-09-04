import React from 'react'
import { motion } from 'framer-motion'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="about" className="about-us section-padding bg-pattern">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Ryphira</h2>
          <p className="section-subtitle">
            Pioneering the future of technology through innovation and education
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                Ryphira Pvt. Ltd. is a dynamic technology company dedicated to creating innovative software solutions 
                while empowering individuals through world-class programming education. We stand at the intersection 
                of cutting-edge technology and transformative learning experiences.
              </p>
              
              <h3>What We Do</h3>
              <p>
                We specialize in developing scalable software solutions that address real-world challenges across 
                various industries. Simultaneously, we provide comprehensive programming education that transforms 
                learners into industry-ready professionals and entrepreneurs.
              </p>
              
              <h3>Our Commitment</h3>
              <p>
                We are committed to fostering a culture of continuous learning, creativity, and excellence. 
                Our goal is to bridge the gap between technology and people, making digital transformation 
                accessible, impactful, and sustainable for businesses and individuals alike.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">50+</div>
                <div className="about-stat-label">Projects Delivered</div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">500+</div>
                <div className="about-stat-label">Students Trained</div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">4+</div>
                <div className="about-stat-label">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">100%</div>
                <div className="about-stat-label">Client Satisfaction</div>
              </motion.div>
            </div>

            <div className="about-features">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Innovation Focus</h4>
                  <p>Cutting-edge solutions for modern challenges</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Client Partnership</h4>
                  <p>Building long-term relationships through trust</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Agile Delivery</h4>
                  <p>Fast, efficient, and quality-driven development</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
