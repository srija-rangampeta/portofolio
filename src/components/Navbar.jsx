import { useState } from 'react'
import { navLinks, personal } from '../data/portfolioData.js'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light')
    const isLight = document.documentElement.classList.contains('light')
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = isLight ? '☀️' : '🌙'
    })
    document.querySelector('meta[name="theme-color"]').content = isLight ? '#f5f5f0' : '#0F172A'
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    const mobileBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileIcon = mobileBtn?.querySelector('svg path')

    if (!isMobileMenuOpen) {
      mobileMenu?.classList.remove('opacity-0', 'pointer-events-none')
      mobileMenu?.classList.add('flex')
      setTimeout(() => mobileMenu?.classList.remove('opacity-0'), 10)
      mobileIcon?.setAttribute('d', 'M6 18L18 6M6 6l12 12')
      document.body.style.overflow = 'hidden'
    } else {
      mobileMenu?.classList.add('opacity-0', 'pointer-events-none')
      setTimeout(() => mobileMenu?.classList.remove('flex'), 300)
      mobileIcon?.setAttribute('d', 'M3.75 9h16.5m-16.5 6.75h16.5')
      document.body.style.overflow = ''
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ mixBlendMode: 'difference' }}>
        <nav className="max-w-[1400px] mx-auto px-6 py-8 flex items-center justify-between">
          <a href="#home" className="font-primary text-2xl tracking-tight hover:italic transition-all" style={{ color: 'var(--text)' }}>
            {personal.name.split(' ')[0]}.{personal.name.split(' ')[1][0]}.
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
                style={{ color: 'var(--text)' }}
              >
                {link.label}
              </a>
            ))}
            <button
              id="theme-toggle-desktop"
              className="theme-toggle"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              🌙
            </button>
          </div>
          <button
            id="mobile-menu-btn"
            className="md:hidden text-white z-50 relative focus:outline-none"
            style={{ color: 'var(--text)' }}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 flex-col items-center justify-center gap-10 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mobile-link text-sm uppercase tracking-widest hover:text-primary transition-colors"
            style={{ color: 'var(--text)' }}
            onClick={toggleMobileMenu}
          >
            {link.label}
          </a>
        ))}
        <button
          id="theme-toggle-mobile"
          className="theme-toggle"
          style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
          onClick={() => { toggleMobileMenu(); toggleTheme(); }}
          aria-label="Toggle theme"
        >
          🌙
        </button>
      </div>
    </>
  )
}

export default Navbar