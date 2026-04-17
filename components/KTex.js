import { useEffect, useRef, useState } from 'react'

/**
 * Convert LaTeX math source into a clean Unicode string.
 *
 * ORDER MATTERS. Multi-character compound tokens must be resolved
 * BEFORE single-character macros and structural cleanup. Any reversal
 * produces malformed output like "K t e x t a u t o" which is a
 * public boundary failure under Rank-0.
 */
function unicodeFallback(math) {
  let s = String(math)

  // 1. COMPOUND PATTERNS — must run first
  s = s.replace(/K_\{\\text\{auto\}\}/g, 'Kₐᵤₜₒ')
  s = s.replace(/K_\{\\mathrm\{auto\}\}/g, 'Kₐᵤₜₒ')
  s = s.replace(/K_\{auto\}/g, 'Kₐᵤₜₒ')
  s = s.replace(/K_auto/g, 'Kₐᵤₜₒ')
  s = s.replace(/K_\\text\{auto\}/g, 'Kₐᵤₜₒ')

  s = s.replace(/\\mathcal\{I\}/g, 'ℐ')
  s = s.replace(/\\mathcal\{K\}/g, 'K')
  s = s.replace(/\\mathcal\{B\}/g, 'B')
  s = s.replace(/\\mathcal\{R\}/g, 'ℝ')
  s = s.replace(/\\mathcal\{C\}/g, '𝒞')

  s = s.replace(/\\text\{([^}]+)\}/g, '$1')
  s = s.replace(/\\mathrm\{([^}]+)\}/g, '$1')
  s = s.replace(/\\operatorname\{([^}]+)\}/g, '$1')

  s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')

  // 2. UPPERCASE GREEK
  s = s.replace(/\\Phi/g, 'Φ')
  s = s.replace(/\\Sigma/g, 'Σ')
  s = s.replace(/\\Omega/g, 'Ω')
  s = s.replace(/\\Delta/g, 'Δ')
  s = s.replace(/\\Gamma/g, 'Γ')
  s = s.replace(/\\Lambda/g, 'Λ')
  s = s.replace(/\\Theta/g, 'Θ')

  // 3. LOWERCASE GREEK
  s = s.replace(/\\alpha/g, 'α')
  s = s.replace(/\\beta/g, 'β')
  s = s.replace(/\\gamma/g, 'γ')
  s = s.replace(/\\delta/g, 'δ')
  s = s.replace(/\\epsilon/g, 'ε')
  s = s.replace(/\\varepsilon/g, 'ε')
  s = s.replace(/\\theta/g, 'θ')
  s = s.replace(/\\lambda/g, 'λ')
  s = s.replace(/\\mu/g, 'μ')
  s = s.replace(/\\nu/g, 'ν')
  s = s.replace(/\\pi/g, 'π')
  s = s.replace(/\\rho/g, 'ρ')
  s = s.replace(/\\sigma/g, 'σ')
  s = s.replace(/\\tau/g, 'τ')
  s = s.replace(/\\phi/g, 'φ')
  s = s.replace(/\\chi/g, 'χ')
  s = s.replace(/\\psi/g, 'ψ')
  s = s.replace(/\\omega/g, 'ω')

  // 4. STRUCTURAL SYMBOLS
  s = s.replace(/\\rightarrow/g, '→')
  s = s.replace(/\\leftarrow/g, '←')
  s = s.replace(/\\Rightarrow/g, '⇒')
  s = s.replace(/\\Leftarrow/g, '⇐')
  s = s.replace(/\\Leftrightarrow/g, '⇔')
  s = s.replace(/\\leftrightarrow/g, '↔')
  s = s.replace(/\\uparrow/g, '↑')
  s = s.replace(/\\downarrow/g, '↓')
  s = s.replace(/\\leq/g, '≤')
  s = s.replace(/\\geq/g, '≥')
  s = s.replace(/\\neq/g, '≠')
  s = s.replace(/\\approx/g, '≈')
  s = s.replace(/\\equiv/g, '≡')
  s = s.replace(/\\land/g, '∧')
  s = s.replace(/\\lor/g, '∨')
  s = s.replace(/\\forall/g, '∀')
  s = s.replace(/\\exists/g, '∃')
  s = s.replace(/\\infty/g, '∞')
  s = s.replace(/\\nabla_c/g, '∇c')
  s = s.replace(/\\nabla/g, '∇')
  s = s.replace(/\\partial/g, '∂')
  s = s.replace(/\\in/g, '∈')
  s = s.replace(/\\subset/g, '⊂')
  s = s.replace(/\\cup/g, '∪')
  s = s.replace(/\\cap/g, '∩')
  s = s.replace(/\\ast/g, '*')

  s = s.replace(/\\int_\{[^}]*\}\^\{[^}]*\}/g, '∫')
  s = s.replace(/\\int/g, '∫')
  s = s.replace(/\\sum_\{[^}]*\}\^\{[^}]*\}/g, 'Σ')
  s = s.replace(/\\sum/g, 'Σ')

  s = s.replace(/\\arg\\min/g, 'argmin')
  s = s.replace(/\\arg\\max/g, 'argmax')
  s = s.replace(/\\arg/g, 'arg')
  s = s.replace(/\\min/g, 'min')
  s = s.replace(/\\max/g, 'max')

  // 5. SUPER/SUB-SCRIPT common patterns
  s = s.replace(/x\^\*/g, 'x*')
  s = s.replace(/x\^\{\*\}/g, 'x*')
  s = s.replace(/I\^\*/g, 'I*')
  s = s.replace(/I\^\{\*\}/g, 'I*')

  // 6. SPACING CLEANUP
  s = s.replace(/\\quad/g, '  ')
  s = s.replace(/\\qquad/g, '    ')
  s = s.replace(/\\;/g, ' ')
  s = s.replace(/\\,/g, ' ')
  s = s.replace(/\\:/g, ' ')
  s = s.replace(/\\!/g, '')
  s = s.replace(/\\ /g, ' ')

  // 7. DELIMITER CLEANUP
  s = s.replace(/\\left\(/g, '(')
  s = s.replace(/\\right\)/g, ')')
  s = s.replace(/\\left\[/g, '[')
  s = s.replace(/\\right\]/g, ']')
  s = s.replace(/\\left\\\{/g, '{')
  s = s.replace(/\\right\\\}/g, '}')
  s = s.replace(/\\left/g, '')
  s = s.replace(/\\right/g, '')
  s = s.replace(/\\bigl/g, '')
  s = s.replace(/\\bigr/g, '')
  s = s.replace(/\\Bigl/g, '')
  s = s.replace(/\\Bigr/g, '')

  // 8. FINAL CLEANUP — strip only leftover backslashes; do NOT strip generic braces
  s = s.replace(/\\\\/g, ' ')
  s = s.replace(/\\([a-zA-Z]+)/g, '$1')
  s = s.replace(/\s+/g, ' ').trim()

  return s
}

export default function KTex({ math, display = false, className = '' }) {
  const ref = useRef(null)
  const [rendered, setRendered] = useState(false)
  const fallback = unicodeFallback(math)

  useEffect(() => {
    if (!ref.current) return
    let cancelled = false
    import('katex')
      .then(({ default: katex }) => {
        if (cancelled || !ref.current) return
        try {
          katex.render(math, ref.current, {
            throwOnError: false,
            displayMode: display,
            trust: false,
          })
          setRendered(true)
        } catch (e) {
          // keep Unicode fallback
        }
      })
      .catch(() => {
        // keep Unicode fallback
      })
    return () => { cancelled = true }
  }, [math, display])

  const baseStyle = {
    fontFamily: rendered ? 'inherit' : 'Georgia, serif',
    fontStyle: rendered ? 'normal' : 'italic',
  }

  if (display) {
    return (
      <div ref={ref} className={className} style={{ ...baseStyle, textAlign: 'center' }}>
        {fallback}
      </div>
    )
  }

  return (
    <span ref={ref} className={className} style={baseStyle}>
      {fallback}
    </span>
  )
}
