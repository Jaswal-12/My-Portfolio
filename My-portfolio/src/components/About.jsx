import React from 'react'
import './About.css'

const About = () => (
  <section className="about-section" id="about">
    <div className="about-visual">
      <div className="ring-outer">
        <div className="ring-inner">👨‍💻</div>
      </div>
    </div>
    <div className="about-content">
      <p className="section-label">About me</p>
      <h2 className="section-title">Building the future,<br/>one commit at a time</h2>
      <p className="about-bio">
        I'm a passionate Full Stack Developer with deep expertise in the MERN stack
        and a growing focus on AI-powered applications. I turn complex problems into
        elegant, scalable solutions and stay at the cutting edge of Generative AI.
      </p>
      <div className="about-stats">
        <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Years Exp.</span></div>
        <div className="stat"><span className="stat-num">20+</span><span className="stat-label">Projects</span></div>
        <div className="stat"><span className="stat-num">8</span><span className="stat-label">Technologies</span></div>
      </div>
    </div>
  </section>
)

export default About