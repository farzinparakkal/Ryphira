import React from 'react'
import { motion } from 'framer-motion'
import './BoardMembers.css'

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Vishnu Hari",
      role: "Founder & Chairman",
      image: "vishnuhari.jpeg",
      description: "Visionary leader driving innovation and strategic growth at Ryphira."
    },
    {
      name: "Sreenandhan P.P",
      role: "Founder & Vice Chairman",
      image: "Nandhu.jpeg", 
      description: "Supporting strategic initiatives and corporate governance."
    },
    {
      name: "Saharsh Krishna C",
      role: "Founder & CEO",
      image: "saharsh.jpeg", 
      description: "Leading operational excellence and business development initiatives."
    },
    {
      name: "Shishira M.C",
      role: "Founder & COO",
      image: "shishira.jpeg", 
      description: "Overseeing daily operations and ensuring organizational efficiency."
    },
    {
      name: "Bharath Chandran",
      role: "Founder & CFO",
      image: "Bharath.jpeg", 
      description: "Managing financial strategy and ensuring fiscal responsibility."
    }
  ]

  return (
    <section id="board-members" className="board-members section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Board Members</h2>
          <p className="section-subtitle">
            Meet the visionary leaders driving Ryphira's mission forward
          </p>
        </motion.div>

        <div className="board-grid">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              className="board-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              <div className="member-image-container">
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder">
                    <div className="placeholder-icon">👤</div>
                    <div className="placeholder-text">Photo</div>
                  </div>
                </div>
                <div className="member-overlay">
                  <div className="overlay-content">
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
              </div>
              
              <div className="member-social">
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span>💼</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Email">
                    <span>✉️</span>
                  </a>
                  {/* <a href="#" className="social-link" aria-label="Twitter">
                    <span>🐦</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="board-note"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="note-content">
            <div className="note-icon">💡</div>
            <p>
              Our board brings together decades of experience in technology, education, and business leadership. 
              Together, we guide Ryphira towards achieving excellence in software innovation and educational transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BoardMembers
