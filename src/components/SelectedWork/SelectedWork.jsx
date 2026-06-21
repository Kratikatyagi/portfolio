import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import styles from './SelectedWork.module.css'

export default function SelectedWork({ projects }) {
  if (!projects?.length) return null

  return (
    <div className={styles.stack}>
      {projects.map(project => (
        <WorkCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

function WorkCard({ project }) {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const cardRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const accent = project.accent || 'var(--dot-selected)'
  const previewSrc = project.thumbnail && typeof project.thumbnail === 'object'
    ? (theme === 'dark' ? project.thumbnail.dark : project.thumbnail.light)
    : project.thumbnail

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onClick={() => navigate(`/work/${project.slug}`)}
      onMouseMove={project.readTime ? handleMouseMove : undefined}
      onMouseEnter={project.readTime ? () => setHovered(true) : undefined}
      onMouseLeave={project.readTime ? () => setHovered(false) : undefined}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/work/${project.slug}`) }}
    >
      <div className={styles.cardLeft}>
        <div className={styles.cardLabelRow}>
          <span className={styles.pill} style={{ background: accent }} />
          <span className={styles.cardLabel}>{project.cardLabel || project.category}</span>
        </div>
        <h3 className={styles.headline}>{project.cardHeadline || project.title}</h3>
        {project.cardDescription && (
          <p className={styles.description}>{project.cardDescription}</p>
        )}
      </div>

      <div className={styles.preview}>
        {previewSrc
          ? <img src={previewSrc} alt={project.cardHeadline || project.title} />
          : <div className={styles.previewPlaceholder} />
        }
        <div className={styles.previewScrim} />
        {project.cardMetrics?.length > 0 && (
          <div className={styles.metricRow}>
            {project.cardMetrics.map(m => (
              <span key={m.label} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {project.readTime && (
        <div
          className={`${styles.cursorPill} ${hovered ? styles.cursorPillVisible : ''}`}
          style={{ '--cx': `${pos.x}px`, '--cy': `${pos.y}px`, '--pill-bg': project.readTimeGradient || 'linear-gradient(180deg, #6E5DF6, #C68DF6)' }}
        >
          {project.readTime} Read
        </div>
      )}
    </div>
  )
}
