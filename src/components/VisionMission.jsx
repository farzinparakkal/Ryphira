import React from 'react'
import { motion } from 'framer-motion'
import './VisionMission.css'

const VisionMission = () => {
  return (
    <section id="vision-mission" className="vision-mission section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">
            Our guiding principles and commitment to excellence
          </p>
        </motion.div>

        {/* Message from Founder & Chairman */}
        <motion.div 
          className="founder-message mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="message-card">
            <div className="message-header">
              <h3>Message from the Founder & Chairman</h3>
            </div>
            <div className="message-content">
              <p>
                At Ryphira Pvt. Ltd., we are driven by a vision to create innovative software solutions while empowering individuals through world-class programming education. Technology today is not just about coding — it is about transforming ideas into impactful realities. Our mission is to nurture talent, inspire creativity, and prepare future leaders for the digital era. Together, let us learn, innovate, and build a brighter tomorrow.
              </p>
              <div className="signature">
                <div className="signature-name">Vishnu Hari</div>
                <div className="signature-title">Founder & Chairman</div>
                <div className="signature-company">Ryphira Pvt. Ltd</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="vision-mission-grid">
          <motion.div 
            className="vision-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>
              To be a global leader in software innovation and tech education, empowering businesses with smart digital solutions and shaping individuals into creators of the future. We envision a world where technology and talent grow together, driving progress, possibilities, and positive change.
            </p>
          </motion.div>

          <motion.div 
            className="mission-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">🚀</div>
            <h3>Our Mission</h3>
            <ul>
              <li>To deliver cutting-edge software solutions that solve real-world challenges with innovation, scalability, and reliability.</li>
              <li>To provide world-class programming education that transforms learners into industry-ready professionals and entrepreneurs.</li>
              <li>To foster a culture of continuous learning, creativity, and excellence that inspires both our clients and students.</li>
              <li>To bridge the gap between technology and people, making digital transformation accessible, impactful, and sustainable.</li>
            </ul>
          </motion.div>
        </div>

        {/* Message from Founder & CEO */}
        <motion.div 
          className="founder-message ceo-message"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="message-card">
            <div className="message-header">
              <h3>Message from the Founder & CEO</h3>
            </div>
            <div className="message-content">
              <div className="quote-mark">"</div>
              <p>
                At Ryphira pvt ltd, we believe every individual has the potential to become future-ready. Our mission is to bridge the gap between learning and real-world application by equipping students and professionals with the skills that matter most in today's digital age. Through innovation, mentorship, and technology, we are committed to empowering individuals to grow, succeed, and shape tomorrow's world.
              </p>
              <div className="signature">
                <div className="signature-name">Saharsh Krishna C</div>
                <div className="signature-title">Founder & CEO</div>
                <div className="signature-company">Ryphira Pvt. Ltd</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission
