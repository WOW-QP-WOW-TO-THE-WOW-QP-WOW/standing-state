/**
 * GateCard — Single register gate card
 * Links to /system/gates/[slug]
 */
import Link from 'next/link'

export default function GateCard({ gate }) {
  return (
    <Link href={`/system/gates/${gate.slug}`} className="gateLinkWrap">
      <article className="gateCard">
        <div className="gateCardInner">
          <div className="gateLabel">{gate.title}</div>
          <div className="gateEquation">{gate.equation}</div>
          <div className="gateDescription">{gate.description}</div>
          <div className="gateCta">ENTER CATEGORY →</div>
        </div>
      </article>
    </Link>
  )
}
