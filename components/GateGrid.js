/**
 * GateGrid — Five-register gate grid
 * Drop into any page: <GateGrid />
 */
import GateCard from './GateCard'
import { gateCategories } from './gatesData'

export default function GateGrid() {
  return (
    <section className="gateGridSection">
      <div className="gateGrid">
        {gateCategories.map((gate) => (
          <GateCard key={gate.id} gate={gate} />
        ))}
      </div>
    </section>
  )
}
