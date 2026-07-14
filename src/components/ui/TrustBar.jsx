import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './TrustBar.module.css'

const items = [
  { label: 'Gas Safe Registered' },
  { label: '5-Star Google Reviews' },
  { label: 'Same-Day Response' },
  { label: '10+ Years Experience' },
  { label: 'No Call-Out Charges' },
]

export default function TrustBar({ dark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduced = useReducedMotion()

  return (
    <section
      ref={ref}
      className={[styles.trustBar, dark ? styles.dark : styles.light].join(' ')}
      aria-label="Trust indicators"
    >
      <div className={`container ${styles.inner}`}>
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className={styles.chip}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className={styles.label}>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
