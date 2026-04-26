
import { useState } from 'react'
import './Contact.css'

const socials = [
  {
    label: 'Email',
    value: 'qodectech@gmail.com',
    href: 'mailto:qodectech@gmail.com',
    icon: '✉',
    color: '#2dd4bf',
  },
  {
    label: 'WhatsApp',
    value: '+234 805 987 3173',
    href: 'https://wa.me/2348059873173',
    icon: '💬',
    color: '#4ade80',
  },
  {
    label: 'GitHub',
    value: 'github.com/Seggzi',
    href: 'https://github.com/Seggzi',
    icon: '⌥',
    color: '#a855f7',
  },
  {
    label: 'LinkedIn',
    value: 'Abdulqodir Olaiya',
    href: 'https://www.linkedin.com/in/abdulqodir-oluwasegun-olaiya-225590351',
    icon: 'in',
    color: '#0ea5e9',
  },
  {
    label: 'Twitter / X',
    value: '@qodectech',
    href: 'https://twitter.com/qodectech',
    icon: '✕',
    color: '#f0f0f0',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Opens mail client with prefilled content
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:qodectech@gmail.com?subject=${subject}&body=${body}`)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section className="contact">
      <div className="contact__inner">

        {/* ── LEFT ── */}
        <div className="contact__left">
          <p className="section-label">Contact</p>

          <h2 className="contact__heading">
            Let's Build<br />
            Something<br />
            <span className="accent">Great</span>
          </h2>

          <p className="contact__desc">
            Have a project in mind? Want to collaborate?
            Or just want to say hi? — I'm always open.
            Drop a message and I'll get back to you fast.
          </p>

          {/* Availability */}
          <div className="contact__availability">
            <span className="contact__avail-dot" />
            <div>
              <p className="contact__avail-title mono accent">Available for Work</p>
              <p className="contact__avail-sub muted">Open to freelance, contract & collaborations</p>
            </div>
          </div>

          {/* Social links */}
          <div className="contact__socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="contact__social"
                style={{ '--soc-color': s.color }}
              >
                <span className="contact__social-icon">{s.icon}</span>
                <div className="contact__social-info">
                  <span className="contact__social-label mono">{s.label}</span>
                  <span className="contact__social-value">{s.value}</span>
                </div>
                <span className="contact__social-arrow">↗</span>
              </a>
            ))}
          </div>

          {/* Closing line */}
          <p className="contact__closing mono muted">
            // Built with React · Designed by QodecTech · 2026
          </p>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className="contact__right">
          <div className="contact__form-card">
            <div className="contact__form-header">
              <span className="contact__form-title mono accent">Send a Message</span>
              <div className="contact__form-dots">
                <span /><span /><span />
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label mono" htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  className="contact__input"
                  placeholder="Abdulqodir..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label mono" htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email"
                  className="contact__input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label mono" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  className="contact__textarea"
                  placeholder="Hey Qodec, I'd love to work with you on..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`contact__submit ${status === 'sending' ? 'contact__submit--sending' : ''} ${status === 'sent' ? 'contact__submit--sent' : ''}`}
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'sending' && <span className="contact__submit-spinner" />}
                {status === 'sent'    ? '✓ Message Sent!' :
                 status === 'sending' ? 'Opening Mail...' : 'Send Message →'}
              </button>
            </form>

            {/* Bottom note */}
            <p className="contact__form-note mono muted">
              Or reach me directly at{' '}
              <a href="mailto:qodectech@gmail.com" className="accent">
                qodectech@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
