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
      position: 'Full Stack Developer & ML Engineer',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Building production-grade full-stack applications with modern technologies and deploying to cloud infrastructure.',
      achievements: [
        'Built real-time voice translator with WebRTC, handling 13+ languages with <3s latency',
        'Developed collaborative document platform supporting 50+ concurrent users via WebSocket',
        'Architected microservices with FastAPI, PostgreSQL, Redis, and Docker containerization',
        'Implemented CI/CD pipelines using GitHub Actions and Infrastructure as Code with Terraform'
      ],
      gradient: 'var(--gradient-1)'
    },
    {
      company: 'Personal Projects & Learning',
      position: 'Full Stack Development',
      period: '2022 - 2023',
      location: 'Self-Directed',
      description: 'Mastered full-stack development from React frontends to FastAPI backends with cloud deployment.',
      achievements: [
        'Built end-to-end applications using React, TypeScript, FastAPI, and PostgreSQL',
        'Implemented real-time features using WebSocket and WebRTC technologies',
        'Deployed applications on AWS with Docker, ECS, RDS, and CloudFront',
        'Created machine learning models with TensorFlow and scikit-learn'
      ],
      gradient: 'var(--gradient-2)'
    },
    {
      company: 'Technology Exploration',
      position: 'Software Development Journey',
      period: '2021 - 2022',
      location: 'Self-Learning',
      description: 'Started journey with Python and web development, building foundation in programming.',
      achievements: [
        'Learned Python programming and web development fundamentals',
        'Built voice assistant and ML projects (gender detection, spam classification)',
        'Explored frontend frameworks and backend development',
        'Developed strong foundation in computer science and software engineering'
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
