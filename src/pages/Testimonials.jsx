import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CTABanner from '../components/ui/CTABanner'
import Button from '../components/ui/Button'
import { testimonials } from '../data/index'
import styles from './Testimonials.module.css'

const filters = ['All', 'Plumbing', 'Gas', 'Air Conditioning']

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true" style={{ color: '#274069' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All')
  const reduced = useReducedMotion()

  const filtered =
    activeFilter === 'All'
      ? testimonials
      : testimonials.filter((t) =>
          t.service.toLowerCase().includes(activeFilter.toLowerCase())
        )

  return (
    <div style={{ background: 'var(--color-neutral)' }}>
      <Helmet>
        <title>Customer Reviews | Kearsley &amp; Co Gas Services — Leeds</title>
        <meta
          name="description"
          content="Read reviews from our satisfied customers across Horsforth and Leeds. 5-star rated plumbers and gas engineers."
        />
        <meta property="og:title" content="Customer Reviews | Kearsley & Co Gas Services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/testimonials" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/testimonials" />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Customer testimonials">
        <img src="/images/stock/view-exposed-plumbing-pipes.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Reviews</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.heroContent}
          >
            <h1 className={styles.heroHeading}>What Our Customers Say</h1>
            <p className={styles.heroSub}>
              Real reviews from customers across Yeadon and Leeds.
            </p>
            <div className={styles.heroCTA}>
              <Button to="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="tel:01943662713" variant="secondaryLight">Call 01943 662713</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className={styles.filtersSection} aria-label="Filter reviews by service">
        <div className="container">
          <div className={styles.filters} role="tablist">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                className={[
                  styles.filterBtn,
                  activeFilter === f ? styles.filterBtnActive : '',
                ].join(' ')}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section
        className={styles.testimonialsGrid}
        aria-label={`${activeFilter} testimonials`}
      >
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className={styles.grid}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? {} : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              layout
            >
              {filtered.map((t, i) => (
                <motion.div
                  key={t.id}
                  className={styles.card}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  layout
                >
                  <StarRating count={t.rating} />
                  <blockquote className={styles.quote}>
                    <p>"{t.quote}"</p>
                  </blockquote>
                  <div className={styles.meta}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.location}>{t.location}</span>
                    <span className={styles.serviceBadge}>{t.service}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className={styles.empty}>No reviews found for this category.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Join Our Satisfied Customers"
        subtext="Get in touch today for a free, no-obligation quote on any plumbing, gas or AC work."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />
    </div>
  )
}
