import { Fragment } from 'react'
import styles from './CaseStudyUV.module.css'

/* ──────────────────────────────────────────────────────────────
   UVBody — dedicated renderer for the gold-accented "Phase 2"
   UV-index case study (project.layout === 'uv-v2').
   Reuses the page shell from CaseStudy.jsx; renders its own
   banner + section blocks to match the Figma exactly.
   ────────────────────────────────────────────────────────────── */
export default function UVBody({ project, theme }) {
  return (
    <div className={styles.uvBody}>
      {project.headerImage && (
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1 className={styles.bannerTitle}>{project.title}</h1>
            {project.headerImage.subtitle && (
              <p className={styles.bannerSub}>{project.headerImage.subtitle}</p>
            )}
            {project.headerImage.keywords && (
              <div className={styles.bannerKeywords}>
                {project.headerImage.keywords.map((k, i) => (
                  <span key={i} className={styles.bannerKeyword}>{k}</span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.bannerImage}>
            <img
              src={theme === 'dark' ? project.headerImage.dark : project.headerImage.light}
              alt={project.title}
            />
            <div className={styles.bannerFade} aria-hidden />
          </div>
        </div>
      )}

      <div className={styles.content}>
        {project.sections.map((section, idx) => (
          <Fragment key={section.id}>
            {idx > 0 && !section.noDivider && <div className={styles.divider} />}
            <Section section={section} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function Section({ section }) {
  const headingGap = section.headingGap ?? 16

  return (
    <section id={section.id} className={styles.section}>
      {section.groups ? (
        <div className={styles.sectionGroups}>
          {section.groups.map((group, gi) => (
            <div key={gi} className={styles.blockGroup}>
              {gi === 0 && (
                <SectionHeading section={section} gap={headingGap}>
                  {section.intro?.map((block, i) => (
                    <Block key={`intro-${i}`} block={block} />
                  ))}
                </SectionHeading>
              )}
              {group.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <>
          <SectionHeading section={section} gap={headingGap}>
            {section.intro?.map((block, i) => (
              <Block key={`intro-${i}`} block={block} />
            ))}
            {section.inlineBlocks && section.blocks?.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </SectionHeading>
          {!section.inlineBlocks && section.blocks?.length > 0 && (
            <div
              className={styles.sectionBody}
              style={{
                marginTop: section.bodyGap ? `${section.bodyGap}px` : undefined,
                gap: section.bodyGap ? `${section.bodyGap}px` : undefined,
              }}
            >
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}

function SectionHeading({ section, gap, children }) {
  return (
    <div className={styles.headingGroup}>
      <span className={styles.eyebrow}>{section.label}</span>
      <div className={styles.headingRow} style={{ gap: `${gap}px` }}>
        <h2
          className={`${styles.heading} ${section.headingCase === 'title' ? styles.headingTitle : ''}`}
        >
          {section.heading.map((part, i) => (
            <span key={i} className={part.gold ? styles.headingGold : undefined}>
              {part.t}
            </span>
          ))}
        </h2>
        {children}
      </div>
    </div>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return <p className={styles.lead}><RichText text={block.text} /></p>
    case 'paragraphs':
      return (
        <div className={styles.paragraphs}>
          {block.items.map((p, i) => (
            <p key={i} className={styles.paragraph}><RichText text={p} /></p>
          ))}
        </div>
      )
    case 'subheading':
      return <h3 className={styles.subheading}>{block.text}</h3>
    case 'group':
      return (
        <div
          className={styles.blockGroup}
          style={block.gap ? { gap: `${block.gap}px` } : undefined}
        >
          {block.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      )
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag className={`${styles.list} ${block.ordered ? styles.listOrdered : styles.listBullet}`}>
          {block.items.map((it, i) => (
            <li key={i}><RichText text={it} /></li>
          ))}
        </ListTag>
      )
    }
    case 'cards':
      return <Cards block={block} />
    case 'personas':
      return <Personas items={block.items} />
    case 'callout':
      return <Callout block={block} />
    case 'journey':
      return <Journey block={block} />
    case 'variants':
      return <Variants block={block} />
    case 'finalDesigns':
      return <FinalDesigns items={block.items} />
    case 'gate':
      return <Gate block={block} />
    case 'offerMap':
      return <OfferMap rows={block.rows} />
    default:
      return null
  }
}

function Cards({ block }) {
  const isMetric = block.variant === 'metric'
  const cols = block.columns || block.items.length
  return (
    <div
      className={`${styles.cards} ${cols === 3 ? styles.cardsTight : ''}`}
      style={{ '--cols': cols }}
    >
      {block.items.map((it, i) => (
        <div key={i} className={styles.card}>
          <span className={styles.cardLabel}>{it.label}</span>
          <span className={isMetric ? styles.cardMetric : styles.cardValue}>
            <RichText text={it.value} />
          </span>
        </div>
      ))}
    </div>
  )
}

function Personas({ items }) {
  return (
    <div className={styles.personas}>
      {items.map((p, i) => (
        <div key={i} className={styles.persona}>
          <div className={styles.personaPortrait}>
            <img src={p.image} alt={p.name} />
          </div>
          <div className={styles.personaBody}>
            <div className={styles.personaHead}>
              <span className={styles.personaName}>{p.name}</span>
              <span className={styles.personaTagline}>{p.tagline}</span>
            </div>
            <div className={styles.personaQuote}>
              <span className={styles.personaQuoteBar} aria-hidden />
              <p>{`“${p.quote}”`}</p>
            </div>
            <p className={styles.personaContext}><RichText text={p.context} /></p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Callout({ block }) {
  if (block.style === 'icon') {
    return (
      <div className={`${styles.callout} ${styles.calloutIcon}`}>
        <LightbulbIcon />
        <div className={styles.calloutIconText}>
          {block.label && <span className={styles.calloutIconLabel}>{block.label}</span>}
          <p className={styles.calloutIconBody}>{block.body}</p>
        </div>
      </div>
    )
  }
  return (
    <div className={`${styles.callout} ${styles.calloutBar}`}>
      <span className={styles.calloutBarLine} aria-hidden />
      <div className={styles.calloutBarText}>
        <p className={styles.calloutBarTitle}>{block.title}</p>
        {block.body && <p className={styles.calloutBarBody}>{block.body}</p>}
      </div>
    </div>
  )
}

function Journey({ block }) {
  const markerFor = (step) => block.markers?.find((m) => m.step === step)
  return (
    <div className={styles.journey}>
      <div className={styles.journeyTrack}>
        {block.steps.map((step, i) => (
          <Fragment key={step}>
            <div className={styles.journeyStep}>
              <div
                className={`${styles.journeyNode} ${block.highlight?.includes(step) ? styles.journeyNodeActive : ''}`}
              >
                {step}
              </div>
              {markerFor(step) && (
                <div className={styles.journeyMarker}>
                  <span className={styles.journeyMarkerName}>{markerFor(step).name}</span>
                  <span className={styles.journeyMarkerLabel}>{markerFor(step).label}</span>
                </div>
              )}
            </div>
            {i < block.steps.length - 1 && (
              <span className={styles.journeyArrow} aria-hidden>
                <ArrowRightIcon />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function Variants({ block }) {
  return (
    <div className={styles.variants} style={{ '--cols': block.columns }}>
      {block.items.map((v, i) => (
        <div key={i} className={`${styles.variant} ${v.shipped ? styles.variantShipped : ''}`}>
          {v.shipped && <span className={styles.variantBadge}>SHIPPED</span>}
          <div className={styles.variantHead}>
            <div className={styles.variantHeadText}>
              <span className={styles.variantLabel}>{v.label}</span>
              <span className={styles.variantName}>{v.name}</span>
            </div>
          </div>
          {v.image && <img src={v.image} alt={v.name} className={styles.variantImage} />}
          {v.points ? (
            <ul className={styles.variantPoints}>
              {v.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.variantBody}>{v.body}</p>
          )}
        </div>
      ))}
    </div>
  )
}

function FinalDesigns({ items }) {
  return (
    <div className={styles.finalDesigns}>
      {items.map((d, i) => (
        <div key={i} className={styles.finalCard}>
          <div className={styles.finalRow}>
            <div className={styles.finalSide} data-side="left">
              {d.annotations.filter((a) => a.side === 'left').map((a, j) => (
                <div key={j} className={styles.annotation}>
                  <span className={styles.annotationLaw}>{a.law}</span>
                  <p className={styles.annotationBody}>{a.body}</p>
                </div>
              ))}
            </div>
            <div className={styles.finalCenter}>
              <span className={styles.finalCaption}>{d.label}</span>
              <img src={d.image} alt={d.label} className={styles.finalImage} />
            </div>
            <div className={styles.finalSide} data-side="right">
              {d.annotations.filter((a) => a.side === 'right').map((a, j) => (
                <div key={j} className={styles.annotation}>
                  <span className={styles.annotationLaw}>{a.law}</span>
                  <p className={styles.annotationBody}>{a.body}</p>
                </div>
              ))}
            </div>
            <ol className={styles.finalMobileList}>
              {d.annotations.map((a, j) => (
                <li key={j}>
                  <span className={styles.annotationLaw}>{a.law}</span>
                  <p className={styles.annotationBody}>{a.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  )
}

function Gate({ block }) {
  return (
    <div className={styles.gate}>
      <span className={styles.gateLabel}>{block.label}</span>
      <div className={styles.gateRules}>
        {block.rules.map((r, i) => (
          <Fragment key={i}>
            <span className={styles.gateRule}>{r}</span>
            {i < block.rules.length - 1 && <span className={styles.gateOr}>or</span>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function OfferMap({ rows }) {
  return (
    <div className={styles.offerMap}>
      <div className={styles.offerHeader}>
        <span>Offer type</span>
        <span>Cart state</span>
        <span>Widget shows</span>
      </div>
      {rows.map((row, i) => (
        <div key={i} className={styles.offerRow}>
          <span className={row.offer ? styles.offerBadge : styles.offerEmpty}>
            {row.offer || ''}
          </span>
          <span className={styles.offerState}>{row.state}</span>
          <span className={styles.offerShows}>{row.shows}</span>
        </div>
      ))}
    </div>
  )
}

function RichText({ text }) {
  if (text == null) return null
  const parts = String(text).split(/(\*\*[^*]+\*\*|==[^=]+==)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i} className={styles.rtStrong}>{p.slice(2, -2)}</strong>
    }
    if (p.startsWith('==') && p.endsWith('==')) {
      return <span key={i} className={styles.rtHighlight}>{p.slice(2, -2)}</span>
    }
    return <Fragment key={i}>{p}</Fragment>
  })
}

function LightbulbIcon() {
  return (
    <svg className={styles.lightbulb} width="28" height="28" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 21h6" />
      <path d="M10 25h4" />
      <path d="M12 3a8 8 0 0 0-5 14.3c.6.5 1 1.3 1 2.1V20h8v-.6c0-.8.4-1.6 1-2.1A8 8 0 0 0 12 3Z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="0" y1="6" x2="28" y2="6" />
      <polyline points="24 2 30 6 24 10" />
    </svg>
  )
}
