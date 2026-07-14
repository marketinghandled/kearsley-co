import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './TestimonialsCarousel.module.css'

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function TestimonialsCarousel({ testimonials = [], filter }) {
  const reduced = useReducedMotion()

  const filtered = filter
    ? testimonials.filter(
        (t) => t.service.toLowerCase().includes(filter.toLowerCase())
      )
    : testimonials

  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)

  const total = Math.max(filtered.length, 1)

  const go = (idx, dir) => {
    setDirection(dir)
    setCurrentIndex(((idx % total) + total) % total)
  }

  const next = () => go(currentIndex + 1, 1)
  const prev = () => go(currentIndex - 1, -1)

  useEffect(() => {
    setCurrentIndex(0)
  }, [filter])

  useEffect(() => {
    if (paused || reduced || filtered.length <= 1) return
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [currentIndex, paused, reduced, filtered.length])

  if (filtered.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No testimonials found.</p>
      </div>
    )
  }

  // Desktop: show up to 3
  const getVisible = () => {
    if (filtered.length === 1) return [filtered[0]]
    if (filtered.length === 2) return [filtered[0], filtered[1]]
    const items = []
    for (let i = 0; i < Math.min(3, filtered.length); i++) {
      items.push(filtered[(currentIndex + i) % filtered.length])
    }
    return items
  }

  const visible = getVisible()

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          className={styles.track}
          custom={direction}
          variants={reduced ? {} : variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35 }}
        >
          {visible.map((t) => (
            <div key={t.id} className={styles.card}>
              <StarRating count={t.rating} />
              <blockquote className={styles.quote}>
                <p>"{t.quote}"</p>
              </blockquote>
              <div className={styles.meta}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.location}>{t.location} · {t.service}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length > 1 && (
        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className={styles.dots}>
            {filtered.length <= 10 && filtered.map((_, i) => (
              <button
                key={i}
                className={[styles.dot, i === currentIndex ? styles.dotActive : ''].join(' ')}
                onClick={() => go(i, i > currentIndex ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
