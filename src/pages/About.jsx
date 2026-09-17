import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CTABanner from '../components/ui/CTABanner'
import Button from '../components/ui/Button'
import styles from './About.module.css'

const brandLogos = [
  { src: '/images/logo-worcesterbosch.png', alt: 'Worcester Bosch', large: true },
  { src: '/images/valliant-logo.webp', alt: 'Vaillant' },
  { src: '/images/samsunglogotransparent.png', alt: 'Samsung' },
  { src: '/images/lglogotrans.png', alt: 'LG' },
  { src: '/images/hitachi-2-logo-png-transparent.png', alt: 'Hitachi' },
]

const SHOW_TEAM = false

const team = [
  {
    initials: 'JK',
    bg: '#274069',
    name: 'James Kearsley',
    role: 'Lead Gas Engineer & Founder',
    bio:
      'Gas Safe registered engineer specialising in domestic and commercial gas work across West Yorkshire. James founded Kearsley & Co with a simple belief: trades work should be honest, fairly priced, and done right first time.',
  },
  {
    initials: 'MT',
    bg: '#3A5A8A',
    name: 'Mike Thompson',
    role: 'Senior Plumber',
    bio:
      'Fully qualified plumber specialising in bathroom installations and plumbing repairs. Mike is known for his careful, tidy work and ability to solve complex plumbing problems that others have failed to fix.',
  },
]

export default function About() {
  const reduced = useReducedMotion()
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const accredRef = useRef(null)
  const { scrollYProgress: gasSafeScroll } = useScroll({ target: valuesRef, offset: ['start end', 'end start'] })
  const badgeY = useTransform(gasSafeScroll, [0, 1], [-20, 20])

  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' })
  const accredInView = useInView(accredRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>About Us | Kearsley &amp; Co Gas Services — Yeadon, Leeds</title>
        <meta
          name="description"
          content="Meet the team behind Kearsley & Co Gas Services. Local engineers with 20+ years experience based in Yeadon, serving Leeds and surrounding areas. Gas Safe registered, honest pricing."
        />
        <meta property="og:title" content="About Us | Kearsley & Co Gas Services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/about" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/about" />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="About Kearsley and Co">
        <img src="/images/stock/close-up-mechanic-working.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">About</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.heroContent}
          >
            <h1 className={styles.heroHeading}>About Kearsley &amp; Co Gas Services</h1>
            <p className={styles.heroSub}>
              Local engineers. Honest pricing. Quality work.
            </p>
            <div className={styles.heroCTA}>
              <Button to="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="tel:01943662713" variant="secondaryLight">Call 01943 662713</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.storySection} aria-label="Our company story">
        <div className="container">
          <div className={styles.storyInner}>
            <h2 className={styles.storyHeading}>Yeadon and Leeds Gas Engineers</h2>
            <div className={styles.storyText}>
              <p>
                We're a local company based in Yeadon, staffed by engineers with over 20 years
                of experience who live and work in the communities we serve. We work across
                domestic, commercial and industrial sectors - from home boilers to commercial gas
                installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAS SAFE */}
      <section
        className={styles.gasSafeSection}
        aria-label="Gas Safe Registration"
        ref={valuesRef}
      >
        <div className="container">
          <div className={styles.gasSafeInner}>
            <motion.div
              className={styles.gasSafeImageCol}
              initial={reduced ? false : { opacity: 0, x: -24 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.gasSafeImgWrap}>
                <img src="/images/boiler1.jpg" alt="Worcester Bosch boiler installed by Kearsley & Co" />
              </div>
              <motion.div className={styles.gasSafeBadge} style={reduced ? {} : { y: badgeY }}>
                <img src="/images/logo-gassafe.svg" alt="Gas Safe Register" />
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.gasSafeTextCol}
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className={styles.gasSafeHeading}>Gas Safe Registered Engineers</h2>
              <p className={styles.gasSafeIntro}>
                Kearsley &amp; Co Gas Services takes gas safety seriously. <br/> We are on the Gas Safe
                Register and carry their official identity card.
              </p>
              <p className={styles.gasSafeBody}>
                Gas Safe Register is the official gas safety organisation in Great Britain. It
                replaced CORGI on 1st April 2009. Gas Safe Register is responsible for the
                registration and regulation of gas engineers. Membership is mandatory for any
                company or engineer working with gas appliances.
              </p>
              <ul className={styles.gasSafeList}>
                <li>All our engineers are fully Gas Safe registered</li>
                <li>It is illegal for anyone not on the Gas Safe Register to carry out gas work</li>
                <li>We issue Gas Safety certificates on all relevant work</li>
                <li>Verify us at GasSafeRegister.co.uk</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section
        className={styles.brandsSection}
        aria-label="Brands we install"
        ref={accredRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>What Brands We Install</h2>
            <p className={styles.sectionSub}>
              We work with leading brands so you get the best equipment, backed by manufacturer warranties.
            </p>
          </div>
          <div className={styles.brandsGrid}>
            {brandLogos.map((brand, i) => (
              <motion.div
                key={brand.src}
                className={styles.brandLogoWrap}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={accredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <img src={brand.src} alt={brand.alt} className={`${styles.brandLogo}${brand.large ? ` ${styles.brandLogoLg}` : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — hidden for now, not ready to show yet */}
      {SHOW_TEAM && (
        <section
          className={styles.teamSection}
          aria-label="Our team"
          ref={teamRef}
        >
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>Meet the Team</h2>
              <p className={styles.sectionSub}>
                The engineers behind Kearsley &amp; Co.
              </p>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  className={styles.teamCard}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                >
                  <div
                    className={styles.avatar}
                    style={{ background: member.bg }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        heading="Ready to Work With Us?"
        subtext="Get in touch today for a free, no-obligation quote. We'd love to help."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />
    </>
  )
}
