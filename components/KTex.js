import { useEffect, useRef } from 'react'

function unicodeFallback(math) {
  return math
    .replace(/\\Phi\(x\)/g, 'Φ(x)')
    .replace(/\\Sigma/g, 'Σ')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\Rightarrow/g, '⇒')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\downarrow/g, '↓')
    .replace(/\\uparrow/g, '↑')
    .replace(/\\leq/g, '≤')
    .replace(/\\geq/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\land/g, '∧')
    .replace(/\\lor/g, '∨')
    .replace(/\\forall/g, '∀')
    .replace(/\\exists/g, '∃')
    .replace(/\\infty/g, '∞')
    .replace(/\\nabla/g, '∇')
    .replace(/\\partial/g, '∂')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\pi/g, 'π')
    .replace(/\\quad/g, '  ')
    .replace(/\\;/g, ' ')
    .replace(/\\,/g, ' ')
    .replace(/\\!/g, '')
    .replace(/\\text\{auto\}/g, 'auto')
    .replace(/\\text\{under\}/g, 'under')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/K_\{\\text\{auto\}\}/g, 'Kₐᵤₜₒ')
    .replace(/K_\{auto\}/g, 'Kₐᵤₜₒ')
    .replace(/K_\\text\{auto\}/g, 'Kₐᵤₜₒ')
    .replace(/K_\{\\mathrm\{auto\}\}/g, 'Kₐᵤₜₒ')
    .replace(/\\mathcal\{I\}/g, 'ℐ')
    .replace(/\\mathcal\{K\}/g, 'K')
    .replace(/\\mathcal\{B\}/g, 'B')
    .replace(/\\mathcal\{R\}/g, 'ℝ')
    .replace(/\\nabla_c/g, '∇c')
    .replace(/\\nabla/g, '∇')
    .replace(/x\^\*/g, 'x*')
    .replace(/x\^\{\\ast\}/g, 'x*')
    .replace(/I\^\*/g, 'I*')
    .replace(/\\pi\^\{/g, 'π{')
    .replace(/\\pi/g, 'π')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\int_\{([^}]*)\}\^\{([^}]*)\}/g, '∫')
    .replace(/\\int/g, '∫')
    .replace(/\\arg\\min/g, 'argmin')
    .replace(/\\arg/g, 'arg')
    .replace(/\\min/g, 'min')
    .replace(/\\max/g, 'max')
    .replace(/\\bigl\\/g, '')
    .replace(/\\bigr\\/g, '')
    .replace(/\\bigl/g, '')
    .replace(/\\bigr/g, '')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    .replace(/\{([^{}]+)\}/g, '$1')
    .replace(/\\/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export default function KTex({ math, display = false, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    import('katex').then(({ default: katex }) => {
      try {
        katex.render(math, ref.current, {
          throwOnError: false,
          displayMode: display,
          trust: false,
        })
      } catch (e) {
        if (ref.current) ref.current.textContent = unicodeFallback(math)
      }
    }).catch(() => {
      if (ref.current) ref.current.textContent = unicodeFallback(math)
    })
  }, [math, display])

  const fallback = unicodeFallback(math)

  if (display) {
    return (
      <div
        ref={ref}
        className={className}
        style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center' }}
      >
        {fallback}
      </div>
    )
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
    >
      {fallback}
    </span>
  )
}
