import { useState, useEffect } from 'react'
import './PageManager.css'

export default function PageManager({ activePage, children }) {
  const [displayPage, setDisplayPage] = useState(activePage)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  useEffect(() => {
    if (activePage === displayPage) return
    const dir = activePage > displayPage ? 'next' : 'prev'
    setDirection(dir)
    setAnimating(true)
    const timer = setTimeout(() => {
      setDisplayPage(activePage)
      setAnimating(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [activePage])

  return (
    <div className={`page-manager ${animating ? `page-manager--exit-${direction}` : 'page-manager--enter'}`}>
      {children[displayPage]}
    </div>
  )
}