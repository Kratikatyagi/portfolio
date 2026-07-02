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
    <div className={`${styles.uvBody} ${project.accentTheme ? styles[project.accentTheme] || '' : ''}`}>
      {project.headerImage && project.headerImage.bare && (
        <div className={styles.bannerBare}>
          <img
            src={theme === 'dark' ? project.headerImage.dark : project.headerImage.light}
            alt={project.title}
          />
        </div>
      )}

      {project.headerImage && !project.headerImage.bare && (
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
    case 'microLabel':
      return <p className={styles.microLabel}>{block.text}</p>
    case 'lensTitle':
      return <h3 className={styles.lensTitle}>{block.text}</h3>
    case 'metrics':
      return <Metrics block={block} />
    case 'noteCards':
      return <NoteCards block={block} />
    case 'donuts':
      return <Donuts items={block.items} columns={block.columns} />
    case 'gapCards':
      return <GapCards items={block.items} />
    case 'quote':
      return <PullQuote block={block} />
    case 'hta':
      return <Hta items={block.items} />
    case 'references':
      return <References items={block.items} />
    case 'personaCards':
      return <PersonaCards items={block.items} />
    case 'noteBox':
      return <NoteBox block={block} />
    case 'splitImage':
      return <SplitImage block={block} />
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
    case 'table':
      return <DataTable block={block} />
    case 'image':
      return <Figure block={block} />
    case 'phones':
      return <Phones items={block.items} />
    case 'infoBox':
      return <InfoBox block={block} />
    case 'pills':
      return <Pills items={block.items} />
    case 'tiers':
      return <Tiers items={block.items} />
    case 'button':
      return <LinkButton block={block} />
    case 'annotatedDesign':
      return <AnnotatedDesign design={block} />
    default:
      return null
  }
}

function Figure({ block }) {
  return (
    <figure className={styles.figure}>
      <img src={block.src} alt={block.alt || ''} className={styles.figureImg} />
      {block.caption && <figcaption className={styles.figureCaption}>{block.caption}</figcaption>}
    </figure>
  )
}

function Phones({ items }) {
  return (
    <div className={styles.phones}>
      {items.map((src, i) => (
        <img key={i} src={src} alt="" className={styles.phoneShot} />
      ))}
    </div>
  )
}

function InfoBox({ block }) {
  return (
    <div className={styles.infoBox}>
      {block.icon && <span className={styles.infoBoxIcon} aria-hidden>{block.icon}</span>}
      <ul className={styles.infoBoxList}>
        {block.items.map((it, i) => (
          <li key={i} className={styles.infoBoxItem}><RichText text={it} /></li>
        ))}
      </ul>
    </div>
  )
}

function Pills({ items }) {
  return (
    <div className={styles.pills}>
      {items.map((p, i) => (
        typeof p === 'object' && p !== null ? (
          <span key={i} className={styles.pill}>
            <span className={styles.pillNum}>{p.num}</span>
            {p.text}
          </span>
        ) : (
          <span key={i} className={styles.pill}>{p}</span>
        )
      ))}
    </div>
  )
}

