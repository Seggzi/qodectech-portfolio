import { useState } from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiSupabase, SiNestjs,
  SiGit, SiGithub, SiVercel, SiFigma,
} from 'react-icons/si'
import { TbApi, TbBrandVscode } from 'react-icons/tb'
import './Skills.css'

const tabs = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend'  },
  { id: 'tools',    label: 'Tools'    },
]

const skills = {
  frontend: [
    { name: 'HTML',         tag: 'Foundation', Icon: SiHtml5,       color: '#e34f26' },
    { name: 'CSS',          tag: 'Foundation', Icon: SiCss,         color: '#1572b6' },
    { name: 'JavaScript',   tag: 'Language',   Icon: SiJavascript,  color: '#f7df1e' },
    { name: 'TypeScript',   tag: 'Language',   Icon: SiTypescript,  color: '#3178c6' },
    { name: 'React',        tag: 'Framework',  Icon: SiReact,       color: '#61dafb' },
    { name: 'Next.js',      tag: 'Framework',  Icon: SiNextdotjs,   color: '#ffffff', gold: true },
    { name: 'Tailwind CSS', tag: 'Styling',    Icon: SiTailwindcss, color: '#38bdf8' },
    { name: 'Bootstrap',    tag: 'Styling',    Icon: SiBootstrap,   color: '#7952b3' },
  ],
  backend: [
    { name: 'Supabase',   tag: 'BaaS / DB',   Icon: SiSupabase, color: '#3ecf8e', gold: true },
    { name: 'NestJS',     tag: 'Framework',   Icon: SiNestjs,   color: '#e0234e' },
    { name: 'REST APIs',  tag: 'Integration', Icon: TbApi,      color: '#2dd4bf' },
  ],
  tools: [
    { name: 'Git',        tag: 'Version Control', Icon: SiGit,          color: '#f05032' },
    { name: 'GitHub',     tag: 'Hosting',         Icon: SiGithub,       color: '#f0f0f0' },
    { name: 'VS Code',    tag: 'Editor',          Icon: TbBrandVscode,  color: '#007acc' },
    { name: 'Vercel',     tag: 'Deployment',      Icon: SiVercel,       color: '#ffffff', gold: true },
    { name: 'Figma',      tag: 'Design',          Icon: SiFigma,        color: '#f24e1e' },
  ],
}

const learning = ['Three.js', 'Node.js', 'C++', 'MySQL']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section className="skills">

              <div className="hero__grid" aria-hidden="true" />


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

          <div className="skills__panel" key={activeTab}>
            <div className="skills__grid">
              {skills[activeTab].map(skill => (
                <div
                  key={skill.name}
                  className={`skills__card ${skill.gold ? 'skills__card--gold' : ''}`}
                  style={{ '--skill-color': skill.color }}
                >
                  <div className="skills__card-icon">
                    <skill.Icon />
                  </div>
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