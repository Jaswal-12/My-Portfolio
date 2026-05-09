import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Resume from './components/Resume'
import Email from './components/Email'
import './components/Navbar.css'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-tag">Available for freelance</div>
            <h1>Full Stack<br /><span className="highlight">Developer</span><br />& AI Specialist</h1>
            <p className="hero-sub">Building scalable web apps with React, Next.js, Node.js, and integrating cutting-edge Generative AI solutions.</p>
            <div className="hero-btns">
              <a href="#resume" className="btn-primary">View Resume ↗</a>
              <a href="#contact" className="btn-ghost">Get in Touch</a>
            </div>
          </div>
        </section>

        <Skills />
        <About />

        <section id="resume">
          <Resume />
        </section>

        <Email />
      </main>

      <footer className="footer">
        <p>© 2026 Karan-Jaswal. Built with Dev</p>
        <div className="footer-links">
          <a href="https://github.com/yourid" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourid" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App;