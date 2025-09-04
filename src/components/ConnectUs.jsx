import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ConnectUs.css'

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['Second floor', 'new block,jawahar gardens', 'lakkidi,Ottapalam 679301','Palakkad','Kerala, India']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 85478 65694']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['ryphira.official@gmail.com']
    },
    {
      icon: '🌐',
      title: 'Website',
      details: ['www.ryphira.com', 'Follow us on social media']
    }
  ]

  return (
    <section id="connect" className="connect-us section-padding bg-pattern">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">
            Ready to start your journey with Ryphira? Get in touch with our team today
          </p>
        </motion.div>

        <div className="connect-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-header">
              <h3>Get In Touch</h3>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                {/* <a href="#" className="social-link linkedin">
                  <span>💼</span>
                  LinkedIn
                </a>
                <a href="#" className="social-link twitter">
                  <span>🐦</span>
                  Twitter
                </a>
                <a href="#" className="social-link facebook">
                  <span>📘</span>
                  Facebook
                </a> */}
                <a href="https://www.instagram.com/ryphira_pvt_ltd?igsh=bnN2eDZoamZ1aTM5&utm_source=qr" className="social-link instagram">
                  <span>📷</span>
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="software-development">Software Development</option>
                    <option value="programming-education">Programming Education</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📤</span>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ConnectUs
