import { useState, useEffect } from 'react'
import './styles/globals.css'
import Sidebar from './components/Sidebar'
import PageManager from './components/PageManager'

// Page placeholders — we'll replace these one by one
const pages = [
  <div key="home"     style={ph('#2dd4bf')}>01 — Home</div>,
  <div key="about"    style={ph('#d4a853')}>02 — About</div>,
  <div key="skills"   style={ph('#2dd4bf')}>03 — Skills</div>,
  <div key="work"     style={ph('#d4a853')}>04 — Work</div>,
  <div key="services" style={ph('#2dd4bf')}>05 — Services</div>,
  <div key="contact"  style={ph('#d4a853')}>06 — Contact</div>,
]

function ph(color) {
  return {
    width: '100%', height: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'DM Mono', monospace", fontSize: '1rem',
    color, letterSpacing: '0.15em', userSelect: 'none',
  }
}

export default function App() {
  const [activePage, setActivePage] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActivePage(p => Math.min(p + 1, pages.length - 1))
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActivePage(p => Math.max(p - 1, 0))
      }
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