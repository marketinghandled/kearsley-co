import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from './Button'
import styles from './CTABanner.module.css'

export default function CTABanner({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
  variant = 'navy',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  const isNavy = variant === 'navy'

  return (
    <section
      ref={ref}
      className={[styles.banner, isNavy ? styles.navy : styles.orange].join(' ')}
      aria-label="Call to action"
    >
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>{heading}</h2>
          {subtext && <p className={styles.subtext}>{subtext}</p>}
          <div className={styles.actions}>
            {primaryCTA && (
              <Button
                variant={isNavy ? 'primary' : 'secondaryLight'}
                href={primaryCTA.href.startsWith('/') ? undefined : primaryCTA.href}
                to={primaryCTA.href.startsWith('/') ? primaryCTA.href : undefined}
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="secondaryLight"
                href={secondaryCTA.href.startsWith('/') ? undefined : secondaryCTA.href}
                to={secondaryCTA.href.startsWith('/') ? secondaryCTA.href : undefined}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
