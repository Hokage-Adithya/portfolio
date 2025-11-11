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
              I'm a <span className="highlight">Full Stack Developer</span> & ML Engineer
            </h3>
            
            <p className="about-description">
              I'm passionate about building end-to-end applications from responsive React frontends to 
              robust FastAPI backends. With expertise in cloud infrastructure (AWS), real-time technologies 
              (WebSocket, WebRTC), and machine learning, I create scalable, intelligent solutions.
            </p>

            <p className="about-description">
              My tech stack spans frontend frameworks (React, TypeScript), backend development 
              (FastAPI, Flask, Node.js), databases (PostgreSQL, Redis), cloud platforms (AWS, Docker), 
              and ML frameworks (TensorFlow, scikit-learn). I build production-ready applications 
              with proper DevOps practices using Docker, GitHub Actions, and Terraform.
            </p>

            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, optimizing system 
              architectures, or contributing to open-source projects that make a difference.
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
