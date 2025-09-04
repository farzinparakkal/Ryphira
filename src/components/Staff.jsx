import React from 'react'
import { motion } from 'framer-motion'
import './Staff.css'

const Staff = () => {
  const staffByRole = {
    "Management": [
      {
        name: "Jishnu A.P",
        role: "Manager",
        department: "Operations",
        image: "jishnu.jpeg",
        skills: ["Team Leadership", "Project Management", "Strategic Planning"]
      },
      {
        name: "Mohammed Farsin",
        role: "Manager",
        department: "Development",
        image: "farsin.jpeg",
        skills: ["Technical Leadership", "Code Review", "Architecture Design"]
      }
    ],
    "Senior Developers": [
      {
        name: "Vaideesh S",
        role: "Senior Developer",
        department: "Frontend",
        image: "vaideesh.jpeg",
        skills: ["Python", "TypeScript", "AI & ML"]
      },
      {
        name: "Muhammad Shafad",
        role: "Senior Developer",
        department: "Full Stack",
        image: "shafad.jpg",
        skills: ["MERN Stack", "DevOps", "Cloud Services"]
      },
      {
        name: "Sooraj K",
        role: "Senior Developer",
        department: "Backend",
        image: "sooraj.jpeg",
        skills: ["Node.js", "React", "Database Design"]
      },
      {
        name: "Vishnu K.P",
        role: "Senior Developer",
        department: "Full Stack",
        image: "vishnu.jpeg",
        skills: ["Python", "DevOps", "Cloud Services"]
      }
    ],
    "Junior Developers": [
      {
        name: "Nakhul Krishna",
        role: "Junior Developer",
        department: "Frontend",
        image: "nakhul.jpeg",
        skills: ["HTML/CSS", "JavaScript", "React Basics"]
      },
      {
        name: "Reeshma P",
        role: "Junior Developer",
        department: "Backend",
        image: "reeshma.jpeg",
        skills: ["Python", "API Development", "Testing"]
      },
      {
        name: "Anjali Krishna",
        role: "Junior Developer",
        department: "Mobile",
        image: "anjali.jpg",
        skills: ["React Native", "Flutter", "Mobile UI"]
      },
      {
        name: "Jithya K",
        role: "Junior Developer",
        department: "QA",
        image: "jithya.jpeg",
        skills: ["Testing", "Automation", "Quality Assurance"]
      }
    ]
  }

  const getRoleColor = (role) => {
    switch (role) {
      case 'Manager':
        return 'manager'
      case 'Senior Developer':
        return 'senior'
      case 'Junior Developer':
        return 'junior'
      default:
        return 'default'
    }
  }

  return (
    <section id="staff" className="staff section-padding bg-pattern">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the talented professionals who bring our vision to life
          </p>
        </motion.div>

        {Object.entries(staffByRole).map(([category, members], categoryIndex) => (
          <motion.div
            key={category}
            className="staff-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="staff-grid">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  className={`staff-card ${getRoleColor(member.role)}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="staff-image-container">
                    <div className="staff-image">
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
                    <div className="role-badge">
                      {member.role}
                    </div>
                  </div>
                  
                  <div className="staff-info">
                    <h4 className="staff-name">{member.name}</h4>
                    <div className="staff-department">{member.department}</div>
                    
                    <div className="staff-skills">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div 
          className="team-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="stats-row">
            <div className="team-stat">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-number">2</div>
                <div className="stat-label">Managers</div>
              </div>
            </div>
            
            <div className="team-stat">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <div className="stat-number">3</div>
                <div className="stat-label">Senior Developers</div>
              </div>
            </div>
            
            <div className="team-stat">
              <div className="stat-icon">🚀</div>
              <div className="stat-info">
                <div className="stat-number">4</div>
                <div className="stat-label">Junior Developers</div>
              </div>
            </div>
            
            <div className="team-stat">
              <div className="stat-icon">💼</div>
              <div className="stat-info">
                <div className="stat-number">10</div>
                <div className="stat-label">Total Team Members</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Staff
