import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Footer from '../../components/Footer/Footer'
import { projects } from '../../data/content'
import styles from './Work.module.css'

export default function Work() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={`${styles.pill} ${styles.pillWork}`} />
          SELECTED WORK
        </div>
        <div className={styles.grid}>
          {projects.map(p => (
            <ProjectCard key={p.slug} {...p} className={styles.workCard} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
