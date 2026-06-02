import { useNavigate } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Footer from '../../components/Footer/Footer'
import { profile, experience, education, projects } from '../../data/content'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className={styles.page}>
      {/* ── Top group: Hero + Info cards ── */}
      <div className={styles.topGroup}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.avatarWrap}>
            {profile.avatar
              ? (
                <div className={styles.avatarFrame}>
                  <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
                </div>
              )
              : <div className={styles.avatarPlaceholder}><span>{profile.name[0]}</span></div>
            }
          </div>
          <div className={styles.identity}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.titleTag}>{profile.title}</p>
            <p className={styles.bio}>{profile.bio}</p>
          </div>
        </div>

        <div className={styles.heroRight}>
          {/* Location card */}
          <div className={styles.locationCard}>
            <div className={styles.locationBg} style={{ backgroundImage: 'url(/mumbai.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className={styles.locationOverlay}>
              <div className={styles.locationText}>
                <span className={styles.locationLabel}>LOCATION</span>
                <span className={styles.locationValue}>Mumbai, India</span>
              </div>
              <div className={styles.locationIcon}>
                <PinIcon />
              </div>
            </div>
          </div>

          {/* Get in touch */}
          <div className={styles.contactCard}>
            <span className={styles.sectionLabel}>GET IN TOUCH</span>
            <div className={styles.socialRow}>
              <a href={`mailto:${profile.email}`} className={styles.socialBtn} aria-label="Email">
                <EmailIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work & Education ── */}
      <section className={styles.twoCol}>
        <div className={styles.infoCard}>
          <div className={styles.sectionLabel}>
            <span className={`${styles.pill} ${styles.pillWork}`} />
            WORK EXPERIENCE
          </div>
          <div className={styles.list}>
            {experience.map((item, i) => (
              <div key={i}>
                <div className={styles.listItem}>
                  <div className={styles.listMain}>
                    <span className={styles.listTitle}>{item.company}</span>
                    <span className={styles.listSub}>{item.role}</span>
                  </div>
                  <span className={styles.badge}>{item.period}</span>
                </div>
                {i < experience.length - 1 && <div className={styles.listDivider} />}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.sectionLabel}>
            <span className={`${styles.pill} ${styles.pillEdu}`} />
            EDUCATION
          </div>
          <div className={styles.list}>
            {education.map((item, i) => (
              <div key={i}>
                <div className={styles.listItem}>
                  <div className={styles.listMain}>
                    <span className={styles.listTitle}>{item.institution}</span>
                    <span className={styles.listSub}>{item.degree}</span>
                  </div>
                  <span className={styles.badge}>{item.period}</span>
                </div>
                {i < education.length - 1 && <div className={styles.listDivider} />}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>{/* end topGroup */}

      {/* ── Selected Work ── */}
      <section className={styles.workSection}>
        <div className={styles.sectionLabel}>
          <span className={`${styles.pill} ${styles.pillSelected}`} />
          SELECTED WORK
        </div>
        <div className={styles.projectGrid}>
          {featuredProjects.map(p => (
            <ProjectCard
              key={p.slug}
              {...p}
              className={styles.homeCard}
              bgClassName={styles.homeCardBg}
              leftClassName={styles.homeCardLeft}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.96402 20.0068L9.38312 19.5088C8.5823 18.8383 1.58984 12.7993 1.58984 8.38199C1.58984 3.75707 5.3391 0.0078125 9.96402 0.0078125C14.5889 0.0078125 18.3382 3.75707 18.3382 8.38199C18.3382 12.7994 11.3457 18.8383 10.5482 19.5121L9.96402 20.0068ZM9.96402 1.81855C6.34086 1.82266 3.40473 4.75879 3.40063 8.38195C3.40063 11.157 7.70266 15.5902 9.96402 17.6192C12.2254 15.5893 16.5274 11.1537 16.5274 8.38195C16.5233 4.75879 13.5872 1.8227 9.96402 1.81855Z" fill="currentColor"/>
      <path d="M9.96398 11.7014C8.1307 11.7014 6.64453 10.2152 6.64453 8.38195C6.64453 6.54867 8.1307 5.0625 9.96398 5.0625C11.7973 5.0625 13.2834 6.54867 13.2834 8.38195C13.2834 10.2152 11.7973 11.7014 9.96398 11.7014ZM9.96398 6.72219C9.04734 6.72219 8.30426 7.46527 8.30426 8.38191C8.30426 9.29855 9.04734 10.0416 9.96398 10.0416C10.8806 10.0416 11.6237 9.29855 11.6237 8.38191C11.6237 7.46527 10.8807 6.72219 9.96398 6.72219Z" fill="currentColor"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2532 11.9141L12.4107 13.7628C11.6635 14.5126 10.3488 14.5288 9.5855 13.7628L7.74288 11.9141L1.125 18.5534C1.37134 18.6673 1.64295 18.7353 1.9317 18.7353H20.0645C20.3533 18.7353 20.6248 18.6674 20.871 18.5535L14.2532 11.9141Z" fill="currentColor"/>
      <path d="M20.0683 3.26562H1.93552C1.64677 3.26562 1.37516 3.3336 1.12891 3.44751L8.20057 10.5426C8.20105 10.5431 8.20161 10.5432 8.20208 10.5437C8.20255 10.5441 8.20264 10.5448 8.20264 10.5448L10.502 12.8518C10.7463 13.096 11.2577 13.096 11.5019 12.8518L13.8008 10.5452C13.8008 10.5452 13.8014 10.5441 13.8019 10.5437C13.8019 10.5437 13.8029 10.5431 13.8034 10.5426L20.8749 3.44747C20.6286 3.33352 20.3571 3.26562 20.0683 3.26562Z" fill="currentColor"/>
      <path d="M0.205648 4.34961C0.0782031 4.60734 0 4.89342 0 5.19987V16.8014C0 17.1079 0.0781172 17.394 0.205605 17.6517L6.83495 11.0009L0.205648 4.34961Z" fill="currentColor"/>
      <path d="M21.7933 4.34961L15.1641 11.001L21.7933 17.6519C21.9208 17.3941 21.999 17.1081 21.999 16.8015V5.19996C21.999 4.89342 21.9208 4.60734 21.7933 4.34961Z" fill="currentColor"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7998 19.7996V13.3536C19.7998 10.1856 19.1178 7.76562 15.4218 7.76562C13.6398 7.76562 12.4518 8.73363 11.9678 9.65763H11.9238V8.05162H8.42578V19.7996H12.0778V13.9696C12.0778 12.4296 12.3638 10.9556 14.2558 10.9556C16.1258 10.9556 16.1478 12.6936 16.1478 14.0576V19.7776H19.7998V19.7996Z" fill="currentColor"/>
      <path d="M2.48438 8.05078H6.13637V19.7988H2.48438V8.05078Z" fill="currentColor"/>
      <path d="M4.31122 2.19922C3.14522 2.19922 2.19922 3.14522 2.19922 4.31122C2.19922 5.47722 3.14522 6.44522 4.31122 6.44522C5.47722 6.44522 6.42322 5.47722 6.42322 4.31122C6.42322 3.14522 5.47722 2.19922 4.31122 2.19922Z" fill="currentColor"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
