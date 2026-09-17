import { Helmet } from 'react-helmet-async'
import styles from './Privacy.module.css'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Kearsley &amp; Co Gas Services</title>
        <meta
          name="description"
          content="Privacy policy for Kearsley & Co Gas Services. How we collect, use, and protect your personal data."
        />
        <link rel="canonical" href="https://www.kearsleygs.co.uk/privacy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={styles.hero} aria-label="Privacy policy header">
        <div className="container">
          <h1 className={styles.heroHeading}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: January 2024</p>
        </div>
      </section>

      <section className={styles.content} aria-label="Privacy policy content">
        <div className="container">
          <div className={styles.prose}>

            <h2>1. Who We Are</h2>
            <p>
              Kearsley &amp; Co Gas Services ("we", "us", "our") is a gas engineering and
              plumbing company based in Horsforth, Leeds, West Yorkshire, LS18. We are the
              data controller for the personal information we collect. If you have questions
              about this policy or your personal data, contact us at{' '}
              <a href="mailto:info@kearsleygs.co.uk">info@kearsleygs.co.uk</a> or call{' '}
              <a href="tel:01943662713">01943 662713</a>.
            </p>

            <h2>2. What Data We Collect</h2>
            <p>We may collect the following personal data from you:</p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> your name, phone number, email
                address, the service you require, and any description of your enquiry
              </li>
              <li>
                <strong>Direct contact:</strong> when you call or email us, we may retain
                your contact details and notes of our conversation
              </li>
              <li>
                <strong>Service records:</strong> if we carry out work for you, we may
                retain records of the work performed, including the address, dates, and
                details of the job
              </li>
            </ul>
            <p>
              We do not collect payment card details directly — any payments are processed
              through secure third-party payment providers.
            </p>

            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Carry out the work you have requested</li>
              <li>Issue invoices and manage payments</li>
              <li>Comply with our legal obligations (e.g., Gas Safe record-keeping requirements)</li>
              <li>Contact you about the work we have carried out, including warranty follow-up</li>
            </ul>
            <p>
              We will not use your data for marketing purposes without your explicit consent.
              We do not sell your data to third parties.
            </p>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul>
              <li>
                <strong>Contract performance:</strong> to carry out the services you have
                requested or to take steps prior to entering a contract
              </li>
              <li>
                <strong>Legitimate interests:</strong> responding to enquiries and running
                our business
              </li>
              <li>
                <strong>Legal obligation:</strong> compliance with gas safety legislation
                and other regulatory requirements
              </li>
              <li>
                <strong>Consent:</strong> for any optional communications such as marketing
                emails, where you have provided consent
              </li>
            </ul>

            <h2>5. Data Storage and Security</h2>
            <p>
              Your data is stored securely. We take reasonable technical and organisational
              measures to protect it against unauthorised access, loss, or misuse. We do not
              transfer your data outside the UK.
            </p>
            <p>
              We use reputable service providers for email and business management tools.
              These providers are contractually obligated to handle your data in accordance
              with UK GDPR.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfil the purposes
              set out in this policy. In general:
            </p>
            <ul>
              <li>
                <strong>Enquiry data:</strong> retained for 12 months from the date of
                last contact if no job was undertaken
              </li>
              <li>
                <strong>Job records:</strong> retained for 6 years to comply with accounting
                and tax obligations
              </li>
              <li>
                <strong>Gas safety records:</strong> retained in accordance with Gas Safe
                Register requirements (minimum 2 years)
              </li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>
              Under UK GDPR, you have the following rights in relation to your personal data:
            </p>
            <ul>
              <li>
                <strong>Right of access:</strong> you can request a copy of the personal
                data we hold about you
              </li>
              <li>
                <strong>Right to rectification:</strong> you can ask us to correct inaccurate
                or incomplete data
              </li>
              <li>
                <strong>Right to erasure:</strong> you can ask us to delete your data in
                certain circumstances
              </li>
              <li>
                <strong>Right to data portability:</strong> you can ask for your data in a
                structured, commonly used format
              </li>
              <li>
                <strong>Right to object:</strong> you can object to our processing in
                certain circumstances
              </li>
              <li>
                <strong>Right to restrict processing:</strong> you can ask us to restrict
                how we use your data in certain circumstances
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@kearsleygs.co.uk">info@kearsleygs.co.uk</a>. We will
              respond within 30 days.
            </p>
            <p>
              You also have the right to complain to the Information Commissioner's Office
              (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h2>8. Sharing Your Data</h2>
            <p>
              We do not share your personal data with third parties except where:
            </p>
            <ul>
              <li>Required by law (e.g., providing Gas Safe records to the Gas Safe Register)</li>
              <li>Necessary to carry out the work (e.g., ordering parts from suppliers)</li>
              <li>You have given consent</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              Our website currently does not use tracking cookies or analytics cookies.
              We may use essential technical cookies required to make the website function.
              We will update this policy if we introduce any additional cookies.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The most current version
              will always be available on this page. Significant changes will be notified
              to existing customers where appropriate.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              For any queries about your personal data or this policy, please contact:
            </p>
            <address className={styles.addressBlock}>
              <strong>Kearsley &amp; Co Gas Services</strong><br />
              Horsforth, Leeds, LS18<br />
              Email: <a href="mailto:info@kearsleygs.co.uk">info@kearsleygs.co.uk</a><br />
              Phone: <a href="tel:01943662713">01943 662713</a>
            </address>

          </div>
        </div>
      </section>
    </>
  )
}
