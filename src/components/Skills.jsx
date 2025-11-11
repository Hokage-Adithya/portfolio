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
      title: 'Frontend Development',
      gradient: 'var(--gradient-1)',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 92 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      gradient: 'var(--gradient-2)',
      skills: [
        { name: 'FastAPI', icon: <FaPython />, level: 88 },
        { name: 'Flask', icon: <FaPython />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 82 },
        { name: 'REST APIs', icon: <FaDatabase />, level: 90 },
        { name: 'WebSocket', icon: <FaDatabase />, level: 85 },
        { name: 'JWT Auth', icon: <FaDatabase />, level: 88 },
      ]
    },
    {
      title: 'Programming Languages',
      gradient: 'var(--gradient-3)',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 92 },
        { name: 'Java', icon: <FaDatabase />, level: 75 },
        { name: 'C', icon: <FaDatabase />, level: 70 },
        { name: 'Golang', icon: <FaDatabase />, level: 72 },
      ]
    },
    {
      title: 'Databases & Cloud',
      gradient: 'var(--gradient-1)',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
        { name: 'MySQL', icon: <SiMongodb />, level: 85 },
        { name: 'Redis', icon: <SiRedis />, level: 82 },
        { name: 'AWS', icon: <FaAws />, level: 80 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
      ]
    },
    {
      title: 'Machine Learning & AI',
      gradient: 'var(--gradient-2)',
      skills: [
        { name: 'TensorFlow', icon: <FaPython />, level: 82 },
        { name: 'scikit-learn', icon: <FaPython />, level: 85 },
        { name: 'NLP', icon: <FaPython />, level: 80 },
        { name: 'Deep Learning', icon: <FaPython />, level: 78 },
        { name: 'pandas/numpy', icon: <FaPython />, level: 90 },
      ]
    },
    {
      title: 'DevOps & Tools',
      gradient: 'var(--gradient-3)',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 92 },
        { name: 'GitHub Actions', icon: <FaGitAlt />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Nginx', icon: <FaDatabase />, level: 75 },
        { name: 'Linux/Unix', icon: <FaDatabase />, level: 80 },
        { name: 'Terraform', icon: <FaAws />, level: 70 },
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
