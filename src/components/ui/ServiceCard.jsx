import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, description, benefits, href, image }) {
  const reduced = useReducedMotion()
  const isExternal = href && href.startsWith('http')

  const CardWrapper = ({ children }) =>
    isExternal ? (
      <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={href || '#'} className={styles.card}>
        {children}
      </Link>
    )

  return (
    <motion.div
      className={styles.wrapper}
      whileHover={reduced ? {} : { y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <CardWrapper>
        <div className={styles.cardImage} aria-hidden="true">
          {image && <img src={image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          {benefits && benefits.length > 0 && (
            <ul className={styles.benefits}>
              {benefits.map((b) => (
                <li key={b} className={styles.benefit}>
                  <span className={styles.tick} aria-hidden="true">—</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          <span className={styles.link}>Find out more</span>
        </div>
      </CardWrapper>
    </motion.div>
  )
}
