import React from 'react'
import { motion } from 'framer-motion'
import './Affiliates.css'

const Affiliates = () => {
  const affiliations = [
    {
      id: 1,
      image: "moca.jpeg"
    },
    {
      id: 2,
      image: "msme.jpeg"
    },
    // {
    //   id: 3,
    //   image: "start.png"
    // }
  ]

  return (
    <section id="affiliates" className="affiliates section-padding bg-pattern">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Affiliations</h2>
          <p className="section-subtitle">
            Proud to be associated with leading organizations and institutions that share our vision
          </p>
        </motion.div>

        <div className="affiliations-grid">
          {affiliations.map((affiliation, index) => (
            <motion.div
              key={affiliation.id}
              className="affiliation-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="affiliation-image">
                <img 
                  src={affiliation.image} 
                  alt={`Affiliation ${affiliation.id}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="affiliations-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Interested in Partnership?</h3>
          <p>Join our network of trusted partners and affiliates</p>
          <a href="#connect" className="btn btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Affiliates
