import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  as: Tag = 'button',
  href,
  to,
  className = '',
  ...props
}) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  )
}
