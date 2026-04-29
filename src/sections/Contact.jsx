import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ── EMAILJS CREDENTIALS ──────────────────
const EMAILJS_SERVICE_ID  = 'service_2pet8q8'  
const EMAILJS_TEMPLATE_ID = 'template_imgu8h4'
const EMAILJS_PUBLIC_KEY  = 'bJHDPsF1hxto8ZZH9'
// ─────────────────────────────────────────────────────────

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
  const formRef = useRef(null)
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      // Reset error state after 4s so user can try again
      setTimeout(() => setStatus(null), 4000)
    }
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
              <p className="contact__avail-sub muted">
                Open to freelance, contract & collaborations
              </p>
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

            <form
              ref={formRef}
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__field">
                <label className="contact__label mono" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name" name="from_name" type="text"
                  className="contact__input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label mono" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email" name="from_email" type="email"
                  className="contact__input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label mono" htmlFor="message">
                  Message
                </label>
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

              {/* Error message */}
              {status === 'error' && (
                <p className="contact__error mono">
                  ✕ Something went wrong — please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                className={`contact__submit
                  ${status === 'sending' ? 'contact__submit--sending' : ''}
                  ${status === 'sent'    ? 'contact__submit--sent'    : ''}
                  ${status === 'error'   ? 'contact__submit--error'   : ''}
                `}
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'sending' && (
                  <span className="contact__submit-spinner" />
                )}
                {status === 'sent'    ? '✓ Message Sent!'   :
                 status === 'sending' ? 'Sending...'        :
                 status === 'error'   ? '✕ Failed — Retry'  :
                 'Send Message →'}
              </button>
            </form>

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