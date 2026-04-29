import { useState } from 'react'
import './Work.css'

const live = [
  {
    id: 'dashsub',
    title: 'DashSub',
    tag: 'VTU Platform',
    desc: 'A full-featured Nigerian VTU web app — buy airtime, data, pay bills and electricity. Built with virtual bank account creation via Payvessel and Gladtidings API integration.',
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    live: 'https://dashsub.vercel.app',
    github: 'https://github.com/Seggzi/DashSub',
    img: '/screenshots/dashsub.png',
    accent: '#2dd4bf',
  },
  {
    id: 'primescene',
    title: 'PrimeScene',
    tag: 'Movie Streaming',
    desc: 'A Netflix-style movie discovery and streaming interface. Browse, search and explore films with a clean cinematic UI powered by a public movie API.',
    stack: ['React', 'Tailwind CSS', 'Movie API'],
    live: 'https://primescene.vercel.app',
    github: 'https://github.com/Seggzi/primescene',
    img: '/screenshots/primescene.png',
    accent: '#d4a853',
  },
]

const personal = [
  {
    id: 'kkevents',
    title: 'KK Events',
    tag: 'Event Planner',
    desc: 'Professional event planning site with service showcase and booking flow.',
    stack: ['JavaScript', 'Tailwind CSS'],
    live: 'https://kk-event-planning.vercel.app',
    github: 'https://github.com/Seggzi/kk_event',
    img: '/screenshots/kkevents.png',
  },
  {
    id: 'gaming',
    title: 'Gaming Store',
    tag: 'E-Commerce',
    desc: 'Purple-themed gaming product store with listings and cart interactions.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://gaming-store-hazel.vercel.app',
    github: null,
    img: '/screenshots/gaming.png',
  },
  {
    id: 'portfolio1',
    title: 'Portfolio v1',
    tag: 'Portfolio',
    desc: 'An earlier portfolio built as a class assignment. Animated and dark-themed.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://qodectech.vercel.app',
    github: null,
    img: '/screenshots/portfolio1.png',
  },
  {
    id: 'tau',
    title: 'TAU Clone',
    tag: 'Practice Project',
    desc: 'Full rebuild of Thomas Adewumi University\'s website for frontend practice.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tau-ports.vercel.app',
    github: null,
    img: '/screenshots/tau.png',
  },
]

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10L10 2M10 2H5M10 2V7"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

export default function Work() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="work">

      
      <div className="work__inner">

        {/* ── LEFT ── */}
        <div className="work__left">
          <p className="section-label">Work</p>

          <h2 className="work__heading">
            Things I've<br />
            <span className="accent">Built</span> &<br />
            Shipped
          </h2>

          <p className="work__desc">
            Every project here was built from scratch —
            no templates, no shortcuts. From a{' '}
            <strong>live VTU platform</strong> handling real
            transactions to a <strong>movie streaming UI</strong>,
            these are products I'm proud to put my name on.
          </p>

          <p className="work__desc">
            The personal projects below show range — event sites,
            gaming stores, university clones. Each one taught me something new.
          </p>

          {/* Stats row */}
          <div className="work__stats">
            <div className="work__stat">
              <span className="work__stat-val accent">2</span>
              <span className="work__stat-lbl mono">Live Products</span>
            </div>
            <div className="work__stat">
              <span className="work__stat-val accent">4+</span>
              <span className="work__stat-lbl mono">Personal</span>
            </div>
            <div className="work__stat">
              <span className="work__stat-val accent">100%</span>
              <span className="work__stat-lbl mono">Self-Built</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="work__right">

          {/* ── LIVE PROJECTS ── */}
          <p className="work__group-label mono">
            <span className="work__live-pulse" /> Live Projects
          </p>

          {live.map((p, i) => (
            <div
              key={p.id}
              className="work__live-card"
              style={{
                '--accent': p.accent,
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image strip */}
              <div className="work__live-img">
                <img src={p.img} alt={p.title}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div className="work__live-img-shade" />
              </div>

              {/* Body */}
              <div className="work__live-body">
                <div className="work__live-top">
                  <div>
                    <span className="work__tag mono">{p.tag}</span>
                    <h3 className="work__live-title">{p.title}</h3>
                  </div>
                  <span className="work__badge mono">● LIVE</span>
                </div>

                <p className="work__live-desc">{p.desc}</p>

                <div className="work__stack">
                  {p.stack.map(s => (
                    <span key={s} className="work__pill mono">{s}</span>
                  ))}
                </div>

                <div className="work__links">
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="work__btn work__btn--primary">
                    View Live <ExternalIcon />
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="work__btn work__btn--ghost">
                      <GithubIcon /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* ── PERSONAL PROJECTS ── */}
          <p className="work__group-label mono" style={{ marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--color-subtle)' }}>◆</span> Personal Projects
          </p>

          <div className="work__personal-grid">
            {personal.map((p, i) => (
              <div
                key={p.id}
                className="work__personal-card"
                style={{ animationDelay: `${i * 0.08}s` }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="work__personal-img">
                  <img src={p.img} alt={p.title}
                    onError={e => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="work__personal-body">
                  <span className="work__tag mono">{p.tag}</span>
                  <h4 className="work__personal-title">{p.title}</h4>
                  <p className="work__personal-desc">{p.desc}</p>
                  <div className="work__stack">
                    {p.stack.map(s => (
                      <span key={s} className="work__pill mono">{s}</span>
                    ))}
                  </div>
                  <div className="work__links" style={{ marginTop: '0.6rem' }}>
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="work__btn work__btn--ghost work__btn--sm">
                      View <ExternalIcon />
                    </a>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="work__btn work__btn--ghost work__btn--sm">
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}