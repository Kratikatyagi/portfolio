import styles from './Footer.module.css'

const RESUME_PDF = '/Kratika_UX_Resume.pdf'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.message}>
        <p className={styles.headline}>Thanks for scrolling this far.</p>
        <p className={styles.sub}>If something resonated, let's connect.</p>
      </div>
      <div className={styles.actions}>
        <a href="mailto:kratikatyagi.works@gmail.com" className={styles.btn}>
          Contact Me
        </a>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnResume}`}
        >
          My Resume
        </a>
      </div>
    </footer>
  )
}
