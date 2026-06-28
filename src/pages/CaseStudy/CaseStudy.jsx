import { Fragment, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { useTheme } from '../../context/ThemeContext'
import { projects } from '../../data/content'
import UVBody from './CaseStudyUV'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { theme } = useTheme()
  const project = projects.find(p => p.slug === slug)
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) main.scrollTop = 0
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Case study not found.</p>
        <button onClick={() => navigate('/work')} className={styles.backBtn}>
          ← Back to Work
        </button>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      {project.sections.length > 0 && (
        <SectionNav sections={project.sections} />
      )}
      <div className={styles.page} data-slug={slug}>
      {/* ── Back nav ── */}
      <button onClick={() => navigate('/work')} className={styles.backBtn}>
        <ArrowLeftIcon /> Back to Work
      </button>

      {project.layout === 'uv-v2' ? (
        <UVBody project={project} theme={theme} />
      ) : (
      <>
      {/* ── Header banner (theme-aware) ── */}
      {project.headerImage && (
        <div className={styles.uvBanner}>
          <div className={styles.uvBannerText}>
            <h1 className={styles.uvBannerTitle}>{project.title}</h1>
            <p className={styles.uvBannerSub}>{project.headerImage.subtitle || 'UX Case Study'}</p>
            {project.headerImage.keywords && (
              <div className={styles.uvBannerKeywords}>
                {project.headerImage.keywords.map((k, i) => (
                  <span key={i} className={styles.uvBannerKeyword}>{k}</span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.uvBannerImage}>
            <img
              src={theme === 'dark' ? project.headerImage.dark : project.headerImage.light}
              alt={project.title}
            />
            <div className={styles.uvBannerFade} aria-hidden />
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <header className={styles.hero}>
        {!project.thumbnail && project.heroVisual && (
          <VisualPlaceholder caption={project.heroVisual.caption} large />
        )}

        <div className={styles.heroInfo}>
          {!project.headerImage && (
            <div className={styles.heroTitleGroup}>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              {project.tagline && (
                <p className={styles.heroTagline}>{project.tagline}</p>
              )}
            </div>
          )}

          {project.meta && (
            <dl className={styles.metaList}>
              {project.meta.map((m, i) => (
                <div key={i} className={styles.metaRow}>
                  <dt className={styles.metaLabel}>{m.label}</dt>
                  <dd className={styles.metaValue}><RichText text={m.value} /></dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {project.headlineMetrics && (
          <div className={styles.headlineMetrics}>
            {project.headlineMetrics.flatMap((m, i) => {
              const items = [
                <div key={`metric-${i}`} className={styles.headlineMetric}>
                  <div className={styles.headlineMetricContent}>
                    <span className={styles.headlineMetricValue}>+{m.value}</span>
                    <span className={styles.headlineMetricLabel}>{m.label}</span>
                  </div>
                </div>
              ]
              if (i < project.headlineMetrics.length - 1) {
                items.push(<span key={`sep-${i}`} className={styles.headlineMetricSeparator}>+</span>)
              }
              return items
            })}
          </div>
        )}
      </header>

      {/* ── Sections ── */}
      <div className={styles.listDivider} />
      {project.sections.length > 0 ? (
        <div className={styles.body}>
          {project.sections.map((section, idx) => {
            return (
            <Fragment key={section.id}>
              {idx > 0 && <div className={styles.listDivider} />}
            <div>
            <section id={section.id} className={styles.section}>
              <div className={styles.sectionHeadingGroup}>
                {section.label && (
                  <span className={styles.sectionLabel}>{section.label}</span>
                )}
                <div className={styles.sectionHeadingRow}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.body && !section.variants && !section.principles && (
                    Array.isArray(section.body)
                      ? section.body.map((p, i) => (
                          <p key={i} className={styles.body_text}>{p}</p>
                        ))
                      : <p className={styles.body_text}>{section.body}</p>
                  )}
                </div>
                {section.subheading && (
                  <h3 className={styles.sectionSubheading}>{section.subheading}</h3>
                )}
                {(section.variants || section.principles) && section.body && (
                  Array.isArray(section.body)
                    ? section.body.map((p, i) => (
                        <p key={i} className={styles.body_text}>{p}</p>
                      ))
                    : <p className={styles.body_text}>{section.body}</p>
                )}
              </div>

              {section.hypotheses && <Hypotheses data={section.hypotheses} />}

              {section.callout && (
                <blockquote className={styles.callout}>
                  {section.callout}
                </blockquote>
              )}

              {section.bulletsHeading && (
                <h4 className={styles.subsectionHeading}>{section.bulletsHeading}</h4>
              )}

              {section.bullets && (
                <ul className={styles.bullets}>
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {section.principles && (
                <div className={styles.principlesGrid}>
                  {section.principles.map((p, i) => (
                    <div key={i} className={styles.principleCard}>
                      <span className={styles.principleLabel}>{p.label}</span>
                      {p.image && (
                        <img src={p.image} alt={p.label} className={styles.principleImage} />
                      )}
                      <p className={styles.principleQuote}>{p.quote}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.variants && (
                <div className={styles.variantsGrid}>
                  {section.variants.map((v, i) => (
                    <div key={i} className={`${styles.variantCard} ${v.shipped ? styles.variantShipped : ''}`}>
                      <div className={styles.variantHeader}>
                        <span className={styles.variantLabel}>{v.label}</span>
                        {v.shipped && <span className={styles.variantBadge}>Shipped</span>}
                      </div>
                      {v.image && (
                        <img src={v.image} alt={v.name} className={styles.variantImage} />
                      )}
                      <div className={styles.variantText}>
                        <h4 className={styles.variantName}>{v.name}</h4>
                        <p className={styles.variantBody}>{v.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className={styles.subsections}>
                  {section.subsections.map((sub, i) => (
                    <div key={i} className={styles.subsection}>
                      {sub.subheading && (
                        <h4 className={styles.subsectionHeading}>{sub.subheading}</h4>
                      )}
                      {sub.paragraph && (
                        <p className={styles.body_text}>{sub.paragraph}</p>
                      )}
                      {sub.introBox && <Hypotheses data={sub.introBox} />}
                      {sub.diagram === 'gate' && <DiagramGate />}
                      {sub.diagram === 'offer-state' && <OfferStateDiagram />}
                      {sub.eventTable && (
                        <div className={styles.eventTable}>
                          <div className={styles.eventTableHeader}>
                            <span>Event</span>
                            <span>Use</span>
                          </div>
                          {sub.eventTable.map((row, j) => (
                            <div key={j} className={styles.eventTableRow}>
                              <code className={styles.eventName}>{row.event}</code>
                              <span className={styles.eventUse}>{row.use}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {sub.bullets && (
                        <ul className={styles.bullets}>
                          {sub.bullets.map((b, j) => (
                            <li key={j}><RichText text={b} /></li>
                          ))}
                        </ul>
                      )}
                      {sub.box && <Hypotheses data={sub.box} />}
                      {sub.button && (
                        <a
                          href={sub.button.href || '#'}
                          className={styles.feedbackBtn}
                          {...(sub.button.href && sub.button.href !== '#' ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {sub.button.icon && <span aria-hidden>{sub.button.icon}</span>}
                          {sub.button.label}
                        </a>
                      )}
                      {sub.annotatedDesign && <AnnotatedDesign design={sub.annotatedDesign} />}
                      {sub.tiers && <PriorityTiers tiers={sub.tiers} />}
                      {sub.pills && (
                        <div className={styles.priorityPills}>
                          {sub.pills.map((p, j) => (
                            <span key={j} className={styles.priorityPill}>{p}</span>
                          ))}
                        </div>
                      )}
                      {sub.phones && (
                        <div className={styles.phoneRow}>
                          {sub.phones.map((src, j) => (
                            <img key={j} src={src} alt="" className={styles.phoneShot} />
                          ))}
                        </div>
                      )}
                      {sub.note && (
                        <p className={styles.subsectionNote}>{sub.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.afterBody && (
                <p className={styles.body_text}>{section.afterBody}</p>
              )}

              {section.funnel && (
                <div className={styles.tableWrap}>
                  <table className={styles.funnelTable}>
                    <thead>
                      <tr>
                        {section.funnel.headers.map((h, i) => (
                          <th key={i}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.funnel.rows.map((row, i) => (
                        <tr key={i}>
                          {row.slice(0, 2).map((cell, j) => (
                            <td key={j} className={`${j === 0 ? styles.funnelStage : styles.funnelCell} ${j === 1 && row[2] === 'blur' ? styles.funnelBlur : ''}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.impactHeading && (
                <h4 className={`${styles.subsectionHeading} ${styles.impactHeading}`}>
                  {section.impactHeading}
                </h4>
              )}

              {section.impact && (
                <div className={`${styles.headlineMetrics} ${styles.headlineMetricsInBody}`}>
                  {section.impact.flatMap((m, i) => {
                    const items = [
                      <div key={`impact-metric-${i}`} className={styles.headlineMetric}>
                        <div className={styles.headlineMetricContent}>
                          <span className={styles.headlineMetricValue}>+{m.value}</span>
                          <span className={styles.headlineMetricLabel}>{m.label}</span>
                        </div>
                      </div>,
                    ]
                    if (i < section.impact.length - 1) {
                      items.push(
                        <span key={`impact-sep-${i}`} className={styles.headlineMetricSeparator}>
                          +
                        </span>
                      )
                    }
                    return items
                  })}
                </div>
              )}

              {(section.learningHeading || section.learning) && (
                <div className={styles.learningGroup}>
                  {section.learningHeading && (
                    <h4 className={styles.subsectionHeading}>{section.learningHeading}</h4>
                  )}
                  {section.learning && (
                    <p className={styles.body_text}>{section.learning}</p>
                  )}
                </div>
              )}

              {section.metrics && (
                <div className={styles.metricsGrid}>
                  {section.metrics.map((m, i) => (
                    <div key={i} className={styles.metricCard}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.reflection && (
                <div className={styles.reflection}>
                  <h4 className={styles.reflectionHeading}>{section.reflection.heading}</h4>
                  <p className={styles.body_text}>{section.reflection.body}</p>
                </div>
              )}

              {section.images && (
                <figure className={styles.sectionImages}>
                  {section.images.map((src, i) => (
                    <img key={i} src={src} alt="" className={styles.sectionImage} />
                  ))}
                  {section.imageCaption && (
                    <figcaption className={styles.sectionImageCaption}>{section.imageCaption}</figcaption>
                  )}
                </figure>
              )}

              {section.finalDesigns && <FinalDesignSection designs={section.finalDesigns} />}

              {section.annotatedDesign && <AnnotatedDesign design={section.annotatedDesign} />}

              {section.chartVisual && <ResultsVisual />}

              {section.visual && (
                <VisualPlaceholder caption={section.visual.caption} />
              )}
            </section>
            </div>
            </Fragment>
            )
          })}
        </div>
      ) : (
        <div className={styles.comingSoon}>
          <p>Full case study coming soon.</p>
        </div>
      )}
      </>
      )}
      </div>

      <div className={styles.bottomRow}>
        <Footer />
        {nextProject && projects.length > 1 && (
          <div className={styles.nextCardWrap}>
            <ProjectCard {...nextProject} className={styles.nextCard} />
            <span className={styles.nextLabel}>See Next</span>
          </div>
        )}
      </div>
    </div>
  )
}

function VisualPlaceholder({ caption, large = false }) {
  return (
    <figure className={`${styles.visualPlaceholder} ${large ? styles.visualPlaceholderLarge : ''}`}>
      <div className={styles.visualInner}>
        <div className={styles.visualPattern} aria-hidden />
        <span className={styles.visualLabel}>VISUAL</span>
      </div>
      {caption && <figcaption className={styles.visualCaption}>{caption}</figcaption>}
    </figure>
  )
}

function DiagramGate() {
  const gates = [
    'Cart is empty',
    'A sunscreen is already in cart',
    'Recommended product is already in cart',
  ]

  return (
    <div className={styles.diagramGate}>
      <span className={styles.diagramGateLabel}>Widget hides when</span>
      <div className={styles.diagramGateRules}>
        {gates.map((g, i) => (
          <Fragment key={i}>
            <span className={styles.diagramGateRule}>{g}</span>
            {i < gates.length - 1 && <span className={styles.diagramOr}>or</span>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function SectionNav({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? null)
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={styles.sectionNav}>
      <div className={styles.sectionNavTicks}>
        {sections.map(s => (
          <span
            key={s.id}
            className={`${styles.sectionNavTick} ${s.id === activeId ? styles.sectionNavTickActive : ''}`}
          />
        ))}
      </div>
      <div className={styles.sectionNavMenu}>
        {sections.map(s => (
          <button
            key={s.id}
            className={`${styles.sectionNavItem} ${s.id === activeId ? styles.sectionNavItemActive : ''}`}
            onClick={() => scrollTo(s.id)}
          >
            {s.label || s.heading}
          </button>
        ))}
      </div>
    </div>
  )
}

function ResultsVisual() {
  const funnel = [
    { label: 'Test visitors',       rate: '128,598', pct: 100, blur: true },
    { label: 'Widget impressions',  rate: '53.44%', pct: 53.44 },
    { label: 'Add to cart',         rate: '16.31%', pct: 16.31 },
    { label: 'Orders',              rate: '15.52%', pct: 15.52 },
  ]

  return (
    <div className={styles.resultsVisual}>
      <div className={styles.vizBlock}>
        <span className={styles.vizLabel}>Conversion funnel</span>
        <div className={styles.funnelBars}>
          {funnel.map((s, i) => (
            <div key={i} className={styles.funnelRow}>
              <span className={styles.funnelStageLabel}>{s.label}</span>
              <div className={styles.funnelTrack}>
                <div className={styles.funnelFill} style={{ width: `${s.pct}%` }} />
              </div>
              <span className={`${styles.funnelRate} ${s.blur ? styles.funnelBlur : ''}`}>{s.rate ?? '—'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OfferStateDiagram() {
  const rows = [
    { type: 'Flat 25%',  condition: 'any cart state',         label: 'Strikethrough + −25% price' },
    { type: 'Flat 40%',  condition: 'any cart state',         label: 'Strikethrough + −40% price' },
    { type: 'B1G1',      condition: '0 qualifying in cart',   label: '"Add 1 → get 1 FREE"'       },
    { type: '',          condition: '1+ qualifying in cart',  label: '"FREE"'                      },
    { type: 'B2G2',      condition: '< 2 qualifying in cart', label: '"Buy 2, get 2 FREE"'         },
    { type: '',          condition: '2+ qualifying in cart',  label: '"FREE"'                      },
    { type: 'B3G3',      condition: '< 3 qualifying in cart', label: '"Buy 3 @ ₹999"'              },
    { type: '',          condition: '3+ qualifying in cart',  label: '"₹999 for 3"'               },
  ]

  return (
    <div className={styles.offerDiagram}>
      <div className={styles.diagramStateMap}>
        <div className={styles.diagramStateHeader}>
          <span>Offer type</span>
          <span>Cart state</span>
          <span>Widget shows</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={styles.diagramStateRow}>
            <span className={row.type ? styles.diagramOfferBadge : styles.diagramOfferEmpty}>
              {row.type}
            </span>
            <span className={styles.diagramCondition}>{row.condition}</span>
            <span className={styles.diagramOutput}>
              {row.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinalDesignSection({ designs }) {
  return (
    <div className={styles.finalDesigns}>
      {designs.map((design, i) => (
        <div key={i} className={styles.finalDesignRow}>
          <div className={styles.finalDesignAnnotations} data-side="left">
            {design.annotations.filter(a => a.side === 'left').map((ann, j) => (
              <div key={j} className={styles.annotation}>
                <span className={styles.annotationLaw}>{ann.law}</span>
                <p className={styles.annotationBody}>{ann.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.finalDesignCenter}>
            <img src={design.image} alt={design.label} className={styles.finalDesignImage} />
            <span className={styles.finalDesignLabel}>{design.label}</span>
          </div>
          <div className={styles.finalDesignAnnotations} data-side="right">
            {design.annotations.filter(a => a.side === 'right').map((ann, j) => (
              <div key={j} className={styles.annotation}>
                <span className={styles.annotationLaw}>{ann.law}</span>
                <p className={styles.annotationBody}>{ann.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i}>{p.slice(2, -2)}</strong>
    }
    if (p.startsWith('==') && p.endsWith('==')) {
      return <span key={i} className={styles.metaHighlight}>{p.slice(2, -2)}</span>
    }
    return <Fragment key={i}>{p}</Fragment>
  })
}

function Hypotheses({ data }) {
  return (
    <div className={styles.hypothesisBox}>
      {data.icon && <span className={styles.hypothesisIcon} aria-hidden>{data.icon}</span>}
      <ul className={styles.hypothesisList}>
        {data.items.map((h, i) => (
          <li key={i} className={styles.hypothesisItem}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

function PriorityTiers({ tiers }) {
  return (
    <div className={styles.priorityTiers}>
      {tiers.map((tier, i) => (
        <div key={i} className={styles.priorityTier}>
          <span className={styles.priorityTierLabel}>
            <span className={styles.priorityTierIcon} aria-hidden>{tier.icon}</span>
            {tier.label}
          </span>
          <div className={styles.priorityPills}>
            {tier.items.map((item, j) => (
              <span key={j} className={styles.priorityPill}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function AnnotatedDesign({ design }) {
  const left = design.annotations.filter(a => a.side === 'left')
  const right = design.annotations.filter(a => a.side === 'right')

  return (
    <div className={styles.annotatedDesign}>
      <div className={styles.adSide} data-side="left">
        {left.map((a, i) => (
          <div key={i} className={styles.adAnnotation} style={{ top: a.top }}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.adCenter}>
        <img src={design.image} alt={design.alt || ''} className={styles.adImage} />
      </div>

      <div className={styles.adSide} data-side="right">
        {right.map((a, i) => (
          <div key={i} className={styles.adAnnotation} style={{ top: a.top }}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </div>
        ))}
      </div>

      {/* Mobile fallback: annotations listed below the design */}
      <ol className={styles.adMobileList}>
        {design.annotations.map((a, i) => (
          <li key={i} className={styles.adMobileItem}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
