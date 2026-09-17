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
import { acServices, acFAQs } from '../data/index'
import styles from './AirConditioning.module.css'

const brands = [
  { name: 'Worcester Bosch', logo: '/images/logo-worcesterbosch.png' },
  { name: 'Samsung', logo: '/images/samsunglogotransparent.png' },
  { name: 'LG', logo: '/images/lglogotrans.png' },
  { name: 'Hitachi', logo: '/images/hitachi-2-logo-png-transparent.png' },
]

const galleryImages = [
  { src: '/images/stock/Air-con.jpeg', alt: 'Air conditioning unit installed by Kearsley & Co', caption: 'Split system installs' },
  { src: '/images/stock/air-conditioning-unit.webp', alt: 'Wall-mounted air conditioning unit', caption: 'Wall-mounted units' },
  { src: '/images/stock/air-conditioner-mounted-white-wall.jpg', alt: 'Air conditioning unit mounted on a white wall', caption: 'Clean, tidy finish' },
  { src: '/images/stock/air-con-lounge.jpg', alt: 'Air conditioning unit in a lounge', caption: 'Residential comfort' },
]

export default function AirConditioning() {
  const reduced = useReducedMotion()
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>Air Conditioning Yeadon &amp; Leeds | Worcester Bosch, Samsung, LG, Hitachi | Kearsley &amp; Co</title>
        <meta
          name="description"
          content="Professional air conditioning installation, servicing and maintenance in Yeadon and Leeds. Worcester Bosch, Samsung, LG, Hitachi installers. Residential and commercial AC across Yeadon, Guiseley, Rawdon, Horsforth and Leeds."
        />
        <meta property="og:title" content="Air Conditioning Yeadon & Leeds | Worcester Bosch, Samsung, LG, Hitachi | Kearsley & Co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/air-conditioning" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/air-conditioning" />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Air conditioning services in Leeds">
        <img src="/images/stock/Air-con.jpeg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Air Conditioning</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.heroHeading}>
              Air Conditioning Installation<br />&amp; Servicing in Yeadon &amp; Leeds
            </h1>
            <p className={styles.heroSub}>
              Domestic, commercial and industrial air conditioning - Kearsley &amp; Co install and
              service Worcester Bosch, Samsung, LG and Hitachi AC systems across Yeadon and Leeds.
            </p>
            <div className={styles.heroCTA}>
              <Button to="/contact" variant="primary">Book a Free Survey</Button>
              <Button href="tel:01943662713" variant="secondaryLight">Call 01943 662713</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}

      <section className={styles.introSection} aria-label="About our AC services">
        <div className="container">
          <div className={styles.introInner}>
            <p className={styles.introText}>
              Whether you need a domestic split system, a commercial multi-zone installation, or
              climate control for an industrial premises - Kearsley &amp; Co have the expertise to
              design, supply and install the right solution.
            </p>
            <div className={styles.introBrands}>
              {brands.map((brand, i) => (
                <motion.div
                  key={brand.name}
                  className={styles.brandBadge}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <img src={brand.logo} alt={brand.name} style={{ height: 44, width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className={styles.gallerySection} aria-label="Examples of our air conditioning work">
        <div className="container">
          <WorkGallery images={galleryImages} aspect="3 / 2" />
        </div>
      </section>

      {/* AC SERVICES */}
      <section
        className={styles.servicesSection}
        aria-label="AC services we offer"
        ref={cardsRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>AC Services We Offer</h2>
            <p className={styles.sectionSub}>
              From single room domestic split systems to large-scale commercial and industrial installations —
              we design, supply, install and maintain AC systems across Yeadon, Leeds and surrounding areas.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            {acServices.map((svc, i) => (
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

      {/* SEASONAL STRIP */}
      <section className={styles.seasonalStrip} aria-label="Book now promotion">
        <div className="container">
          <div className={styles.seasonalInner}>
            <h2 className={styles.seasonalHeading}>Beat the Heat This Summer</h2>
            <p className={styles.seasonalText}>
              Book your AC installation now and be ready before the warm weather arrives.
              We offer free site surveys with no obligation — find out exactly what system
              you need and how much it will cost before committing to anything.
            </p>
            <Button to="/contact" variant="primary">
              Book a Free Survey
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Air conditioning FAQs">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Air Conditioning FAQs</h2>
            <p className={styles.sectionSub}>
              Common questions about air conditioning installation and servicing in Leeds.
            </p>
          </div>
          <div className={styles.faqWrap}>
            <FAQAccordion items={acFAQs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Install Air Conditioning in Yeadon or Leeds?"
        subtext="Domestic, commercial and industrial AC — book a free, no-obligation site survey and get a fixed price for your Worcester Bosch, Samsung, LG or Hitachi installation."
        primaryCTA={{ label: 'Book a Free Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />
    </>
  )
}