function Tiers({ items }) {
  return (
    <div className={styles.tiers}>
      {items.map((tier, i) => (
        <div key={i} className={styles.tier}>
          <span className={styles.tierLabel}>
            <span className={styles.tierIcon} aria-hidden>{tier.icon}</span>
            {tier.label}
          </span>
          <div className={styles.pills}>
            {tier.items.map((item, j) => (
              <span key={j} className={styles.pill}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function LinkButton({ block }) {
  const external = block.href && block.href !== '#'
  return (
    <a
      href={block.href || '#'}
      className={styles.linkButton}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {block.icon && <span aria-hidden>{block.icon}</span>}
      {block.label}
    </a>
  )
}

function AnnotatedDesign({ design }) {
  const left = design.annotations.filter((a) => a.side === 'left')
  const right = design.annotations.filter((a) => a.side === 'right')

  return (
    <div className={styles.annotated}>
      <div className={styles.annotatedSide} data-side="left">
        {left.map((a, i) => (
          <div key={i} className={styles.annotatedNote} style={{ top: a.top }}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.annotatedCenter}>
        <img src={design.image} alt={design.alt || ''} className={styles.annotatedImg} />
      </div>

      <div className={styles.annotatedSide} data-side="right">
        {right.map((a, i) => (
          <div key={i} className={styles.annotatedNote} style={{ top: a.top }}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </div>
        ))}
      </div>

      {/* Mobile fallback: annotations listed below the design */}
      <ol className={styles.annotatedMobile}>
        {design.annotations.map((a, i) => (
          <li key={i}>
            <span className={styles.annotationLaw}>{a.law}</span>
            <p className={styles.annotationBody}>{a.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
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

function Metrics({ block }) {
  const cols = block.columns || block.items.length
  return (
    <div className={styles.metrics} style={{ '--cols': cols }}>
      {block.items.map((it, i) => (
        <div key={i} className={styles.metricCard}>
          <span className={styles.metricValue}><RichText text={it.value} /></span>
          <span className={styles.metricLabel}>{it.label}</span>
        </div>
      ))}
    </div>
  )
}

function NoteCards({ block }) {
  const cols = block.columns || block.items.length
  const bordered = block.bordered !== false
  const numStyle = block.numStyle || 'none'
  return (
    <div
      className={`${styles.noteCards} ${bordered ? styles.noteCardsBordered : ''}`}
      style={{ '--cols': cols }}
    >
      {block.items.map((it, i) => (
        <div key={i} className={styles.noteCard}>
          {numStyle === 'big' && it.num && (
            <span className={styles.noteCardNum}>{it.num}</span>
          )}
          {(it.label || (numStyle === 'bracket' && it.num)) && (
            <span className={styles.noteCardLabel}>
              {numStyle === 'bracket' && it.num && (
                <span className={styles.noteCardBracket}>[{it.num}]</span>
              )}
              {it.label}
            </span>
          )}
          {it.title && <span className={styles.noteCardTitle}>{it.title}</span>}
          {it.body && <p className={styles.noteCardBody}><RichText text={it.body} /></p>}
        </div>
      ))}
    </div>
  )
}

function Donuts({ items, columns = 2 }) {
  return (
    <div className={styles.donuts} style={{ '--cols': columns }}>
      {items.map((d, i) => (
        <div key={i} className={styles.donutCard}>
          <div className={styles.donutRow}>
            <DonutChart segments={d.segments} />
            <div className={styles.donutLegend}>
              {d.segments.map((s, j) => (
                <div key={j} className={styles.donutLegendItem}>
                  <span className={styles.donutSwatch} style={{ background: s.color }} aria-hidden />
                  <span className={styles.donutLegendLabel}>{s.label}</span>
                  <span className={styles.donutLegendValue}>{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
          {d.caption && <p className={styles.donutCaption}>{d.caption}</p>}
        </div>
      ))}
    </div>
  )
}

function DonutChart({ segments }) {
  const R = 25
  const C = 2 * Math.PI * R
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 100
  let offset = 0
  return (
    <svg className={styles.donutSvg} viewBox="0 0 64 64" role="img" aria-hidden>
      <circle cx="32" cy="32" r={R} fill="none" stroke="var(--uv-donut-track)" strokeWidth="9" />
      {segments.map((s, i) => {
        const len = (s.value / total) * C
        const dash = `${len} ${C - len}`
        const dashOffset = -offset
        offset += len
        return (
          <circle
            key={i}
            cx="32"
            cy="32"
            r={R}
            fill="none"
            stroke={s.color}
            strokeWidth="9"
            strokeDasharray={dash}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 32 32)"
          />
        )
      })}
      <text x="32" y="29" className={styles.donutTotalLabel} textAnchor="middle">Total</text>
      <text x="32" y="39" className={styles.donutTotalValue} textAnchor="middle">100%</text>
    </svg>
  )
}

function GapCards({ items }) {
  return (
    <div className={styles.gapCards}>
      {items.map((c, i) => (
        <div key={i} className={styles.gapCard}>
          <span className={`${styles.gapCardTitle} ${c.tone === 'bad' ? styles.gapBad : styles.gapGood}`}>
            {c.title}
          </span>
          <ul className={styles.gapList}>
            {c.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function PullQuote({ block }) {
  return (
    <figure className={styles.pullQuote}>
      <blockquote className={styles.pullQuoteText}>{`“${block.text}”`}</blockquote>
      {block.cite && <figcaption className={styles.pullQuoteCite}>{block.cite}</figcaption>}
    </figure>
  )
}

function Hta({ items }) {
  return (
    <div className={styles.hta}>
      {items.map((it, i) => (
        <div key={i} className={styles.htaRow}>
          <span className={styles.htaNum}>{it.n}</span>
          <div className={styles.htaText}>
            <span className={styles.htaTitle}>{it.title}</span>
            {it.detail && <span className={styles.htaDetail}>{it.detail}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

function References({ items }) {
  return (
    <div className={styles.references}>
      <span className={styles.referencesLabel}>References</span>
      <ol className={styles.referencesList}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ol>
    </div>
  )
}

function PersonaCards({ items }) {
  return (
    <div className={styles.personaCards}>
      {items.map((p, i) => (
        <div key={i} className={styles.personaCard}>
          <div className={styles.personaCardHead}>
            <span className={styles.personaCardName}>{p.name}</span>
            <span className={styles.personaCardRole}>{p.role}</span>
          </div>
          <p className={styles.personaCardQuote}>{`“${p.quote}”`}</p>
          <p className={styles.personaCardValues}>{p.values}</p>
          <p className={styles.personaCardRisk}><RichText text={p.risk} /></p>
        </div>
      ))}
    </div>
  )
}

function NoteBox({ block }) {
  return (
    <div className={`${styles.noteBox} ${block.bare ? styles.noteBoxBare : ''}`}>
      {block.label && <span className={styles.noteBoxLabel}>{block.label}</span>}
      {block.body && <p className={styles.noteBoxBody}>{block.body}</p>}
      {block.foot && <p className={styles.noteBoxFoot}>{block.foot}</p>}
    </div>
  )
}

function SplitImage({ block }) {
  return (
    <div className={styles.splitImage}>
      <div className={styles.splitImageText}>
        {block.note
          ? <NoteBox block={block.note} />
          : block.paragraphs?.map((p, i) => (
              <p key={i} className={styles.paragraph}><RichText text={p} /></p>
            ))}
      </div>
      <div className={styles.splitImageMedia}>
        <img src={block.src} alt={block.alt || ''} />
        {block.caption && <span className={styles.splitImageCaption}>{block.caption}</span>}
      </div>
    </div>
  )
}

function Callout({ block }) {
  if (block.style === 'hook') {
    return (
      <div className={`${styles.callout} ${styles.calloutBar} ${styles.calloutHook}`}>
        <span className={styles.calloutBarLine} aria-hidden />
        <div className={styles.calloutBarText}>
          {block.title && <p className={styles.calloutHookTitle}>{block.title}</p>}
          {block.body && <p className={styles.calloutHookSub}>{block.body}</p>}
        </div>
      </div>
    )
  }
  if (block.style === 'icon') {
    return (
      <div className={`${styles.callout} ${styles.calloutIcon}`}>
        <LightbulbIcon />
        <div className={styles.calloutIconText}>
          {block.label && <span className={styles.calloutIconLabel}>{block.label}</span>}
          {Array.isArray(block.body) ? (
            <ul className={styles.calloutBullets}>
              {block.body.map((b, i) => (
                <li key={i}><RichText text={b} /></li>
              ))}
            </ul>
          ) : (
            <p className={styles.calloutIconBody}><RichText text={block.body} /></p>
          )}
        </div>
      </div>
    )
  }
  if (block.style === 'stat') {
    return (
      <div className={`${styles.callout} ${styles.calloutBar} ${styles.calloutStat}`}>
        <span className={styles.calloutBarLine} aria-hidden />
        <div className={styles.calloutBarText}>
          {block.title && <p className={styles.calloutStatTitle}>{block.title}</p>}
          {block.body && <p className={styles.calloutStatBody}><RichText text={block.body} /></p>}
        </div>
      </div>
    )
  }
  return (
    <div className={`${styles.callout} ${styles.calloutBar}`}>
      <span className={styles.calloutBarLine} aria-hidden />
      <div className={styles.calloutBarText}>
        {block.title && <p className={styles.calloutBarTitle}>{block.title}</p>}
        {block.body && <p className={styles.calloutBarBody}><RichText text={block.body} /></p>}
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
    <div className={styles.variants} style={{ '--cols': block.columns, '--tmpl': block.template }}>
      {block.items.map((v, i) => (
        <div key={i} className={`${styles.variant} ${v.shipped || v.accent ? styles.variantShipped : ''}`}>
          {v.shipped && <span className={styles.variantBadge}>SHIPPED</span>}
          <div className={styles.variantHead}>
            <div className={styles.variantHeadText}>
              <span className={styles.variantLabel}>{v.label}</span>
              <span className={styles.variantName}>{v.name}</span>
            </div>
          </div>
          {v.screens ? (
            <div className={`${styles.variantScreens} ${v.flow ? styles.variantScreensFlow : ''}`}>
              {v.screens.map((s, j) => (
                <Fragment key={j}>
                  {j > 0 && v.flow && (
                    <span className={styles.variantScreenArrow} aria-hidden>
                      <ArrowRightIcon />
                    </span>
                  )}
                  <figure className={styles.variantScreen}>
                    <img src={s.src} alt={s.caption || v.name} />
                    {s.caption && <figcaption className={styles.variantScreenCaption}>{s.caption}</figcaption>}
                  </figure>
                </Fragment>
              ))}
            </div>
          ) : v.image ? (
            <img src={v.image} alt={v.name} className={styles.variantImage} />
          ) : null}
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

function DataTable({ block }) {
  return (
    <div className={styles.tableWrap}>
      {block.caption && <span className={styles.tableCaption}>{block.caption}</span>}
      <div className={styles.tableScroll}>
        <table className={styles.dataTable}>
          {block.head && (
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} style={block.colWidths ? { width: block.colWidths[i] } : undefined}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => {
                  if (cell && typeof cell === 'object' && cell.badge) {
                    return (
                      <td key={j} className={styles.tableCellBadge}>
                        <span className={`${styles.sevBadge} ${styles[`sev_${cell.tone}`] || ''}`}>
                          {cell.badge}
                        </span>
                      </td>
                    )
                  }
                  return (
                    <td key={j} className={j === 0 ? styles.tableCellFirst : undefined}>
                      <RichText text={cell} />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
