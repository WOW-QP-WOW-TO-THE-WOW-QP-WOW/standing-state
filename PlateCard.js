/**
 * PlateCard — Reusable plate card component
 * Used in /system/plates gallery and any future index
 */
import KTex from './KTex'

export default function PlateCard({ plate, index = 0 }) {
  const hasImage = plate.image && !plate.image.includes('placeholder')

  return (
    <a
      href={`/system/plates/${plate.slug}`}
      className={`plateCard reveal d${index > 4 ? 4 : index}`}
      aria-label={`${plate.number} — ${plate.title}`}
    >
      {/* Left accent */}
      <div className="plateCardAccent" />

      {/* Image zone */}
      <div className="plateCardImg">
        {hasImage ? (
          <img src={plate.image} alt={plate.title} />
        ) : (
          <div className="plateCardImgPlaceholder">
            <div className="plateCardPlaceholderNum">{plate.number}</div>
            <div className="plateCardPlaceholderEq">
              <KTex math={plate.governingCondition} />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="plateCardBody">
        <div className="plateCardMeta">
          <span className="plateCardNum">{plate.number}</span>
          <span className="plateCardVol">{plate.volume}</span>
        </div>
        <div className="plateCardTitle">{plate.title}</div>
        <p className="plateCardSummary">{plate.summary}</p>

        {/* Governing condition */}
        <div className="plateCardEq">
          <KTex math={plate.governingCondition} />
        </div>

        {/* Linked glossary terms */}
        {plate.linkedGlossary && plate.linkedGlossary.length > 0 && (
          <div className="plateCardVars">
            {plate.linkedGlossary.map(v => (
              <span key={v.anchor} className="plateCardVar">
                <KTex math={
                  v.anchor === 'sigma' ? '\\Sigma' :
                  v.anchor === 'phi'   ? '\\Phi(x)' :
                  v.anchor === 'kauto' ? 'K_{\\text{auto}}' :
                  v.anchor === 'bt'    ? 'B(t)' :
                  v.anchor === 'xstar' ? 'x^*' : v.label
                } />
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="plateCardArrow">→</div>
    </a>
  )
}
