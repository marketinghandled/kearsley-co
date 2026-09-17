import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useReducedMotion } from '../hooks/useReducedMotion'
import ServiceCard from '../components/ui/ServiceCard'
import WhyUs from '../components/ui/WhyUs'
import HowItWorks from '../components/ui/HowItWorks'
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel'
import CTABanner from '../components/ui/CTABanner'
import Button from '../components/ui/Button'
import { testimonials } from '../data/index'
import styles from './Home.module.css'

const SHOW_TESTIMONIALS = false

const quickSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^(\+44|0)[0-9]{9,10}$/, 'Please enter a valid UK phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.enum(['Plumbing', 'Gas Services', 'Air Conditioning', 'Other'], {
    required_error: 'Please select a service',
  }),
  message: z.string().min(10, 'Please provide a brief description (at least 10 characters)'),
})

const serviceCards = [
  {
    title: 'Plumbing Services',
    description:
      'Domestic, commercial and industrial plumbing — from repairs to full installations across Leeds.',
    href: '/plumbing',
    image: '/images/pipes1.jpg',
  },
  {
    title: 'Gas Services',
    description:
      'Boiler servicing, gas safety certificates, and installations for homes, businesses and industrial premises — from Gas Safe registered engineers.',
    href: '/gas-services',
    image: '/images/boiler-best1.jpg',
    imagePosition: 'center 85%',
  },
  {
    title: 'Air Conditioning',
    description:
      'Supply, installation and servicing of domestic, commercial and industrial AC systems across Leeds.',
    href: '/air-conditioning',
    image: '/images/stock/air-con-lounge.jpg',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kearsley & Co Gas Services',
  image: 'https://www.kearsleygs.co.uk/favicon.svg',
  description:
    'Gas Safe registered plumbers and gas engineers in Yeadon, Leeds. Domestic, commercial and industrial — Worcester Bosch boiler packages, gas servicing, air conditioning. Fast response, no call-out charges.',
  url: 'https://www.kearsleygs.co.uk',
  telephone: '01943662713',
  email: 'info@kearsleygs.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Yeadon',
    addressLocality: 'Leeds',
    postalCode: 'LS19',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.8676',
    longitude: '-1.6837',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: '££',
  areaServed: 'Yeadon, Guiseley, Rawdon, Horsforth, Otley, Baildon, Leeds, West Yorkshire',
  hasCredential: 'Gas Safe Registered',
  sameAs: ['https://www.google.com/maps'],
}

export default function Home() {
  const reduced = useReducedMotion()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
const formRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(quickSchema) })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Kearsley &amp; Co Gas Services | Plumber, Gas &amp; Air Conditioning Engineer in Yeadon, Leeds</title>
        <meta
          name="description"
          content="Gas Safe registered plumbers and gas engineers in Yeadon, Leeds. Domestic, commercial and industrial — Worcester Bosch boiler packages, gas servicing, air conditioning. Fast response, no call-out charges. Serving Yeadon, Guiseley, Rawdon, Horsforth and across Leeds."
        />
        <meta property="og:title" content="Kearsley & Co Gas Services | Plumber, Gas & Air Conditioning Engineer in Yeadon, Leeds" />
        <meta
          property="og:description"
          content="Gas Safe registered plumbers and gas engineers in Yeadon, Leeds. Worcester Bosch boiler packages, gas servicing, air conditioning. Fast response, no call-out charges."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* HERO */}
      <section
        className={styles.hero}
        ref={heroRef}
        aria-label="Hero — Gas and plumbing services in Yeadon Leeds"
      >
        {/* Left: logo + copy — uses container-aligned padding */}
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <svg aria-hidden="true" className={styles.heroIcon} viewBox="9 36 1481 1427" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M 247.757812 1015.347656 C 257.753906 912.449219 288.113281 811.65625 336.054688 720.117188 C 386.386719 623.992188 458.722656 542.167969 524.132812 456.320312 C 568.554688 397.996094 619.539062 341.238281 651.488281 274.65625 C 688.527344 197.425781 683.671875 109.65625 624.824219 46.898438 C 275.445312 106.382812 9.453125 410.574219 9.453125 776.898438 C 9.453125 1087.648438 200.859375 1353.683594 472.195312 1463.570312 C 325.667969 1371.539062 231.289062 1184.769531 247.757812 1015.347656" />
              <path fill="currentColor" d="M 1114.523438 1099.78125 C 1110.507812 1184.628906 1053.570312 1262.246094 978.199219 1301.414062 C 902.816406 1340.574219 821.359375 1347.3125 730.078125 1321.355469 C 563.886719 1274.085938 504.304688 1146.160156 492.328125 1083.058594 C 446.648438 842.261719 553.824219 705.390625 598.703125 647.84375 C 635.003906 601.316406 717.097656 515.34375 784.429688 424.101562 C 840.679688 347.910156 862.152344 272.007812 848.683594 214.550781 C 848.703125 214.574219 848.730469 214.621094 848.730469 214.640625 C 899.5625 292.6875 908.246094 408.898438 827.875 532.722656 C 804.445312 568.808594 768.480469 615.265625 705.148438 747.402344 C 692.183594 774.441406 678.753906 816.042969 679.75 846.019531 C 680.75 875.972656 699.890625 906.582031 729 913.796875 C 757.058594 920.765625 787.148438 904.433594 803.21875 880.382812 C 819.296875 856.339844 823.621094 826.277344 823.511719 797.363281 C 848.664062 822.257812 848.835938 864.265625 833.980469 896.375 C 819.125 928.480469 792.335938 953.175781 766.898438 977.769531 C 741.488281 1002.359375 715.980469 1028.972656 705.035156 1062.59375 C 690.832031 1106.148438 704.859375 1156.695312 737.144531 1189.191406 C 752.410156 1204.570312 771.335938 1215.890625 791.816406 1222.863281 C 791.992188 1222.929688 792.144531 1222.96875 792.316406 1223.011719 C 814.992188 1230.703125 839.566406 1233.070312 863.28125 1229.835938 C 919.15625 1222.230469 969.785156 1183.675781 991.96875 1131.84375 C 1014.625 1078.972656 1008.039062 1018.34375 995.664062 962.148438 C 983.28125 905.976562 965.402344 850.0625 966.636719 792.542969 C 967.636719 745.96875 984.386719 696.785156 1018.207031 666.464844 C 977.257812 730.789062 1023.597656 821.433594 1053.613281 888.945312 C 1083.632812 956.460938 1117.996094 1025.96875 1114.523438 1099.78125 Z M 750.007812 36.34375 C 709.917969 36.34375 670.570312 39.546875 632.203125 45.679688 C 655.945312 58.859375 698.003906 86.847656 719.589844 129.070312 C 740.207031 169.414062 742.636719 217.632812 735.921875 262.121094 C 711.070312 426.710938 572.726562 542.734375 496.132812 682.996094 C 412.023438 837.074219 376.003906 1051.734375 470.433594 1209.066406 C 515.203125 1283.660156 584.675781 1339.859375 664.960938 1372.445312 C 810.863281 1431.679688 1023.835938 1398.789062 1118.523438 1262.71875 C 1167.113281 1192.929688 1195.007812 1089.789062 1155.519531 1009.523438 C 1211.925781 1093.3125 1214.1875 1234.398438 1170.003906 1325.21875 C 1154.125 1357.886719 1133.355469 1388.101562 1108.445312 1414.515625 C 1100.679688 1422.753906 1092.605469 1430.53125 1084.265625 1437.890625 C 1325.328125 1315.742188 1490.566406 1065.625 1490.566406 776.898438 C 1490.566406 367.902344 1159.007812 36.34375 750.007812 36.34375" />
            </svg>
            Gas Safe Registered · Yeadon, Leeds
          </div>
          <h1 className={styles.heroHeading}>
            Gas, Plumbing<br />&amp; Air Conditioning Experts
          </h1>
          <p className={styles.heroSub}>
            Kearsley &amp; Co are a trusted, Gas Safe registered company based in Yeadon — serving domestic, commercial and industrial customers across Guiseley, Rawdon, Horsforth and all of Leeds.
          </p>
          <div className={styles.heroCTA}>
            <Button to="/contact" variant="primary">Get a Free Quote</Button>
            <Button to="tel:01943662713" variant="secondaryLight">Call Us</Button>
          </div>
          <ul className={styles.heroTrust} aria-label="Key trust points">
            <li className={styles.heroTrustItem}>
              <span className={styles.heroTrustIcon} aria-hidden="true">✓</span>
              Gas Safe Registered
            </li>
            <li className={styles.heroTrustItem}>
              <span className={styles.heroTrustIcon} aria-hidden="true">✓</span>
              20+ years of experience
            </li>
          </ul>
        </div>

        {/* Right: mosaic — one image per service (air con, boiler, plumbing) */}
        <div className={styles.heroImageGrid} aria-hidden="true">
          <div className={styles.heroImageCell}>
            <img src="/images/boiler-best1.jpg" alt="" />
          </div>
          <div className={styles.heroImageCell}>
            <img src="/images/boiler-install1.jpg" alt="" />
          </div>
          <div className={styles.heroImageCell}>
            <img src="/images/stock/air-con-lounge.jpg" alt="" />
          </div>
        </div>
      </section>


      {/* BRANDS / TRUST STRIP */}
      <section className={styles.brandsStrip} aria-label="Approved brands and accreditations">
        <div className="container">
          <p className={styles.brandsLabel}>Approved Installers &amp; Registered Engineers</p>
          <div className={styles.brandsRow}>
            {[
              '/images/logo-gassafe.svg',
              '/images/logo-worcesterbosch.png',
              '/images/valliant-logo.webp',
              '/images/samsunglogotransparent.png',
              '/images/lglogotrans.png',
              '/images/hitachi-2-logo-png-transparent.png',
            ].map((src) => (
              <img key={src} src={src} alt="" className={styles.brandLogo} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section
        className={`section-pad ${styles.services}`}
        aria-label="Our services"
        ref={servicesRef}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>What We Do</h2>
            <p className={styles.sectionSub}>
              Everything you need under one roof: plumbing, gas, and air conditioning
              for domestic, commercial and industrial customers across Leeds.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                style={{ height: '100%' }}
              >
                <ServiceCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS COVERED */}
      <section className={`section-pad ${styles.areasSection}`} aria-label="Areas we cover">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Areas Covered</h2>
          </div>
          <div className={styles.areasLayout}>
            <div className={styles.areasContent}>
              <p className={styles.areasIntro}>
                Kearsley &amp; Co are experienced gas engineers and plumbers with the knowledge and expertise to install, repair and service your gas, plumbing and air conditining systems throughout Yeadon and across Leeds. Our friendly team are available for all jobs in locations such as:
              </p>
              <div className={styles.areaPills}>
                {[
                  'Yeadon', 'Guiseley', 'Rawdon', 'Horsforth',
                  'Otley', 'Baildon', 'Pudsey', 'Shipley',
                  'Headingley', 'Kirkstall', 'Chapel Allerton',
                  'Bramhope', 'Calverley', 'Adel', 'Cookridge', 'Ilkley',
                ].map((area) => (
                  <span key={area} className={styles.areaPill}>{area}</span>
                ))}
              </div>
              
              <div className={styles.areasCTA}>
                <Button to="/contact" variant="primary">Get a Free Quote</Button>
                <Button to="tel:01943662713" variant="secondary">Call Us</Button>
              </div>
            </div>
            <div className={styles.areasMap}>
              <iframe
                title="Areas covered by Kearsley &amp; Co Gas Services"
                src="https://maps.google.com/maps?q=53.865455,-1.685849&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <WhyUs />


      {/* TESTIMONIALS — hidden for now, not ready to show yet */}
      {SHOW_TESTIMONIALS && (
        <section
          className={`section-pad ${styles.testimonials}`}
          aria-label="Customer testimonials"
        >
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>What Our Customers Say</h2>
              <p className={styles.sectionSub}>
                Real reviews from customers across Horsforth and Leeds.
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}


      {/* CTA BANNER */}
      <CTABanner
        heading="Need a Gas Engineer in Yeadon or Leeds?"
        subtext="Domestic, commercial and industrial work — call us now or send an enquiry for a same day response across Yeadon, Guiseley, Rawdon, Horsforth and all of Leeds."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Call Now', href: 'tel:01943662713' }}
        variant="navy"
      />

      {/* QUICK CONTACT FORM */}
      <section
        className={`section-pad ${styles.quickForm}`}
        aria-label="Quick contact form"
        ref={formRef}
      >
        <div className="container">
          <div className={styles.formWrap}>
            <div className={styles.formHeader}>
              <h2 className={styles.sectionHeading}>Get a Free Quote</h2>
              <p className={styles.sectionSub}>
                Fill in your details and we'll get back to you as soon as possible.
              </p>
            </div>

            {submitted ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                role="alert"
              >
                <div className={styles.successMark} aria-hidden="true">✓</div>
                <h3>Thank you! We'll be in touch soon.</h3>
                <p>We've received your enquiry and will call or email you shortly.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="hf-name" className={styles.label}>Your Name *</label>
                    <input
                      id="hf-name"
                      type="text"
                      className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
                      placeholder="John Smith"
                      autoComplete="name"
                      {...register('name')}
                    />
                    {errors.name && <span className={styles.error} role="alert">{errors.name.message}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="hf-phone" className={styles.label}>Phone Number *</label>
                    <input
                      id="hf-phone"
                      type="tel"
                      className={[styles.input, errors.phone ? styles.inputError : ''].join(' ')}
                      placeholder="07700 900000"
                      autoComplete="tel"
                      {...register('phone')}
                    />
                    {errors.phone && <span className={styles.error} role="alert">{errors.phone.message}</span>}
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="hf-email" className={styles.label}>Email Address *</label>
                    <input
                      id="hf-email"
                      type="email"
                      className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...register('email')}
                    />
                    {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="hf-service" className={styles.label}>Service Required *</label>
                    <select
                      id="hf-service"
                      className={[styles.input, styles.select, errors.service ? styles.inputError : ''].join(' ')}
                      {...register('service')}
                    >
                      <option value="">Select a service…</option>
                      <option>Plumbing</option>
                      <option>Gas Services</option>
                      <option>Air Conditioning</option>
                      <option>Other</option>
                    </select>
                    {errors.service && <span className={styles.error} role="alert">{errors.service.message}</span>}
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hf-message" className={styles.label}>Brief Description *</label>
                  <textarea
                    id="hf-message"
                    rows={4}
                    className={[styles.input, styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
                    placeholder="Tell us a bit about what you need…"
                    {...register('message')}
                  />
                  {errors.message && <span className={styles.error} role="alert">{errors.message.message}</span>}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
