'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      role="switch"
      aria-checked={isDark}
      aria-label={`Alternar para modo ${isDark ? 'claro' : 'escuro'}`}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-icon theme-toggle-icon--sun ${isDark ? 'theme-toggle-icon--inactive' : ''}`}>☀️</span>
        <span className={`theme-toggle-icon theme-toggle-icon--moon ${!isDark ? 'theme-toggle-icon--inactive' : ''}`}>🌙</span>
        <span className="theme-toggle-knob" />
      </span>
    </button>
  )
}
