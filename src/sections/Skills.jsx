import { useState } from 'react'
import './Skills.css'

const tabs = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend'  },
  { id: 'tools',    label: 'Tools'    },
]

const skills = {
  frontend: [
    { name: 'HTML & CSS',   tag: 'Foundation',  icon: '🌐' },
    { name: 'JavaScript',   tag: 'Language',    icon: '⚡' },
    { name: 'TypeScript',   tag: 'Language',    icon: '🔷' },
    { name: 'React',        tag: 'Framework',   icon: '⚛️' },
    { name: 'Next.js',      tag: 'Framework',   icon: '▲',  gold: true },
    { name: 'Tailwind CSS', tag: 'Styling',     icon: '🎨' },
    { name: 'Bootstrap',    tag: 'Styling',     icon: '🅱️' },
  ],
  backend: [
    { name: 'Supabase',     tag: 'BaaS / DB',   icon: '🟢', gold: true },
    { name: 'NestJS',       tag: 'Framework',   icon: '🐈' },
    { name: 'REST APIs',    tag: 'Integration', icon: '🔗' },
  ],
  tools: [
    { name: 'Git & GitHub', tag: 'Version Control', icon: '🐙' },
    { name: 'VS Code',      tag: 'Editor',          icon: '💙' },
    { name: 'Vercel',       tag: 'Deployment',      icon: '▲', gold: true },
  ],
}

const learning = ['Three.js', 'Node.js', 'C++', 'MySQL']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section className="skills">
      <div className="skills__inner">

        {/* ── LEFT ── */}
        <div className="skills__left">

          <p className="section-label">Skills</p>

          <h2 className="skills__heading">
            Crafting with<br />
            the Right<br />
            <span className="accent">Stack</span>
          </h2>

          <p className="skills__desc">
            Every tool here has been used in a <strong>real project</strong> — not just a
            tutorial. I pick technologies that ship fast, scale clean, and look great.
          </p>

          <p className="skills__desc">
            My core is <strong>TypeScript + Next.js + Tailwind</strong> on the frontend,
            with <strong>Supabase</strong> handling auth, database, and storage on the backend.
            I keep the stack tight and learn deep rather than wide.
          </p>

          {/* Currently learning */}
          <div className="skills__learning">
            <p className="skills__learning-label">Currently Exploring</p>
            <div className="skills__learning-pills">
              {learning.map(item => (
                <span key={item} className="skills__learning-pill">{item}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="skills__right">

          {/* Tabs */}
          <div className="skills__tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`skills__tab ${activeTab === tab.id ? 'skills__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="skills__tab-dot" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="skills__panel" key={activeTab}>
            <div className="skills__grid">
              {skills[activeTab].map(skill => (
                <div
                  key={skill.name}
                  className={`skills__card ${skill.gold ? 'skills__card--gold' : ''}`}
                >
                  <div className="skills__card-icon">{skill.icon}</div>
                  <div className="skills__card-info">
                    <span className="skills__card-name">{skill.name}</span>
                    <span className="skills__card-tag">{skill.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}