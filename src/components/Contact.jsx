import { useState, useEffect, useRef } from 'react'
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // EmailJS configuration
    const serviceId = 'service_dbu3aev'
    const templateId = 'template_szq0sbf'
    const publicKey = 'BgyqlgZ_bZHY03KVs'

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'adithyasharma2005@gmail.com'
    }

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setSubmitStatus({
          type: 'success',
          message: '✅ Message sent successfully! I\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error('FAILED...', error)
        setSubmitStatus({
          type: 'error',
          message: '❌ Failed to send message. Please email me directly at adithyasharma2005@gmail.com'
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'adithyasharma2005@gmail.com',
      link: 'mailto:adithyasharma2005@gmail.com',
      gradient: 'var(--gradient-1)'
    },
    {
      icon: <FaEnvelope />,
      title: 'Alternative Email',
      value: 'adithyahokage0306@gmail.com',
      link: 'mailto:adithyahokage0306@gmail.com',
      gradient: 'var(--gradient-2)'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'India',
      link: '#',
      gradient: 'var(--gradient-3)'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: '@Hokage-Adithya',
      link: 'https://github.com/Hokage-Adithya',
      gradient: 'var(--gradient-1)'
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Hokage-Adithya', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/adithya-sharma-8bb11b26a/', label: 'LinkedIn' }
  ]

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-info-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-icon" style={{ background: info.gradient }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.title}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              <h4 className="socials-title">Follow Me</h4>
              <div className="socials-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaEnvelope />
            </button>
          </form>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Adithya Sharma. All rights reserved.</p>
          <p>Built with ❤️ using React & Vite</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
