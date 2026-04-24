import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'Software Engineer',
  'UI/UX Designer',
  'Front-End Developer',
  'Creative Developer',
]

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

function useScramble(target, trigger) {
  const [display, setDisplay] = useState(target)
  const frame = useRef(null)

  useEffect(() => {
    let iteration = 0
    clearInterval(frame.current)
    frame.current = setInterval(() => {
      setDisplay(
        target.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration) return target[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      if (iteration >= target.length) clearInterval(frame.current)
      iteration += 0.5
    }, 28)
    return () => clearInterval(frame.current)
  }, [target, trigger])

  return display
}

export default function Hero({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [tick, setTick] = useState(0)
  const scrambled = useScramble(ROLES[roleIndex], tick)

  // Cycle roles every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length)
      setTick(t => t + 1)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glow orb */}
      <div className="hero__orb" aria-hidden="true" />

      <div className="hero__inner">

        {/* Left — main content */}
        <div className="hero__content">

          <div className="hero__eyebrow fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero__eyebrow-line" />
            <span className="mono">Available for work</span>
            <span className="hero__status-dot" />
          </div>

          <h1 className="hero__name fade-up" style={{ animationDelay: '0.2s' }}>
            Abdul<br />
            <span className="hero__name-accent">qodir</span>
          </h1>

          <div className="hero__role fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="hero__role-bracket">[</span>
            <span className="hero__role-text mono">{scrambled}</span>
            <span className="hero__role-cursor" />
            <span className="hero__role-bracket">]</span>
          </div>

          <p className="hero__bio fade-up" style={{ animationDelay: '0.5s' }}>
            I design and build digital experiences that are fast,
            beautiful, and purposeful — from pixel-perfect UIs
            to scalable front-end systems.
            <span className="accent"> Based in Kwara State, Nigeria.</span>
          </p>

          <div className="hero__actions fade-up" style={{ animationDelay: '0.65s' }}>
            <button className="hero__btn hero__btn--primary" onClick={() => onNavigate(3)}>
              View My Work
            </button>
            <button className="hero__btn hero__btn--ghost" onClick={() => onNavigate(5)}>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right — identity card */}
        <div className="hero__card fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="hero__card-inner">

            <div className="hero__card-header">
              <span className="mono muted" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                IDENTITY.JSON
              </span>
              <div className="hero__card-dots">
                <span /><span /><span />
              </div>
            </div>

            <div className="hero__card-body mono">
              <div className="hero__code-line">
                <span className="hero__code-key">name</span>
                <span className="hero__code-sym">: </span>
                <span className="hero__code-str">"Abdulqodir Olaiya"</span>
              </div>
              <div className="hero__code-line">
                <span className="hero__code-key">alias</span>
                <span className="hero__code-sym">: </span>
                <span className="hero__code-str">"QodecTech"</span>
              </div>
              <div className="hero__code-line">
                <span className="hero__code-key">location</span>
                <span className="hero__code-sym">: </span>
                <span className="hero__code-str">"Kwara, Nigeria 🇳🇬"</span>
              </div>
              <div className="hero__code-line">
                <span className="hero__code-key">role</span>
                <span className="hero__code-sym">: </span>
                <span className="hero__code-val accent">[</span>
              </div>
              {ROLES.map((r, i) => (
                <div key={r} className={`hero__code-line hero__code-line--indent ${roleIndex === i ? 'hero__code-line--active' : ''}`}>
                  <span className="hero__code-str">"{r}"</span>
                  {i < ROLES.length - 1 && <span className="hero__code-sym">,</span>}
                </div>
              ))}
              <div className="hero__code-line">
                <span className="hero__code-val accent">]</span>
              </div>
              <div className="hero__code-line" style={{ marginTop: '0.5rem' }}>
                <span className="hero__code-key">status</span>
                <span className="hero__code-sym">: </span>
                <span className="hero__code-green">"open_to_work"</span>
              </div>
              <div className="hero__code-line">
                <span className="hero__code-key">github</span>
                <span className="hero__code-sym">: </span>
                <a
                  className="hero__code-link"
                  href="https://github.com/Seggzi"
                  target="_blank"
                  rel="noreferrer"
                >
                  "github.com/Seggzi"
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom hint */}
      <div className="hero__hint fade-in" style={{ animationDelay: '1s' }}>
        <span className="mono muted" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>
          PRESS ARROW KEYS OR CLICK SIDEBAR TO NAVIGATE
        </span>
        <span className="hero__hint-arrow">↓</span>
      </div>
    </section>
  )
}