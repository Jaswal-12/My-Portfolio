import React from 'react'
import './Skills.css'

const stack = [
  {
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 90,
    tag: 'Frontend'
  },
  {
    name: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 85,
    tag: 'Framework'
  },
  {
    name: 'Node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 88,
    tag: 'Backend'
  },
  {
    name: 'Express.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    level: 85,
    tag: 'Backend'
  },
  {
    name: 'MongoDB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    level: 80,
    tag: 'Database'
  },
  {
    name: 'OpenAI',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    level: 82,
    tag: 'AI'
  },
  {
    name: 'Generative AI',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 78,
    tag: 'AI'
  },
  {
    name: 'Prompt Eng.',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    level: 92,
    tag: 'AI'
  },
]

const Skills = () => (
  <section className="skills-section" id="skills">
    <p className="section-label">What I bring</p>
    <h2 className="section-title">Skills & Stack</h2>
    <div className="skills-grid">
      {stack.map(({ name, img, level, tag }) => (
        <div className="skill-card" key={name}>
          <div className="skill-card-top">
            <div className="skill-logo-wrap">
              <img src={img} alt={name} className="skill-logo" />
            </div>
            <span className="skill-tag">{tag}</span>
          </div>
          <div className="skill-name">{name}</div>
          <div className="skill-meta">
            <span className="skill-percent">{level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ '--level': `${level}%` }} />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills;