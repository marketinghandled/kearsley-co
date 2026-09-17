import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CTABanner from '../components/ui/CTABanner'
import { areas } from '../data/index'
import styles from './Areas.module.css'

const areaDetails = [
  {
    name: 'Yeadon',
    slug: 'yeadon',
    desc: 'Our home base — LS19. We cover all of Yeadon for plumbing, gas and air conditioning services. As locals ourselves, we take particular pride in looking after our own community with fast, reliable service.',
  },
  {
    name: 'Guiseley',
    slug: 'guiseley',
    desc: 'Right next door to our base in Yeadon, we cover all of Guiseley for plumbing, gas and air conditioning services. Worcester Bosch boiler packages, AC installation, and full bathroom fitting available.',
  },
  {
    name: 'Rawdon',
    slug: 'rawdon',
    desc: 'We cover Rawdon for all plumbing, gas and air conditioning services. Same-day attendance available — no call-out charge applies in your area.',
  },
  {
    name: 'Horsforth',
    slug: 'horsforth',
    desc: 'We cover all of Horsforth for plumbing, gas and air conditioning services. Gas Safe registered engineers on hand for boiler work, heating systems, and plumbing repairs.',
  },
  {
    name: 'Otley',
    slug: 'otley',
    desc: 'We cover Otley for all plumbing, gas and air conditioning services. From general repairs to Worcester Bosch boiler installations, our team is ready to help.',
  },
  {
    name: 'Baildon',
    slug: 'baildon',
    desc: 'We cover Baildon for all plumbing, gas and air conditioning services. Call us now for a fast response — most jobs attended within 2 hours of your call.',
  },
  {
    name: 'Menston',
    slug: 'menston',
    desc: 'We cover Menston for all plumbing, gas and air conditioning services. AC installation, boiler servicing, and full bathroom fitting available in your area.',
  },
  {
    name: 'Headingley',
    slug: 'headingley',
    desc: "We cover Headingley for all plumbing, gas and air conditioning services. Whether you're a homeowner or landlord in the Headingley area, call us for a fast response.",
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kearsley & Co Gas Services',
  url: 'https://www.kearsleygs.co.uk',
  telephone: '01943662713',
  areaServed: areas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
}

export default function Areas() {
  const reduced = useReducedMotion()
  const pillsRef = useRef(null)
  const areasRef = useRef(null)
  const pillsInView = useInView(pillsRef, { once: true, margin: '-80px' })
  const areasInView = useInView(areasRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>Areas We Cover | Yeadon, Leeds &amp; Surrounding Areas | Kearsley &amp; Co</title>
        <meta
          name="description"
          content="Kearsley & Co cover Yeadon, Guiseley, Rawdon, Horsforth, Otley, Baildon, Menston, Shipley and all of north-west Leeds. Fast response plumbing, gas and AC services. No call-out charges."
        />
        <meta property="og:title" content="Areas We Cover | Kearsley & Co Gas Services" />
        <meta
          property="og:description"
          content="Plumbing, gas and air conditioning services across Yeadon, Leeds and surrounding areas. Fast response, no call-out charge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/areas" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/areas" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Areas we serve in Leeds">
        <img src="/images/stock/closeup-shot-pipe-wrench-screwing-nut.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroContent}>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Serving Yeadon, Leeds<br />&amp; Surrounding Areas</h1>
              <p className={styles.heroSub}>
                Based in Yeadon LS19, we cover Guiseley, Rawdon, Horsforth, Otley, Baildon,
                Menston and all of north-west Leeds. Fast response — most jobs attended within
                2 hours of your call.
              </p>
              <div className={styles.heroCTAs}>
                <a href="tel:01943662713" className={styles.phoneBtn}>
                  Call 01943 662713
                </a>
                <Link to="/contact" className={styles.quoteBtn}>Get a Free Quote</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COVERAGE INTRO */}
      <section className={styles.introSection} aria-label="Coverage overview">
        <div className="container">
          <div className={styles.introInner}>
            <div className={styles.introText}>
              <h2>Coverage Across Yeadon &amp; North-West Leeds</h2>
              <p>
                Based in Yeadon LS19, we cover north-west Leeds and surrounding towns —
                from Otley in the north to Armley in the south, and from Baildon and Shipley
                in the west to Headingley in the east. Fast response times mean most jobs are
                attended within 2 hours of your call.
              </p>
              <p>
                All areas below are within our standard coverage zone with no additional
                travel charges. If you're not sure whether we cover your specific postcode,
                just give us a call — we're happy to help.
              </p>
            </div>
            <div className={styles.introStats}>
              <div className={styles.introStat}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>Areas covered</span>
              </div>
              <div className={styles.introStat}>
                <span className={styles.statNum}>2hrs</span>
                <span className={styles.statLabel}>Average response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREA PILLS */}
      <section
        className={styles.pillsSection}
        aria-label="All areas we cover"
        ref={pillsRef}
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>All Areas We Cover</h2>
            <p className={styles.sectionSub}>
              Click any area for more details, or{' '}
              <a href="tel:01943662713" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                call us
              </a>{' '}
              to confirm your postcode is within our zone.
            </p>
          </div>
          <div className={styles.pillsGrid}>
            {areas.map((area, i) => (
              <motion.a
                key={area}
                href={`#area-${area.toLowerCase().replace(/ /g, '-')}`}
                className={styles.areaPill}
                initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                animate={pillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                aria-label={`Jump to ${area} section`}
              >
                📍 {area}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* AREA DESCRIPTIONS */}
      <section
        className={styles.areaDescSection}
        aria-label="Detailed area coverage"
        ref={areasRef}
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>Our Coverage by Area</h2>
            <p className={styles.sectionSub}>
              Plumbing, gas and air conditioning services available in all these locations.
            </p>
          </div>
          <div className={styles.areaGrid}>
            {areaDetails.map((area, i) => (
              <motion.div
                key={area.slug}
                id={`area-${area.slug}`}
                className={styles.areaCard}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={areasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <h3>{area.name}</h3>
                <p>{area.desc}</p>
                <a href="tel:01943662713" className={styles.areaCallLink}>
                  Call now for {area.name} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className={styles.mapSection} aria-label="Service area map">
        <div className="container">
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapContent}>
              <span className={styles.mapPin} aria-hidden="true">📍</span>
              <h3>We Cover the Whole of North-West Leeds</h3>
              <p>
                Based in Yeadon LS19 — covering a radius of approximately 8 miles
                across west and north Leeds. Call us to confirm your area.
              </p>
              <a href="tel:01943662713" className={styles.mapCTA}>
                Call 01943 662713
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section className={styles.uncertainSection} aria-label="Area coverage query">
        <div className="container">
          <div className={styles.uncertainInner}>
            <h2>Not Sure if We Cover Your Area?</h2>
            <p>
              Just call us — we're happy to confirm whether your postcode is in our coverage
              zone. Most calls are answered within 30 seconds.
            </p>
            <div className={styles.uncertainCTAs}>
              <a href="tel:01943662713" className={styles.bigPhoneLink}>
                01943 662713
              </a>
              <Link to="/contact" className={styles.formLink}>
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Book a Plumber or Gas Engineer in Yeadon or Leeds Today"
        subtext="Fast response across Yeadon, Guiseley, Rawdon, Horsforth and all of north-west Leeds. No call-out charges."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />
    </>
  )
}
