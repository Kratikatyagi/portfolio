import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ slug, title, tagline, category, thumbnail, thumbnailStyle, className, bgClassName, leftClassName }) {
  const navigate = useNavigate()
  const { theme } = useTheme()

  const thumbnailSrc = thumbnail && typeof thumbnail === 'object'
    ? (theme === 'dark' ? thumbnail.dark : thumbnail.light)
    : thumbnail

  // Per-theme overrides: thumbnailStyle can be { ...shared, dark: {...}, light: {...} }
  const resolvedStyle = thumbnailStyle
    ? { ...thumbnailStyle, ...(theme === 'dark' ? thumbnailStyle.dark : thumbnailStyle.light) }
    : undefined
  if (resolvedStyle) { delete resolvedStyle.dark; delete resolvedStyle.light }

  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')} onClick={() => navigate(`/work/${slug}`)}>
      <div className={[styles.bg, bgClassName].filter(Boolean).join(' ')}>
        {thumbnailSrc
          ? <img src={thumbnailSrc} alt={title} style={resolvedStyle} />
          : <div className={styles.bgPlaceholder} />
        }
      </div>
      <div className={styles.gradient} />
      <div className={styles.meta}>
        <div className={[styles.left, leftClassName].filter(Boolean).join(' ')}>
          {category && <span className={styles.category}>{category}</span>}
          <h3 className={styles.title}>{tagline || title}</h3>
        </div>
        <button className={styles.arrow} aria-label="View case study">
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
