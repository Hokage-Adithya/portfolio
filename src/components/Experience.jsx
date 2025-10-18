import { useEffect, useRef } from 'react'
import './Experience.css'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      company: 'Freelance Developer',
      position: 'Frontend Developer & Python Specialist',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Building innovative web applications and Python-based solutions for various clients and personal projects.',
      achievements: [
        'Developed intelligent voice assistant with speech recognition capabilities',
        'Created machine learning models for gender detection and spam classification',
        'Built responsive React applications with modern UI/UX design',
        'Implemented automation scripts to improve workflow efficiency'
      ],
      gradient: 'var(--gradient-1)'
    },
    {
      company: 'Personal Projects & Learning',
      position: 'Full Stack Development Student',
      period: '2022 - 2023',
      location: 'Self-Directed',
      description: 'Focused on learning frontend technologies and Python for AI/ML applications.',
      achievements: [
        'Mastered React, JavaScript, HTML5, and CSS3 fundamentals',
        'Explored machine learning concepts and natural language processing',
        'Built 8+ projects showcasing various technical skills',
        'Contributed to open-source projects and community learning'
      ],
      gradient: 'var(--gradient-2)'
    },
    {
      company: 'Technology Exploration',
      position: 'Aspiring Developer',
      period: '2021 - 2022',
      location: 'Self-Learning',
      description: 'Started journey into programming with Python and web development basics.',
      achievements: [
        'Learned Python programming and basic web development',
        'Created first automation scripts and simple web pages',
        'Explored various tech domains to find passion areas',
        'Built foundation in computer science fundamentals'
      ],
      gradient: 'var(--gradient-3)'
    }
  ]

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot" style={{ background: exp.gradient }}></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-icon" style={{ background: exp.gradient }}>
                    <FaBriefcase />
                  </div>
                  <div className="experience-title-section">
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                </div>

                <div className="experience-meta">
                  <span className="experience-period">
                    <FaCalendar /> {exp.period}
                  </span>
                  <span className="experience-location">{exp.location}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <span className="achievement-bullet" style={{ background: exp.gradient }}>
                        ✓
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
