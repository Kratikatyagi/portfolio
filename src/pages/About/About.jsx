import { useState, useEffect, useRef } from 'react'
import Footer from '../../components/Footer/Footer'
import { profile, stack, interests } from '../../data/content'
import styles from './About.module.css'

const PERSONAL_PHOTOS = [
  '/hobby-1.jpg',  // Modelling for the thrill!!
  '/hobby-2.jpg',  // Spending time with dogs
  '/hobby-3.jpg',  // Trying out pencil sketches
  '/hobby-4.jpg',  // Exploring textured painting
  '/hobby-5.jpg',  // Reading by sunsets
  '/hobby-6.jpg',  // Hiking
]

const LOOPED_PHOTOS = [...PERSONAL_PHOTOS, ...PERSONAL_PHOTOS]
const LOOPED_INTERESTS = [...interests, ...interests]

export default function About() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [animated, setAnimated] = useState(true)
  const visibleCount = 4
  const total = PERSONAL_PHOTOS.length
  const isPaused = useRef(false)

  const prev = () => {
    setAnimated(true)
    setCarouselIndex(i => i <= 0 ? total - 1 : i - 1)
  }
  const next = () => {
    setAnimated(true)
    setCarouselIndex(i => i + 1)
  }

  // When we reach the cloned second half, silently reset to first half
  useEffect(() => {
    if (carouselIndex >= total) {
      const t = setTimeout(() => {
        setAnimated(false)
        setCarouselIndex(i => i - total)
      }, 350)
      return () => clearTimeout(t)
    }
  }, [carouselIndex, total])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setAnimated(true)
        setCarouselIndex(i => i + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.page}>
      {/* ── Top: Photo + Story + Tools ── */}
      <section className={styles.topSection}>
        {/* Left: photo card */}
        <div className={styles.photoCard}>
          <img src="/about-photo.jpg" alt={profile.name} className={styles.photo} />
        </div>

        {/* Right: MY STORY + TOOLS I LIVE IN */}
        <div className={styles.rightCol}>
          <div className={styles.card}>
            <div className={styles.sectionLabel}>
              <span className={styles.dot} />
              MY STORY
            </div>
            <div className={styles.storyText}>
              <p className={styles.bio}>{profile.bio}</p>
              <p className={styles.bioLong}>{profile.bioLong}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionLabel}>
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              TOOLS I LIVE IN
            </div>
            <div className={styles.toolsRow}>
              {stack.map(tool => (
                <div key={tool.name} className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    {tool.icon
                      ? <img src={tool.icon} alt={tool.name} />
                      : <span className={styles.stackIconFallback}>{tool.name[0]}</span>
                    }
                  </div>
                  <span className={styles.stackName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── When not designing ── */}
      <section className={styles.whenSection}>
        <div className={styles.sectionLabel}>
          <span className={`${styles.pill} ${styles.pillWhen}`} />
          WHEN NOT DESIGNING
        </div>
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
        >
          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </button>
          <div className={styles.carouselTrack}>
            <div
              className={styles.carouselInner}
              style={{
                transform: `translateX(calc(-${carouselIndex} * (100% / ${visibleCount} + 5.5px)))`,
                transition: animated ? 'transform 0.35s ease' : 'none',
              }}
            >
              {LOOPED_PHOTOS.map((photo, i) => (
                <div key={i} className={styles.carouselCard}>
                  {LOOPED_INTERESTS[i] && (
                    <span className={styles.interestLabel}>{LOOPED_INTERESTS[i]}</span>
                  )}
                  {photo
                    ? <img src={photo} alt={`Personal ${i + 1}`} />
                    : <div className={styles.carouselPlaceholder} />
                  }
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
            onClick={next}
            aria-label="Next"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
