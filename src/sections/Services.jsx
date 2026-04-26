import './Services.css'

const services = [
  {
    num: '01',
    icon: '🌐',
    title: 'Web Development',
    color: '#2dd4bf',
    desc: 'From simple landing pages to complex multi-page websites. Pixel-perfect, fast-loading and built to impress — whether it\'s your brand, business or idea.',
    features: ['Responsive design', 'SEO-ready structure', 'Fast load times', 'Cross-browser support'],
  },
  {
    num: '02',
    icon: '⚛️',
    title: 'Frontend Development',
    color: '#d4a853',
    desc: 'Turning designs into living, breathing interfaces with React and Next.js. Clean component architecture, smooth animations and a UI your users will love.',
    features: ['React & Next.js', 'Tailwind & CSS', 'Animations & interactions', 'Component systems'],
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Full-Stack Web Apps',
    color: '#a855f7',
    desc: 'End-to-end web applications — from the UI down to the database. Auth, APIs, storage, and deployment all handled. You bring the idea, I build the product.',
    features: ['NestJS & Supabase', 'REST API integration', 'Auth & user management', 'Vercel deployment'],
  },
  {
    num: '04',
    icon: '🎨',
    title: 'UI/UX Design',
    color: '#4a9e6b',
    desc: 'Before writing a single line of code, I design it. Figma wireframes, prototypes and design systems that look great and feel natural to use.',
    features: ['Figma prototyping', 'Design systems', 'User-first thinking', 'Handoff-ready files'],
  },
]

const perks = [
  { icon: '🚀', label: 'Fast Delivery' },
  { icon: '✨', label: 'Clean Code' },
  { icon: '📐', label: 'Design-First' },
  { icon: '🔄', label: 'Revisions Included' },
  { icon: '📱', label: 'Mobile-Ready' },
  { icon: '🌍', label: 'Remote-Friendly' },
]

export default function Services({ onNavigate }) {
  return (
    <section className="services">
      <div className="services__inner">

        {/* ── LEFT ── */}
        <div className="services__left">
          <p className="section-label">Services</p>
          <h2 className="services__heading">
            What I Can<br />
            <span className="accent">Build</span> for<br />
            You
          </h2>
          <p className="services__desc">
            Open to freelance, contract and collaboration.
            Whether you need a <strong>landing page</strong>, a
            <strong> full web app</strong>, or just someone to
            bring your design to life — I'm in.
          </p>

          {/* Perks */}
          <div className="services__perks">
            {perks.map(p => (
              <span key={p.label} className="services__perk">
                <span>{p.icon}</span>{p.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="services__cta">
            <div className="services__cta-glow" />
            <p className="services__cta-label mono accent">Ready to build something?</p>
            <p className="services__cta-sub muted">
              Drop me a message and let's talk about your project.
            </p>
            <button
              className="services__cta-btn"
              onClick={() => onNavigate(5)}
            >
              Let's Work Together
              <span className="services__cta-arrow">→</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="services__right">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="services__card"
              style={{
                '--svc-color': s.color,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <div className="services__card-top">
                <div className="services__card-icon-wrap">
                  <span className="services__card-icon">{s.icon}</span>
                </div>
                <div className="services__card-head">
                  <span className="services__card-num mono">{s.num}</span>
                  <h3 className="services__card-title">{s.title}</h3>
                </div>
              </div>

              <p className="services__card-desc">{s.desc}</p>

              <ul className="services__card-features">
                {s.features.map(f => (
                  <li key={f} className="services__card-feature">
                    <span className="services__card-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="services__card-bar" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}