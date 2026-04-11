/**
 * KTex — Central KaTeX render component.
 * Single source of truth for all symbol rendering across standingstate.com.
 * All variables on the site route through this component.
 */
import katex from 'katex'



export default function KTex({ math, display = false, className = '' }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: display,
  })

  if (display) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
