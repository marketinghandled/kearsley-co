import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import ServiceCard from '../components/ui/ServiceCard'
import FAQAccordion from '../components/ui/FAQAccordion'
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel'
import CTABanner from '../components/ui/CTABanner'
import Button from '../components/ui/Button'
import { plumbingServices, plumbingFAQs, testimonials } from '../data/index'
import styles from './Plumbing.module.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kearsleyco.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Plumbing', item: 'https://www.kearsleyco.co.uk/plumbing' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: plumbingFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function Plumbing() {
  const reduced = useReducedMotion()
  const cardsRef = useRef(null)
  const faqRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>Plumber Yeadon &amp; Leeds | Kearsley &amp; Co Gas Services</title>
        <meta
          name="description"
          content="Expert plumbers in Yeadon and Leeds. Emergency plumbing, Worcester Bosch boiler installation, bathroom fitting, leak detection. Gas Safe registered. No call-out charges. Serving Yeadon, Guiseley, Rawdon, Horsforth and across Leeds."
        />
        <meta property="og:title" content="Plumber Yeadon & Leeds | Kearsley & Co" />
        <meta
          property="og:description"
          content="Expert plumbers in Yeadon and Leeds. Emergency plumbing, Worcester Bosch boiler installation, bathroom fitting, leak detection. No call-out charges."
        />
        <link rel="canonical" href="https://www.kearsleyco.co.uk/plumbing" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Plumbing services in Yeadon and Leeds">
        <img src="/images/stock/closeup-shot-pipe-wrench-screwing-nut.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Plumbing</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.heroHeading}>
              Professional Plumbers in<br />Yeadon &amp; Leeds
            </h1>
            <p className={styles.heroSub}>
              Gas Safe registered engineers delivering expert domestic, commercial and industrial
              plumbing across Yeadon and surrounding areas across Leeds.
            </p>
            <div className={styles.heroCTA}>
              <Button to="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="tel:01130000000" variant="secondaryLight">Call 0113 XXX XXXX</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <section style={{ background: 'var(--color-white)', padding: '1.75rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }} aria-label="Approved brands">
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary)', marginBottom: '1.25rem' }}>
            Approved Installers &amp; Registered Engineers
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { src: '/images/logo-gassafe.svg', alt: 'Gas Safe Registered' },
              { src: '/images/logo-worcesterbosch.png', alt: 'Worcester Bosch' },
              { src: '/images/valliant-logo.webp', alt: 'Vaillant' },
            ].map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: 40, width: 'auto', maxWidth: 120, objectFit: 'contain', opacity: 0.8 }} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        className={styles.servicesSection}
        aria-label="Plumbing services we offer"
        ref={cardsRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Our Plumbing Services</h2>
            <p className={styles.sectionSub}>
              From small repairs to full installations — Kearsley &amp; Co cover every aspect
              of domestic, commercial and industrial plumbing in Leeds.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            {plumbingServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                style={{ height: '100%' }}
              >
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.description}
                  benefits={svc.benefits}
                  href={svc.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CALLOUT */}
      <section className={styles.trustCallout} aria-label="Quality guarantee">
        <div className="container">
          <div className={styles.calloutInner}>
            <span className={styles.calloutIcon} aria-hidden="true">✓</span>
            <div>
              <h2 className={styles.calloutHeading}>Quality You Can Count On</h2>
              <p className={styles.calloutText}>
                All work is fully insured and backed by our 12-month workmanship guarantee.
                No hidden charges, no nasty surprises. We quote before we start and we stick
                to the price — every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={styles.faqSection}
        aria-label="Frequently asked questions about plumbing"
        ref={faqRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Plumbing FAQs</h2>
            <p className={styles.sectionSub}>
              Common questions from our customers about our plumbing services.
            </p>
          </div>
          <div className={styles.faqWrap}>
            <FAQAccordion items={plumbingFAQs} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection} aria-label="Plumbing customer reviews">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>What Our Plumbing Customers Say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} filter="Plumbing" />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Book a Plumber in Yeadon or Leeds?"
        subtext="Domestic, commercial and industrial plumbing — get in touch today for a free, no-obligation quote across Yeadon, Guiseley, Rawdon, Horsforth and Leeds."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01130000000' }}
        variant="navy"
      />
    </>
  )
}
