import { Link } from 'react-router-dom'
import LogoMark from '../ui/LogoMark'
import styles from './Footer.module.css'


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <LogoMark light size={48} />
            <p className={styles.tagline}>
              Gas Safe registered plumbers and engineers serving Yeadon,
              Guiseley, Rawdon, Horsforth and across Leeds.
            </p>
            <div className={styles.contact}>
              <a href="tel:01943662713" className={styles.contactLink}>
                01943 662713
              </a>
              <a href="mailto:info@kearsleygs.co.uk" className={styles.contactLink}>
                info@kearsleygs.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.colLinks}>
              <li><Link to="/plumbing">Plumbing Services</Link></li>
              <li><Link to="/gas-services">Gas Services</Link></li>
              <li><Link to="/air-conditioning">Air Conditioning</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.colLinks}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Free Quote</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <address className={styles.address}>
              <p>Yeadon, Leeds, LS19</p>
              <p>West Yorkshire, UK</p>
            </address>
            <div className={styles.hours}>
              <p><strong>Mon – Fri:</strong> 9am – 5pm</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <img src="/images/logo-gassafe.svg" alt="Gas Safe Registered" style={{ height: 40, width: 'auto' }} />
            <span className={styles.gasText}>Gas Safe Registered Engineers</span>
          </div>
          <p className={styles.copyright}>
            &copy; {year} Kearsley &amp; Co Gas Services. All rights reserved.
          </p>
          <div className={styles.bottomRight}>
            <Link to="/privacy" className={styles.privacyLink}>Privacy Policy</Link>
            <a
              href="https://www.marketing-handled.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.credit}
            >
              <span>Website by</span>
              <img src="/images/marketinghandled.png" alt="Marketing Handled" className={styles.creditLogo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
