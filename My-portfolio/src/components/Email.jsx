import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Email.css'

const Email = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs.sendForm('service_ryx5kce', 'template_medi0x5', form.current, 'bpUFrZCS4cik1a1R5')
      .then(() => { setStatus('sent'); e.target.reset() })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="contact-section" id="contact">
      <p className="section-label">Get in touch</p>
      <h2 className="section-title">Let's work together</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <textarea name="message" placeholder="Tell me about your project..." required />
        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : 'Send Message →'}
        </button>
        {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
      </form>
    </section>
  )
}
export default Email;