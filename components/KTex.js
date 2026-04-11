/**
 * KTex — Hybrid KaTeX render component.
 * Server-side: outputs raw LaTeX wrapped in a span (styled via CSS to be invisible until client loads)
 * Client-side: renders via KaTeX after mount
 * Falls back to Unicode approximation if KaTeX fails.
 */
'use client'
import { useEffect, useRef } from 'react'

// Unicode fallback map for common expressions
function unicodeFallback(math) {
  return math
    .replace(/\\Phi\(x\)/g, 'Φ(x)')
    .replace(/\\Sigma/g, 'Σ')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\Rightarrow/g, '⇒')
    .replace(/\\downarrow/g, '↓')
    .replace(/\\uparrow/g, '↑')
    .replace(/\\leq/g, '≤')
    .replace(/\\geq/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\implies/g, '⟹')
    .replace(/\\forall/g, '∀')
    .replace(/\\infty/g, '∞')
    .replace(/\\quad/g, ' ')
    .replace(/\\text\{auto\}/g, 'auto')
    .replace(/\\text\{under\}/g, 'under')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/K_\{\\text\{auto\}\}/g, 'Kₐᵤₜₒ')
    .replace(/K_\{auto\}/g, 'Kₐᵤₜₒ')
    .replace(/K_\\text\{auto\}/g, 'Kₐᵤₜₒ')
    .replace(/\\mathcal\{K\}_\{\\text\{auto\}\}/g, 'Kₐᵤₜₒ')
    .replace(/\\mathcal\{B\}\(t\)/g, 'B(t)')
    .replace(/x\^\*/g, 'x*')
    .replace(/x\^\{\\ast\}/g, 'x*')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\{([^}]+)\}/g, '$1')
    .replace(/\\/g, '')
    .trim()
}

export default function KTex({ math, display = false, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    import('katex').then(katex => {
      try {
        katex.default.render(math, ref.current, {
          throwOnError: false,
          displayMode: display,
        })
      } catch (e) {
        if (ref.current) {
          ref.current.textContent = unicodeFallback(math)
        }
      }
    }).catch(() => {
      if (ref.current) {
        ref.current.textContent = unicodeFallback(math)
      }
    })
  }, [math, display])

  // Server-side and initial render: show Unicode fallback
  const fallback = unicodeFallback(math)

  if (display) {
    return (
      <div
        ref={ref}
        className={className}
        style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}
      >
        {fallback}
      </div>
    )
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}
    >
      {fallback}
    </span>
  )
}
