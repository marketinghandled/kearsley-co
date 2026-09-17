import styles from './WorkGallery.module.css'

export default function WorkGallery({ images, aspect = '3 / 4' }) {
  return (
    <div className={styles.gallery} style={{ '--gallery-aspect': aspect }}>
      {images.map((img) => (
        <div key={img.src} className={styles.cell}>
          <img src={img.src} alt={img.alt || ''} loading="lazy" />
          {img.caption && <span className={styles.caption}>{img.caption}</span>}
        </div>
      ))}
    </div>
  )
}
