import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Call or Enquire',
    description:
      'Get in touch by phone or via our online form. We\'ll discuss your needs and provide a free no-obligation quote.',
  },
  {
    number: '02',
    title: 'We Visit & Assess',
    description:
      'Our Gas Safe engineer will visit at a time that suits you. We diagnose the issue and agree a price before any work begins.',
  },
  {
    number: '03',
    title: 'Job Done, Guaranteed',
    description:
      'We carry out the work to the highest standard, clean up completely, and back everything with our 12-month guarantee.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section
      className={styles.section}
      aria-label="How it works"
      ref={ref}
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.sub}>
            Simple, transparent, and hassle-free from first call to finished job.
          </p>
        </div>

        {/* Image placeholder above steps */}
        <div className={styles.sectionImage} aria-hidden="true">
          {/* Replace with photo: completed bathroom, boiler install, or handshake */}
          [ Photo — Completed Work / Boiler Install / Handshake ]
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
            >
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
