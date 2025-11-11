import { useEffect, useRef } from 'react'
import './Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projectsRef = useRef(null)

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: 'Real-Time Voice Translator',
      description: 'Full-stack web app for bidirectional voice translation with 13+ languages. Features real-time audio streaming using WebRTC and WebSocket with <3s end-to-end latency. Integrated Google Cloud Speech-to-Text API with concurrent processing.',
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebRTC', 'WebSocket'],
      github: 'https://github.com/Hokage-Adithya/Real-time-translator',
      demo: '#',
      gradient: 'var(--gradient-1)'
    },
    {
      title: 'CollabDocs - Real-Time Collaboration Platform',
      description: 'Real-time collaborative document editor with live cursor tracking, handling 50+ concurrent users. Features JWT authentication, auto-save, version history, and user permissions. Built with WebSocket architecture and Redis for real-time presence.',
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket'],
      github: 'https://github.com/Hokage-Adithya/collabarative_documentation',
      demo: '#',
      gradient: 'var(--gradient-2)'
    },
    {
      title: 'Jarvis Voice Assistant',
      description: 'A Python-based virtual assistant similar to JARVIS, capable of voice commands, task automation, and intelligent responses. Features speech recognition and text-to-speech capabilities.',
      tags: ['Python', 'Voice Recognition', 'AI', 'Automation'],
      github: 'https://github.com/Hokage-Adithya/JarvisALike',
      demo: '#',
      gradient: 'var(--gradient-3)'
    },
    {
      title: 'Voice-Based Gender Detection',
      description: 'Machine learning model that detects gender from voice samples using audio processing and classification algorithms. Implements feature extraction and pattern recognition.',
      tags: ['Python', 'Machine Learning', 'Audio Processing', 'AI'],
      github: 'https://github.com/Hokage-Adithya/Gender_Recognition',
      demo: '#',
      gradient: 'var(--gradient-1)'
    },
    {
      title: 'Spam Mail Detection',
      description: 'Email classification system using machine learning to identify spam messages. Utilizes natural language processing and classification algorithms for accurate detection.',
      tags: ['Python', 'ML', 'NLP', 'Jupyter'],
      github: 'https://github.com/Hokage-Adithya/spam-mail-detection',
      demo: '#',
      gradient: 'var(--gradient-2)'
    },
    {
      title: 'UrTasks - React To-Do List',
      description: 'A modern, responsive task management application built with React. Features include task creation, completion tracking, filtering, and local storage persistence.',
      tags: ['React', 'JavaScript', 'CSS', 'Frontend'],
      github: 'https://github.com/Hokage-Adithya/UrTasks',
      demo: '#',
      gradient: 'var(--gradient-3)'
    }
  ]

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Showcasing full-stack applications with real-time features, machine learning models, and cloud-deployed solutions
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <FaGithub />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
