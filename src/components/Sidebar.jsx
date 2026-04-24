import { useState, useRef } from 'react'
import {
  RiHome4Line, RiUser3Line, RiCodeSSlashLine,
  RiBriefcaseLine, RiServiceLine, RiMailLine,
  RiCloseLine, RiMenuLine
} from 'react-icons/ri'
import './Sidebar.css'

const navItems = [
  { id: 0, icon: RiHome4Line,      label: 'Home'     },
  { id: 1, icon: RiUser3Line,      label: 'About'    },
  { id: 2, icon: RiCodeSSlashLine, label: 'Skills'   },
  { id: 3, icon: RiBriefcaseLine,  label: 'Work'     },
  { id: 4, icon: RiServiceLine,    label: 'Services' },
  { id: 5, icon: RiMailLine,       label: 'Contact'  },
]

export default function Sidebar({ activePage, onNavigate }) {
  const [expanded, setExpanded]     = useState(false)
  const [locked,   setLocked]       = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const leaveTimer = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(leaveTimer.current)
    setExpanded(true)
  }

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setExpanded(false)
      setLocked(false)
    }, 300)
  }

  const handleNav = (id) => {
    onNavigate(id)
    setLocked(true)
    setExpanded(true)
    setMobileOpen(false)
  }

  const isExpanded = expanded || locked

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <aside
        className={`sidebar ${isExpanded ? 'sidebar--expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo row */}
        <div className="sidebar__logo">
          <span className="sidebar__logo-q">Q</span>
          <span className="sidebar__logo-rest">odec<em>Tech</em></span>
        </div>

        {/* Divider */}
        <div className="sidebar__divider" />

        {/* Nav items */}
        <nav className="sidebar__nav">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`sidebar__item ${activePage === id ? 'sidebar__item--active' : ''}`}
              onClick={() => handleNav(id)}
              aria-label={label}
            >
              {/* Fixed-width icon slot */}
              <span className="sidebar__icon-slot">
                <Icon className="sidebar__icon" />
              </span>
              {/* Label only visible when expanded */}
              <span className="sidebar__label">{label}</span>
              {/* Active indicator bar on right edge */}
              {activePage === id && <span className="sidebar__active-bar" />}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="sidebar__divider" />

        {/* Counter */}
        <div className="sidebar__footer">
          <span className="sidebar__counter-num accent">
            {String(activePage + 1).padStart(2, '0')}
          </span>
          <span className="sidebar__counter-sep"> / </span>
          <span className="sidebar__counter-total">06</span>
          <span className="sidebar__page-name">{navItems[activePage].label}</span>
        </div>
      </aside>

      {/* ── MOBILE HAMBURGER ── */}
      {!mobileOpen && (
        <button
          className="mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <RiMenuLine />
        </button>
      )}

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <aside className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <button
          className="mobile-drawer__close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>

        <div className="mobile-drawer__logo">
          Qodec<span>Tech</span>
        </div>

        <nav className="mobile-drawer__nav">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`mobile-drawer__item ${activePage === id ? 'mobile-drawer__item--active' : ''}`}
              onClick={() => handleNav(id)}
            >
              <Icon className="mobile-drawer__icon" />
              <span>{label}</span>
              {activePage === id && <span className="mobile-drawer__active-bar" />}
            </button>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <span className="mono muted" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            {String(activePage + 1).padStart(2, '0')} / 06
          </span>
        </div>
      </aside>
    </>
  )
}