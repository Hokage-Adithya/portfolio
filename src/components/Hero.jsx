import { useEffect, useState } from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Hokage-Adithya', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/adithya-sharma-8bb11b26a/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:adithyasharma2005@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Adithya Sharma</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <span className="typing-text">Full Stack Developer & ML Engineer</span>
          </h2>
          
          <p className="hero-description">
            I build scalable web applications and intelligent AI solutions using modern technologies.
            From React frontends to FastAPI backends, cloud infrastructure to machine learning models.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <a 
              href="/resume.pdf"
              download="Adithya_Sharma_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
