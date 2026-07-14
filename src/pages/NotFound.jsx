import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Button from '../components/ui/Button'
import LogoMark from '../components/ui/LogoMark'
import styles from './NotFound.module.css'

export default function NotFound() {
  const reduced = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Kearsley &amp; Co Gas Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={styles.section} aria-label="Page not found">
        <div className={`container ${styles.inner}`}>
          <motion.div
            className={styles.content}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.logoWrap}>
              <LogoMark light animated size={40} />
            </div>

            <motion.div
              className={styles.errorCode}
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              aria-hidden="true"
            >
              404
            </motion.div>

            <h1 className={styles.heading}>Page Not Found</h1>
            <p className={styles.sub}>
              This page doesn't exist, but our engineers definitely do.
            </p>
            <p className={styles.hint}>
              You might have followed a broken link, or the page may have moved.
              Head back home or get in touch — we're always happy to help.
            </p>

            <div className={styles.actions}>
              <Button to="/" variant="primary">
                Go Home
              </Button>
              <Button to="/contact" variant="secondaryLight">
                Contact Us
              </Button>
            </div>

            <div className={styles.quickContact}>
              <span>Need help urgently?</span>
              <a href="tel:01130000000" className={styles.phone}>
                0113 XXX XXXX
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
