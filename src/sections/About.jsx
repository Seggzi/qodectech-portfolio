import './About.css'

const stats = [
  { value: '2+',  label: 'Live Projects'    },
  { value: '18+', label: 'Months Coding'    },
  { value: '8+',  label: 'Tools & Techs'   },
  { value: '∞',   label: 'Curiosity Level' },
]

const traits = [
  { emoji: '⚽', label: 'Football'          },
  { emoji: '🏓', label: 'Table Tennis'      },
  { emoji: '🎨', label: 'Art & Drawing'     },
  { emoji: '🕌', label: 'Deen First'        },
  { emoji: '🎬', label: 'Occasional Movies' },
]

const timeline = [
  {
    year: '2022–23',
    title: 'The Foundation',
    desc: 'A friend introduced me to code in secondary school. Started with HTML & CSS — fell in love with building things on a screen.',
  },
  {
    year: '2023–24',
    title: 'JavaScript Era',
    desc: 'Levelled up to JavaScript and started making things interactive. Self-study became a daily habit. Logic started clicking.',
  },
  {
    year: '2024–25',
    title: 'University + React',
    desc: 'Entered university studying Software Engineering. Picked up React, TypeScript, Tailwind & NestJS. Also touched C, C++ and Java in class.',
  },
  {
    year: '2026',
    title: 'Next Level',
    desc: 'Mastering Next.js, shipping real client projects, designing in Figma and building this portfolio. The full-stack creative dev era begins.',
  },
]

export default function About() {
  return (
    <section className="about">
      <div className="hero__grid" aria-hidden="true" />
      <div className="about__inner">

        {/* ── LEFT COLUMN ── */}
        <div className="about__left">

          <p className="section-label">About Me</p>

          <h2 className="about__heading">
            Building with<br />
            <span className="accent">Purpose</span> &<br />
            Precision
          </h2>

          <p className="about__bio">
            I'm <strong>Abdulqodir Olaiya</strong> — a Software Engineering student,
            self-driven developer and UI/UX designer based in{' '}
            <span className="accent">Kwara State, Nigeria</span>.
            I go by <span className="gold">QodecTech</span> — because I don't just write code,
            I craft digital experiences.
          </p>

          <p className="about__bio">
            My journey started in secondary school when a friend introduced me to programming.
            From that first line of code, I was hooked. Since then, it's been relentless
            self-study, late nights, and a deep love for building things that actually work
            and look great doing it.
          </p>

          <p className="about__bio">
            I study <strong>Software Engineering</strong> at university, but my real classroom
            has always been the internet, the community around me, and the projects I've built
            myself — including a full rebuild of my university's website just to practice.
          </p>

          {/* Traits */}
          <div className="about__traits">
            {traits.map(t => (
              <span key={t.label} className="about__trait">
                <span>{t.emoji}</span> {t.label}
              </span>
            ))}
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="about__right">

          {/* Stats */}
          <div className="about__stats">
            {stats.map(s => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value accent">{s.value}</span>
                <span className="about__stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="about__timeline">
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>My Journey</p>
            {timeline.map((item, i) => (
              <div key={i} className="about__tl-item">
                <div className="about__tl-left">
                  <span className="about__tl-year mono accent">{item.year}</span>
                  <span className="about__tl-dot" />
                  {i < timeline.length - 1 && <span className="about__tl-line" />}
                </div>
                <div className="about__tl-body">
                  <h4 className="about__tl-title">{item.title}</h4>
                  <p className="about__tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision card */}
          <div className="about__vision">
            <span className="about__vision-icon">🚀</span>
            <div>
              <p className="about__vision-title mono accent">5-Year Vision</p>
              <p className="about__vision-text">
                Top global freelancer. Founder of my own product. Engineer at a world-class
                tech company. Why pick one when you can have all three?
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}