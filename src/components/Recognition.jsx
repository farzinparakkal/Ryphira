import React from 'react'
import { motion } from 'framer-motion'
import './Recognition.css'

const Recognition = () => {
  const recognitions = [
    {
      title: "Best Emerging Tech Company",
      organization: "Tech Innovation Awards 2023",
      description: "Recognized for outstanding innovation in software development and education technology.",
      icon: "🏆"
    },
    {
      title: "Excellence in Education",
      organization: "Digital Learning Summit 2023",
      description: "Awarded for transformative programming education and student success rates.",
      icon: "🎓"
    },
    {
      title: "Client Satisfaction Award",
      organization: "Business Excellence Forum 2023",
      description: "Acknowledged for maintaining 100% client satisfaction and project delivery excellence.",
      icon: "⭐"
    },
    {
      title: "Innovation in Software Solutions",
      organization: "Software Development Awards 2022",
      description: "Honored for developing cutting-edge solutions that solve real-world challenges.",
      icon: "💡"
    },
    {
      title: "Top Training Institute",
      organization: "Education Excellence Awards 2022",
      description: "Recognized as a leading institute for professional programming education.",
      icon: "🎯"
    },
    {
      title: "Startup of the Year",
      organization: "Entrepreneurship Awards 2022",
      description: "Celebrated for rapid growth and impact in the technology sector.",
      icon: "🚀"
    }
  ]

  return (
    <section id="recognition" className="recognition section-padding bg-pattern">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Recognition & Awards</h2>
          <p className="section-subtitle">
            Our achievements and industry recognition for excellence in technology and education
          </p>
        </motion.div>

        <div className="recognition-grid">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              className="recognition-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="recognition-icon">
                {recognition.icon}
              </div>
              <div className="recognition-content">
                <h3>{recognition.title}</h3>
                {/* <div className="recognition-org">{recognition.organization}</div> */}
                <p>{recognition.description}</p>
              </div>
              <div className="recognition-shine"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="recognition-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-container">
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🏅</div>
              <div className="stat-number">15+</div>
              <div className="stat-text">Awards Won</div>
            </motion.div>
            
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🌟</div>
              <div className="stat-number">98%</div>
              <div className="stat-text">Success Rate</div>
            </motion.div>
            
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🎖️</div>
              <div className="stat-number">5</div>
              <div className="stat-text">Industry Certifications</div>
            </motion.div>
            
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🏆</div>
              <div className="stat-number">Top 10</div>
              <div className="stat-text">Tech Companies</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Recognition
