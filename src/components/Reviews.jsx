import React from 'react'
import { motion } from 'framer-motion'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      name: "Adithya Mary",
      company: "TechCorp Solutions",
      role: "CTO",
      rating: 5,
      review: "Ryphira delivered an exceptional software solution that transformed our business operations. Their team's expertise and dedication are unmatched.",
      initials: "AM",
      color: "#FF6B6B"
    },
    {
      name: "Akansh S",
      company: "StartupHub",
      role: "Founder",
      rating: 5,
      review: "The programming education I received at Ryphira was world-class. It prepared me perfectly for launching my own tech startup.",
      initials: "AS",
      color: "#4ECDC4"
    },
    {
      name: "Nithin Paulson",
      company: "Digital Innovations",
      role: "Project Manager",
      rating: 5,
      review: "Working with Ryphira was a game-changer. They delivered on time, within budget, and exceeded all our expectations.",
      initials: "NP",
      color: "#45B7D1"
    },
    {
      name: "Sunil Kumar",
      company: "EduTech Platform",
      role: "CEO",
      rating: 5,
      review: "Ryphira's innovative approach to software development helped us scale our platform to serve millions of users globally.",
      initials: "SK",
      color: "#96CEB4"
    },
    {
      name: "Sarun K.S",
      company: "Career Changer",
      role: "Software Developer",
      rating: 4,
      review: "Thanks to Ryphira's comprehensive training program, I successfully transitioned from marketing to software development.",
      initials: "SK",
      color: "#FFEAA7"
    },
    {
      name: "Sajna Sherin",
      company: "FinTech Solutions",
      role: "Lead Developer",
      rating: 5,
      review: "The quality of code and architecture design from Ryphira is outstanding. They truly understand enterprise-level requirements.",
      initials: "SS",
      color: "#DDA0DD"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section id="reviews" className="reviews section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Client Reviews</h2>
          <p className="section-subtitle">
            What our clients and students say about their experience with Ryphira
          </p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="review-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="review-header">
                <div className="reviewer-avatar" style={{ backgroundColor: review.color }}>
                  <span className="avatar-initials">{review.initials}</span>
                </div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  {/* <div className="reviewer-role">{review.role}</div>
                  <div className="reviewer-company">{review.company}</div> */}
                </div>
              </div>
              
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              
              <div className="review-content">
                <div className="quote-icon">💬</div>
                <p>{review.review}</p>
              </div>
              
              <div className="review-footer">
                {/* <div className="verified-badge">
                  <span className="badge-icon">🛡️</span>
                  Verified Client
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="reviews-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-stats">
            <div className="summary-stat">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
              <div className="stat-stars">
                {renderStars(5)}
              </div>
            </div>
            
            <div className="summary-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            
            <div className="summary-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            
            <div className="summary-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Project Success</div>
            </div>
          </div>
          
          <div className="cta-section">
            <h3>Ready to Join Our Success Stories?</h3>
            <p>Experience the Ryphira difference and become our next success story.</p>
            <a href="#connect" className="btn btn-primary">Get Started Today</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
