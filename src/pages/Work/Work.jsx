import Footer from '../../components/Footer/Footer'
import SelectedWork from '../../components/SelectedWork/SelectedWork'
import { projects } from '../../data/content'
import styles from './Work.module.css'

export default function Work() {
  return (
    <div className={styles.page}>
      <SelectedWork projects={projects} />
      <Footer />
    </div>
  )
}
