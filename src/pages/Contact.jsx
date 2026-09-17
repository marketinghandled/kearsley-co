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
  service: z.enum(['Plumbing', 'Gas Services', 'Air Conditioning', 'Other'], {
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
  telephone: '01943662713',
  email: 'info@kearsleygs.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yeadon',
    postalCode: 'LS19',
    addressRegion: 'West Yorkshire',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '01943662713',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'Leeds',
  },
}

const hours = [
  { day: 'Monday – Friday', time: '9:00am – 5:00pm' },
]

const WEB3FORMS_ACCESS_KEY = '9ca24597-67e7-47d4-8fdd-8ff3b208e59e'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [submitError, setSubmitError] = useState(false)
  const reduced = useReducedMotion()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setSubmitError(false)
    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('subject', `New enquiry from ${data.name} — ${data.service}`)
      formData.append('from_name', data.name)
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('email', data.email)
      formData.append('service', data.service)
      formData.append('message', data.message)
      formData.append('hear_about_us', data.hearAboutUs || 'Not provided')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setSubmittedName(data.name)
        setSubmitted(true)
        reset()
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Kearsley &amp; Co Gas Services — Yeadon, Leeds</title>
        <meta
          name="description"
          content="Contact Kearsley & Co Gas Services for a free quote on plumbing, gas, or air conditioning in Yeadon and Leeds. Call 01943 662713 or send a message."
        />
        <meta property="og:title" content="Contact Us | Kearsley & Co Gas Services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kearsleygs.co.uk/contact" />
        <meta property="og:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.kearsleygs.co.uk/images/og-image.png" />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/contact" />
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
              Call us now or fill in the form and we'll get back to you.
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
                    We'll be in touch soon. For urgent enquiries call us directly on{' '}
                    <a href="tel:01943662713">01943 662713</a>.
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
                  {/* Honeypot — hidden from real visitors, catches bots */}
                  <input
                    type="checkbox"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                    {...register('botcheck')}
                  />

                  {submitError && (
                    <p className={styles.error} role="alert" style={{ marginBottom: '1rem' }}>
                      Something went wrong sending your message. Please try again, or call us
                      directly on <a href="tel:01943662713">01943 662713</a>.
                    </p>
                  )}

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
                    <a href="tel:01943662713" className={styles.infoValue}>
                      01943 662713
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.infoCard}>
                  
                  <div className={styles.infoContent}>
                    <strong>Email</strong>
                    <a href="mailto:info@kearsleygs.co.uk" className={styles.infoValue}>
                      info@kearsleygs.co.uk
                    </a>
                    <span className={styles.infoNote}>We reply during business hours</span>
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
                      <tr key={row.day}>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
