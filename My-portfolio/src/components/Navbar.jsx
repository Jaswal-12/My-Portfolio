import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo"><span>KJDEV.IN</span></div>
      <ul className="nav-links">
        {['Resume', 'Skills', 'About', 'Contact'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
        <li><a href="https://github.com/Jaswal-12" target="_blank" rel="noreferrer" className="nav-icon">GitHub</a></li>
        <li><a href="https://linkedin.com/in/karan-jaswal-159473263" target="_blank" rel="noreferrer" className="nav-icon">LinkedIn</a></li>
      </ul>
    </nav>
  )
}
export default Navbar