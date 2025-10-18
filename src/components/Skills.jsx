import { useEffect, useRef } from 'react'
import './Skills.css'
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaDocker, FaAws, FaDatabase 
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, 
  SiTailwindcss, SiNextdotjs, SiExpress, SiGraphql 
} from 'react-icons/si'

const Skills = () => {
  const skillsRef = useRef(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'var(--gradient-1)',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 88 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 80 },
      ]
    },
    {
      title: 'Python & ML',
      gradient: 'var(--gradient-2)',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 92 },
        { name: 'Machine Learning', icon: <FaDatabase />, level: 78 },
        { name: 'Data Analysis', icon: <FaDatabase />, level: 75 },
        { name: 'Voice Recognition', icon: <FaPython />, level: 82 },
        { name: 'AI Projects', icon: <FaPython />, level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      gradient: 'var(--gradient-3)',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <FaGitAlt />, level: 88 },
        { name: 'VS Code', icon: <FaDatabase />, level: 90 },
        { name: 'Jupyter', icon: <FaDatabase />, level: 82 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            I'm constantly learning and evolving my skillset to stay current with 
            the latest technologies and best practices.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <h3 className="category-title" style={{ background: category.gradient }}>
                  {category.title}
                </h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          background: category.gradient 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
