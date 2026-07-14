import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Contact.module.css'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .regex(/^(\+44|0)[0-9]{9,10}$/, 'Please enter a valid UK phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.enum(['Plumbing', 'Gas Services', 'Air Conditioning', 'Emergency', 'Other'], {
    required_error: 'Please select a service',
  }),
  message: z
    .string()
    .min(10, 'Please provide a brief description (at least 10 characters)'),
  hearAboutUs: z.string().optional(),
})

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kearsley & Co Gas Services',
  telephone: '01130000000',
  email: 'info@kearsleyco.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yeadon',
    postalCode: 'LS19',
    addressRegion: 'West Yorkshire',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '01130000000',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'Leeds',
  },
}

const hours = [
  { day: 'Monday – Friday', time: '7:00am – 7:00pm' },
  { day: 'Saturday', time: '8:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Emergency', time: '24/7' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const reduced = useReducedMotion()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700))
    setSubmittedName(data.name)
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Kearsley &amp; Co Gas Services — Yeadon, Leeds</title>
        <meta
          name="description"
          content="Contact Kearsley & Co Gas Services for a free quote on plumbing, gas, or air conditioning in Yeadon and Leeds. Call 0113 XXX XXXX or send a message."
        />
        <link rel="canonical" href="https://www.kearsleyco.co.uk/contact" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className={styles.hero} aria-label="Contact Kearsley and Co">
        <img src="/images/stock/piping-with-taps.jpg" alt="" className={styles.heroBgImg} fetchpriority="high" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Contact</span>
          </nav>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.heroHeading}>Get in Touch</h1>
            <p className={styles.heroSub}>
              Call us now or fill in the form — we'll get back to you within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      <section className={styles.contactSection} aria-label="Contact form and information">
        <div className="container">
          <div className={styles.layout}>

            {/* LEFT: FORM */}
            <div className={styles.formCol}>
              <h2 className={styles.colHeading}>Send an Enquiry</h2>

              {submitted ? (
                <motion.div
                  className={styles.successState}
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  role="alert"
                >
                  {/* Animated checkmark */}
                  <div className={styles.checkmarkWrap}>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="32" cy="32" r="30" stroke="#16a34a" strokeWidth="3" />
                      <motion.path
                        d="M20 32 L29 41 L44 23"
                        stroke="#16a34a"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={reduced ? false : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                      />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>
                    Thank you, {submittedName}!
                  </h3>
                  <p className={styles.successText}>
                    We'll be in touch within 2 hours. For urgent enquiries call us directly on{' '}
                    <a href="tel:01130000000">0113 XXX XXXX</a>.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.form}
                  noValidate
                >
                  {/* Name + Phone */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
                        placeholder="John Smith"
                        {...register('name')}
                      />
                      {errors.name && (
                        <span className={styles.error} role="alert">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className={[styles.input, errors.phone ? styles.inputError : ''].join(' ')}
                        placeholder="07700 900000"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <span className={styles.error} role="alert">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email + Service */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
                        placeholder="you@example.com"
                        {...register('email')}
                      />
                      {errors.email && (
                        <span className={styles.error} role="alert">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="service" className={styles.label}>
                        Service Required *
                      </label>
                      <select
                        id="service"
                        className={[styles.input, styles.select, errors.service ? styles.inputError : ''].join(' ')}
                        {...register('service')}
                      >
                        <option value="">Select a service…</option>
                        <option>Plumbing</option>
                        <option>Gas Services</option>
                        <option>Air Conditioning</option>
                        <option>Emergency</option>
                        <option>Other</option>
                      </select>
                      {errors.service && (
                        <span className={styles.error} role="alert">
                          {errors.service.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Brief Description *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={[styles.input, styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
                      placeholder="Tell us what you need and we'll get back to you with a free quote…"
                      {...register('message')}
                    />
                    {errors.message && (
                      <span className={styles.error} role="alert">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending…' : 'Send Enquiry →'}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: INFO */}
            <div className={styles.infoCol}>
              <h2 className={styles.colHeading}>Contact Information</h2>

              <div className={styles.infoCards}>
                {/* Phone */}
                <div className={styles.infoCard}>
                  
                  <div className={styles.infoContent}>
                    <strong>Phone</strong>
                    <a href="tel:01130000000" className={styles.infoValue}>
                      0113 XXX XXXX
                    </a>
                    <span className={styles.infoNote}>For emergencies call anytime — 24/7</span>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.infoCard}>
                  
                  <div className={styles.infoContent}>
                    <strong>Email</strong>
                    <a href="mailto:info@kearsleyco.co.uk" className={styles.infoValue}>
                      info@kearsleyco.co.uk
                    </a>
                    <span className={styles.infoNote}>We reply within 2 hours during business hours</span>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.infoCard}>
                  
                  <div className={styles.infoContent}>
                    <strong>Location</strong>
                    <span className={styles.infoValue}>Yeadon, Leeds, LS19</span>
                    <span className={styles.infoNote}>West Yorkshire, United Kingdom</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.hoursCard}>
                <div className={styles.hoursHeader}>
                  
                  <h3>Opening Hours</h3>
                </div>
                <table className={styles.hoursTable}>
                  <tbody>
                    {hours.map((row) => (
                      <tr key={row.day} className={row.day === 'Emergency' ? styles.emergencyRow : ''}>
                        <td className={styles.dayCell}>{row.day}</td>
                        <td className={styles.timeCell}>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              {/* Map */}
              <div className={styles.mapCard}>
                <iframe
                  title="Kearsley &amp; Co Gas Services location"
                  src="https://maps.google.com/maps?q=53.865455,-1.685849&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Emergency box */}
              <div className={styles.emergencyBox}>
                <span aria-hidden="true">⚠️</span>
                <div>
                  <strong>Gas Emergency?</strong>
                  <p>
                    Call National Gas Emergency on{' '}
                    <a href="tel:0800111999">0800 111 999</a> first,
                    then call us on <a href="tel:01130000000">0113 XXX XXXX</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
