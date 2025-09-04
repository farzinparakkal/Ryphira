import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Vision & Mission', href: '#vision-mission' },
      { name: 'Board Members', href: '#board-members' },
      { name: 'Our Team', href: '#staff' }
    ],
    services: [
      { name: 'Software Development', href: '#' },
      { name: 'Programming Education', href: '#' },
      { name: 'Consultation', href: '#' },
      { name: 'Training Programs', href: '#' }
    ],
    resources: [
      { name: 'Recognition', href: '#recognition' },
      { name: 'Client Reviews', href: '#reviews' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' }
    ],
    contact: [
      { name: 'Contact Us', href: '#connect' },
      { name: 'Support', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Partnership', href: '#' }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-logo">
                <h3>Ryphira</h3>
                <span>Pvt. Ltd.</span>
              </div>
              <p className="brand-description">
                Empowering businesses with innovative software solutions and shaping individuals 
                into creators of the future through world-class programming education.
              </p>
              {/* <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span>📺</span>
                </a>
              </div> */}
            </motion.div>

            <motion.div 
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h4>Services</h4>
                <ul>
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h4>Resources</h4>
                <ul>
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h4>Contact</h4>
                <ul>
                  {footerLinks.contact.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="footer-newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest updates and insights.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <span>📧</span>
                </button>
              </div>
              {/* <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Tech Street, Innovation District</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@ryphira.com</span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <motion.div 
              className="copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>&copy; {currentYear} Ryphira Pvt. Ltd. All rights reserved.</p>
            </motion.div>
            
            <motion.div 
              className="footer-bottom-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
