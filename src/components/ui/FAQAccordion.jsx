import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './FAQAccordion.module.css'

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)
  const reduced = useReducedMotion()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div
      className={styles.accordion}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={[styles.item, openIndex === i ? styles.open : ''].join(' ')}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            className={styles.trigger}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            <span className={styles.question} itemProp="name">
              {item.question}
            </span>
            <motion.span
              className={styles.icon}
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.2 }}
              aria-hidden="true"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={styles.answer}
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduced ? {} : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className={styles.answerInner} itemProp="text">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
