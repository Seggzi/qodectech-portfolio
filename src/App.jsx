import { useState, useEffect } from 'react'
import './styles/globals.css'
import Sidebar from './components/Sidebar'
import PageManager from './components/PageManager'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function ph(label, color) {
  return (
    <div style={{
      width:'100%', height:'100vh', display:'flex',
      alignItems:'center', justifyContent:'center',
      fontFamily:"'DM Mono',monospace", fontSize:'1rem',
      color, letterSpacing:'0.15em'
    }}>
      {label}
    </div>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState(0)

  const pages = [
    <Hero    key="hero"     onNavigate={setActivePage} />,
    <About   key="about"   />,
    <Skills  key="skills"  />,
    ph('04 — Work',     '#d4a853'),
    ph('05 — Services', '#2dd4bf'),
    ph('06 — Contact',  '#d4a853'),
  ]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight')
        setActivePage(p => Math.min(p + 1, pages.length - 1))
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
        setActivePage(p => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="page-wrapper">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="page-content">
        <PageManager activePage={activePage}>
          {pages}
        </PageManager>
      </div>
    </div>
  )
}