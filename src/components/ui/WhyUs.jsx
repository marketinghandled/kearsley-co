import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './WhyUs.module.css'

const points = [
  'Gas Safe registered',
  'Worcester Bosch approved installers',
  '20+ years of experience',
  'Domestic, commercial and industrial work',
  'Honest, transparent pricing',
  'Emergency call outs across Yeadon and Leeds',
  'Fully insured - public liability and employers\' liability',
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduced = useReducedMotion()

  return (
    <section
      className={styles.section}
      aria-label="Why choose Kearsley and Co"
      ref={ref}
    >
      <div className={`container ${styles.inner}`}>
        {/* Left: image placeholder */}
        <motion.div
          className={styles.imageCol}
          initial={reduced ? false : { opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.imgPlaceholder}>
            <span className={styles.imgPlaceholderLabel}>Image of engineer installing</span>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Years experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>£</span>
              <span className={styles.statLabel}>Honest pricing</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <img src="/images/logo-gassafe.svg" alt="Gas Safe" className={styles.statLogo} />
              <span className={styles.statLabel}>Gas Safe registered</span>
            </div>
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          className={styles.copyCol}
          initial={reduced ? false : { opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className={styles.heading}>Why Kearsley &amp; Co Gas Services?</h2>
          <p className={styles.body}>
            We're local engineers with over 20 years of experience who live and work in Yeadon.
            We serve domestic, commercial and industrial customers — and when you call us,
            you speak to the people who will actually do the work. Gas Safe registered,
            Worcester Bosch approved, fully insured.
          </p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p} className={styles.point}>
                <span className={styles.tick} aria-hidden="true">—</span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
