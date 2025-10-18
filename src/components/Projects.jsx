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
      title: 'Jarvis Voice Assistant',
      description: 'A Python-based virtual assistant similar to JARVIS, capable of voice commands, task automation, and intelligent responses. Features speech recognition and text-to-speech capabilities.',
      tags: ['Python', 'Voice Recognition', 'AI', 'Automation'],
      github: 'https://github.com/Hokage-Adithya/JarvisALike',
      demo: '#',
      gradient: 'var(--gradient-1)'
    },
    {
      title: 'Voice-Based Gender Detection',
      description: 'Machine learning model that detects gender from voice samples using audio processing and classification algorithms. Implements feature extraction and pattern recognition.',
      tags: ['Python', 'Machine Learning', 'Audio Processing', 'AI'],
      github: 'https://github.com/Hokage-Adithya/Gender_Recognition',
      demo: '#',
      gradient: 'var(--gradient-2)'
    },
    {
      title: 'Spam Mail Detection',
      description: 'Email classification system using machine learning to identify spam messages. Utilizes natural language processing and classification algorithms for accurate detection.',
      tags: ['Python', 'ML', 'NLP', 'Jupyter'],
      github: 'https://github.com/Hokage-Adithya/spam-mail-detection',
      demo: '#',
      gradient: 'var(--gradient-3)'
    },
    {
      title: 'UrTasks - React To-Do List',
      description: 'A modern, responsive task management application built with React. Features include task creation, completion tracking, filtering, and local storage persistence.',
      tags: ['React', 'JavaScript', 'CSS', 'Frontend'],
      github: 'https://github.com/Hokage-Adithya/UrTasks',
      demo: '#',
      gradient: 'var(--gradient-1)'
    },
    {
      title: 'Netflix Clone',
      description: 'A pixel-perfect Netflix UI clone showcasing frontend development skills. Features responsive design, smooth animations, and modern CSS techniques.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: 'https://github.com/Hokage-Adithya/Netflix_clone-assets',
      demo: '#',
      gradient: 'var(--gradient-2)'
    },
    {
      title: 'More Projects',
      description: 'Check out my GitHub profile for additional projects including automation scripts, web applications, and experimental AI projects.',
      tags: ['Python', 'React', 'AI', 'Web Dev'],
      github: 'https://github.com/Hokage-Adithya?tab=repositories',
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
            A showcase of my recent projects in Python, Machine Learning, and Frontend Development
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
