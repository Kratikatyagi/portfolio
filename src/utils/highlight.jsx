/**
 * Wraps any occurrence of the given phrases in a highlighted <span>.
 * Returns an array of strings / span elements suitable for rendering inside JSX.
 */
export function highlight(text, phrases, className) {
  if (!text || !phrases?.length) return text

  const escaped = phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(${escaped.join('|')})`, 'g')

  return text.split(re).map((part, i) =>
    phrases.includes(part)
      ? <span key={i} className={className}>{part}</span>
      : part
  )
}
