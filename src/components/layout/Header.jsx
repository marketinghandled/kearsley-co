import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import LogoMark from '../ui/LogoMark'
import Button from '../ui/Button'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Plumbing', to: '/plumbing' },
  { label: 'Gas Services', to: '/gas-services' },
  { label: 'Air Conditioning', to: '/air-conditioning' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')

  return (
    <header
      className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Kearsley & Co Gas Services — Home">
          <LogoMark size={68} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="tel:01130000000" className={styles.phoneLink} aria-label="Call us on 0113 XXX XXXX">
            0113 XXX XXXX
          </a>
          <Button to="/contact" variant="primary">
            Get a Free Quote
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].join(' ')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? {} : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className={styles.mobileMenu}
              initial={reduced ? false : { opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? {} : { opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className={styles.mobileMenuHeader}>
                <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="Kearsley & Co Gas Services — Home">
                  <LogoMark size={72} light />
                </Link>
                <button
                  className={styles.mobileMenuClose}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className={styles.mobileMenuInner}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        [styles.mobileNavLink, isActive ? styles.mobileNavLinkActive : ''].join(' ')
                      }
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
