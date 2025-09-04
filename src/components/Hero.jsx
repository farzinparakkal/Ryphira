import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroSection = document.querySelector('.hero')
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove)
      return () => heroSection.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="hero">
      {/* Cursor Ring */}
      <div
        className="cursor-ring"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />
      
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              y: [0, 20, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to <span className="gradient-text">Ryphira</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Innovative Software Solutions & World-Class Programming Education
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Empowering businesses with smart digital solutions and shaping individuals into creators of the future. 
              We bridge the gap between technology and people, making digital transformation accessible, impactful, and sustainable.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#connect" className="btn btn-secondary">Get In Touch</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon">💻</div>
                </div>
                <h3>Software Development</h3>
                <p>Cutting-edge solutions</p>
              </div>
            </div>
            
            <div className="hero-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon">🎓</div>
                </div>
                <h3>Tech Education</h3>
                <p>World-class training</p>
              </div>
            </div>
            
            <div className="hero-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon">🚀</div>
                </div>
                <h3>Innovation</h3>
                <p>Future-ready solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
