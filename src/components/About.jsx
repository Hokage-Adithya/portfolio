import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img src="/profile.png" alt="Adithya Sharma" />
              </div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">
              I'm a <span className="highlight">Frontend Developer</span> with Python expertise
            </h3>
            
            <p className="about-description">
              I'm passionate about building engaging user interfaces and developing intelligent 
              Python applications. With a strong foundation in frontend technologies and Python 
              programming, I create interactive web experiences and innovative automation solutions.
            </p>

            <p className="about-description">
              My journey in tech combines the visual appeal of frontend development with the 
              power of Python for backend logic, AI/ML projects, and automation. I love exploring 
              new technologies like voice recognition, machine learning, and building projects 
              that solve real-world problems.
            </p>

            <p className="about-description">
              When I'm not coding, you'll find me working on AI projects, exploring new Python 
              libraries, or contributing to open-source projects that make a difference.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">8+</span>
                <span className="highlight-label">GitHub Repositories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
