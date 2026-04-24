import { useState } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* ── DESKTOP: Floating pill sidebar ── */}
      <aside className="sidebar">
        {/* Logo mark */}
        <div className="sidebar__logo">
          <span className="sidebar__logo-q">Q</span>
        </div>

        {/* Nav icons */}
        <nav className="sidebar__nav">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`sidebar__item ${activePage === id ? 'sidebar__item--active' : ''}`}
              onClick={() => handleNav(id)}
              aria-label={label}
            >
              <Icon className="sidebar__icon" />
              <span className="sidebar__tooltip">{label}</span>
              {activePage === id && <span className="sidebar__dot" />}
            </button>
          ))}
        </nav>

        {/* Page counter */}
        <div className="sidebar__counter">
          <span className="sidebar__counter-current">{String(activePage + 1).padStart(2, '0')}</span>
          <span className="sidebar__counter-divider" />
          <span className="sidebar__counter-total">06</span>
        </div>
      </aside>

      {/* ── MOBILE: Floating hamburger button ── */}
      {!mobileOpen && (
        <button
          className="mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <RiMenuLine />
        </button>
      )}

      {/* ── MOBILE: Drawer overlay ── */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── MOBILE: Drawer sidebar ── */}
      <aside className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        {/* Close button */}
        <button
          className="mobile-drawer__close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>

        {/* Logo */}
        <div className="mobile-drawer__logo">
          Qodec<span>Tech</span>
        </div>

        {/* Nav links */}
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

        {/* Page indicator */}
        <div className="mobile-drawer__footer">
          <span className="mono muted" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            {String(activePage + 1).padStart(2, '0')} / 06
          </span>
        </div>
      </aside>
    </>
  )
}