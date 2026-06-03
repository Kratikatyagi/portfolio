import styles from './Resume.module.css'

const RESUME_PDF = '/Kratika_UX_Resume.pdf'

const EXPERIENCE = [
  {
    role: 'UI/UX Designer',
    company: 'Heavenly Secrets Pvt. Ltd. · Pilgrim, PHD, Thero',
    period: 'Oct ’24 – Present',
    points: [
      'Sole designer owning end-to-end UX across three consumer brands — user research, information architecture, interaction and visual design, prototyping, and launch.',
      'Designed and shipped two new D2C apps (PHD, Thero) from scratch — 40+ screens each and complete user flows, from concept to launch.',
      'Redesigned Pilgrim’s app and website, restructuring information architecture and navigation to improve product discovery and checkout.',
      'Ran 15+ A/B tests on core flows and product pages; winning variants I designed improved add-to-cart rate by up to 5.1% (99% statistical confidence) and average order value by 1.8%.',
      'Designed and shipped a Sunscreen UV-Index widget that drove a 3.61% uplift in orders across Delhi, Mumbai, and Pune (128K+ users tested).',
      'Prototyped and shipped production features using AI-assisted development, owning features end-to-end from design through launch.',
    ],
  },
  {
    role: 'Intern — UI/UX Designer',
    company: 'Impactapp.com',
    period: 'July ’24 – Sep ’24',
    points: [
      'Gamified the Achievements section with an engaging rewards system, increasing daily active users.',
    ],
  },
  {
    role: 'Intern — User Experience Designer',
    company: 'Arvind Fashions Ltd. · Bangalore, IN',
    period: 'Jan ’24 – Jun ’24',
    points: [
      'Conducted a UX audit of the U.S. Polo Assn. India app and redesigned the Product Listing and Product Description pages, improving the browsing experience.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Offer Cards Redesign — Pilgrim Product Page',
    desc: 'Redesigned product-page offer cards; the new design won the A/B test with a +5.1% add-to-cart lift at 99% statistical confidence across 74K+ tested visitors.',
  },
  {
    title: 'Sunscreen UV-Index Widget — Pilgrim',
    desc: 'Designed and shipped a net-new contextual widget surfacing the local UV index on product pages; drove a 3.61% orders uplift and a 16.3% add-to-cart rate from impressions across Delhi, Mumbai, and Pune (128K+ users).',
  },
  {
    title: 'Bullet Lipstick PDP Redesign — Pilgrim',
    desc: 'Redesigned the mobile product page with clearer hierarchy and social proof; A/B test showed +1.8% average order value over the control across 42K+ visitors.',
  },
  {
    title: 'PHD & Thero — 0→1 App Design',
    desc: 'Designed two D2C mobile apps end-to-end as the sole designer — 40+ screens each and all user flows, from concept to launch.',
  },
]

const EDUCATION = [
  { school: 'IDC IIT Bombay', detail: 'PG Diploma, Interaction Design', period: '2026 – 2027' },
  { school: 'National Institute of Fashion Technology, Hyderabad', detail: 'Apparel Production, B.F.Tech', period: '2020 – 2024' },
  { school: 'Diwan Public School, Hapur', detail: 'Senior High School Graduation', period: '2019 – 2020' },
]

export default function Resume() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.heading}>Resume</h1>
            <p className={styles.sub}>Kratika Tyagi — Product Designer</p>
          </div>
          <a
            href={RESUME_PDF}
            download="Kratika_UX_Resume.pdf"
            className={styles.downloadBtn}
          >
            <DownloadIcon /> Download
          </a>
        </div>

        <section className={styles.summary}>
          <p>
            Product Designer with 2+ years designing and shipping user-centered experiences for
            apps and websites. Sole designer across three brands, owning the full process from
            user research and information architecture to interaction design, and prototyping.
            Validates design decisions through A/B testing and rapid prototyping in code —
            translating user needs into measurable product outcomes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          {EXPERIENCE.map((job) => (
            <div key={job.role + job.period} className={styles.entry}>
              <div className={styles.entryHead}>
                <div>
                  <h3 className={styles.entryRole}>{job.role}</h3>
                  <p className={styles.entryMeta}>{job.company}</p>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Projects</h2>
          {PROJECTS.map((proj) => (
            <div key={proj.title} className={styles.entry}>
              <h3 className={styles.entryRole}>{proj.title}</h3>
              <p className={styles.projectDesc}>{proj.desc}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {EDUCATION.map((edu) => (
            <div key={edu.school} className={styles.entry}>
              <div className={styles.entryHead}>
                <div>
                  <h3 className={styles.entryRole}>{edu.school}</h3>
                  <p className={styles.entryMeta}>{edu.detail}</p>
                </div>
                <span className={styles.period}>{edu.period}</span>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryRole}>Design</h3>
            <p className={styles.projectDesc}>
              User Research · Wireframing · Prototyping · Information Architecture · Interaction
              Design · Design Systems &amp; Component Libraries · Usability Testing · A/B Testing
            </p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryRole}>Tools</h3>
            <p className={styles.projectDesc}>Figma · Adobe XD · Illustrator · Photoshop</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          <p className={styles.projectDesc}>
            Book of Abstracts — Consumers’ Perception and adoption of smart clothing · G20
            International Conference on Smart Clothing, NIFT Kangra 2023
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <ul className={styles.bullets}>
            <li>Debate Competition — Second Prize [2023]</li>
            <li>Video Making Competition — First Prize [2021]</li>
          </ul>
        </section>

      </div>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
