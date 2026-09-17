import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import ServiceCard from '../components/ui/ServiceCard'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'
import Button from '../components/ui/Button'
import WorkGallery from '../components/ui/WorkGallery'
import { gasServices, gasFAQs } from '../data/index'
import styles from './GasServices.module.css'

const galleryImages = [
  { src: '/images/boiler-best1.jpg', alt: 'Worcester Bosch boiler installation by Kearsley & Co', caption: 'Boiler installations' },
  { src: '/images/boiler-install1.jpg', alt: 'Gas engineer installing a boiler', caption: 'Expert fitting' },
  { src: '/images/boiler1.jpg', alt: 'Completed boiler installation', caption: 'Finished to a high standard' },
  { src: '/images/boiler&pipes.jpg', alt: 'Boiler pipework and system installation', caption: 'System pipework' },
]

const gasFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: gasFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function GasServices() {
  const reduced = useReducedMotion()
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>Gas Engineer Yeadon &amp; Leeds | Worcester Bosch Installer | Kearsley &amp; Co</title>
        <meta
          name="description"
          content="Gas Safe registered engineers in Yeadon, Leeds. Worcester Bosch boiler packages, Vaillant installations, landlord gas safety certificates (CP12). Serving Yeadon, Guiseley, Rawdon, Horsforth and across Leeds."
        />
        <meta property="og:title" content="Gas Engineer Yeadon & Leeds | Worcester Bosch Installer | Kearsley & Co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/gas-services" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/gas-services" />
        <script type="application/ld+json">{JSON.stringify(gasFaqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Gas services in Yeadon and Leeds">
        <img src="/images/stock/modern-autonomous-heating-system-boiler-room.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Gas Services</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.heroHeading}>
              Gas Safe Engineers in<br />Yeadon &amp; Leeds
            </h1>
            <p className={styles.heroSub}>
              Fully accredited Gas Safe registered engineers covering domestic, commercial and industrial
              gas work - boiler servicing and installations.
              Serving Yeadon and surrounding areas across Leeds.
            </p>
            <div className={styles.heroCTA}>
              <Button to="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="tel:01943662713" variant="secondaryLight">Call 01943 662713</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GAS SAFE */}
      <section className={styles.trustRow} aria-label="Gas Safe registration">
        <div className="container">
          <div className={styles.trustPair}>

            {/* Gas Safe card */}
            <div className={styles.gasSafeBox}>
              <div className={styles.gasSafeLeft}>
                <img src="/images/logo-gassafe.svg" alt="Gas Safe Registered" style={{ height: 60, width: 'auto', display: 'block' }} />
              </div>
              <div className={styles.gasSafeRight}>
                <h2 className={styles.gasSafeHeading}>Gas Safe Registered</h2>
                <p className={styles.gasSafeReg}>Registration details available on request</p>
                <p className={styles.gasSafeText}>
                  All our engineers are fully registered on the Gas Safe Register.
                  Verify us at <strong>GasSafeRegister.co.uk</strong> anytime.
                </p>
                <a
                  href="https://www.gassaferegister.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gasSafeLink}
                >
                  Verify our registration →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <section style={{ background: 'var(--color-white)', padding: '1.75rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }} aria-label="Approved gas brands">
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

      {/* WORK GALLERY */}
      <section className={styles.gallerySection} aria-label="Examples of our gas engineering work">
        <div className="container">
          <WorkGallery images={galleryImages} />
        </div>
      </section>

      {/* GAS SERVICES GRID */}
      <section
        className={styles.servicesSection}
        aria-label="Gas services we offer"
        ref={cardsRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Our Gas Services</h2>
            <p className={styles.sectionSub}>
              Gas engineering services for domestic, commercial and industrial
              customers across Yeadon and Leeds. Worcester Bosch approved installers.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            {gasServices.map((svc, i) => (
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

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Frequently asked questions about gas services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
            <p className={styles.sectionSub}>
              Common questions about our gas services, Gas Safe registration, and boiler work.
            </p>
          </div>
          <div className={styles.faqWrap}>
            <FAQAccordion items={gasFAQs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Need a Gas Engineer in Yeadon or Leeds?"
        subtext="Domestic, commercial and industrial gas work — call us for Worcester Bosch boiler packages or gas safety certificates across Yeadon, Guiseley, Rawdon, Horsforth and Leeds."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />
    </>
  )
}
