import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section className="resume-section" id="resume">

      <p className="section-label">My Resume</p>
      <h2 className="section-title">Download & View</h2>

      <div className="resume-card">

        <div className="resume-preview">
          <div className="pdf-icon">📄</div>
          <div className="resume-info">
            <p className="resume-filename">YourName_Resume.pdf</p>
            <p className="resume-meta">Full Stack Developer · Updated 2025</p>
          </div>
        </div>

        <div className="resume-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-view">
            👁️ View Resume
          </a>
          <a href="/resume.pdf" download="YourName_Resume.pdf" className="btn-download">
            ⬇️ Download PDF
          </a>
        </div>

        <div className="resume-embed">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="600px"
          />
        </div>

      </div>

    </section>
  )
}

export default Resume