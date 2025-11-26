import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const openModal = (type) => {
    setModalType(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalType(null)
  }

  const content = {
    privacy: {
      title: 'Privacy Policy',
      lead: 'We respect your privacy and are committed to protecting your personal data.',
      bullets: [
        'We collect only the data necessary to provide and improve our services.',
        'Your information is never sold to third parties. Limited sharing occurs only with trusted processors under strict agreements.',
        'You can request access, correction, or deletion of your data at any time by contacting support.',
        'We use industry-standard encryption and access controls to safeguard your data.'
      ]
    },
    terms: {
      title: 'Terms of Service',
      lead: 'By using our products and services, you agree to the following terms.',
      bullets: [
        'Services are provided on a best-effort basis and may evolve over time.',
        'You agree not to misuse the services or infringe on intellectual property rights.',
        'Accounts must be secured by you; notify us immediately of any unauthorized use.',
        'Certain features may require separate agreements or fees.'
      ]
    },
    pricing: {
      title: 'Pricing',
      lead: 'Our pricing starts from 2,999/- INR to 9,999/- INR',
      bullets: []
    }
  }

  const refundSection = {
    title: 'Refund Policy',
    lead:
      'We generally do not provide refunds. If a refund is approved, the amount will be credited to you within 7–10 days.',
    bullets: [
      'Eligibility is assessed case-by-case for billing errors, duplicate charges, or verifiable service failure contrary to our SLA.',
      'Requests must be raised within 7 days of the transaction with proof of payment and a clear description of the issue.',
      'For courses or training, refunds are not issued after substantial content access or session attendance.',
      'For software services, partial refunds or service credits may be offered at our discretion.',
      'Refunds, if approved, are processed to the original payment method within 7–10 business days.'
    ]
  }

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
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('pricing') }}>Pricing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy') }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('terms') }}>Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </motion.div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="policy-title">
          <motion.div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="modal-header">
              <h3 id="policy-title">{content[modalType]?.title}</h3>
              <button className="modal-close" aria-label="Close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-lead">{content[modalType]?.lead}</p>
              <ul className="modal-list">
                {content[modalType]?.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="modal-divider" />
              <h4 className="section-title">{refundSection.title}</h4>
              <p className="modal-lead">{refundSection.lead}</p>
              <ul className="modal-list">
                {refundSection.bullets.map((b, i) => (
                  <li key={`r-${i}`}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="modal-actions">
              <button className="btn-primary" onClick={closeModal}>Got it</button>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  )
}

export default Footer
