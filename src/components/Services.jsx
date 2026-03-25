const specializeItems = [
  'Large scale network testing and validation projects.',
  'Cabling test and verification in hospitality environments.',
  'WiFi access point testing and performance validation.',
  'Switch room infrastructure verification and documentation.',
  'Operational environment execution with minimal disruption.',
  'Coordination with property management and corporate IT.',
]

const hotelItems = [
  'Experience operating in live guest properties.',
  'Structured phased execution to minimize operational disruption.',
  'Professional conduct in hospitality settings.',
  'Clear communication with hotel management.',
  'Documented verification and test reports delivered after completion.',
]

function TickList({ items }) {
  return (
    <ul className="space-y-6 text-[#000000]">
      {items.map((item) => (
        <li key={item} className="flex items-start text-lg gap-3">
          <span>
            <img src="/Images/tickIcon.png" alt="" className="max-w-[32px]" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Services() {
  return (
    <section id="services" className="max-w-[1440px] mx-auto px-6 py-16 space-y-20">
      {/* Specialize In */}
      <div className="flex flex-col items-center md:flex-row gap-[100px]">
        <div className="flex justify-center md:justify-start overflow-hidden rounded-[24px]">
          <img
            src="/Images/TechniciansMan1.png"
            alt="Network Engineer"
            className="w-[510px] rounded-[24px] shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-[#00288D] mb-6 !leading-[1.3]">What We Specialize In</h2>
          <TickList items={specializeItems} />
        </div>
      </div>

      {/* Hotel Environments */}
      <div className="flex flex-col md:flex-row items-center gap-[100px]">
        <div className="max-w-xl order-2 md:order-1">
          <h2 className="text-5xl font-bold text-[#00288D] mb-6 !leading-[1.3]">
            Built for Operational Hotel Environments
          </h2>
          <TickList items={hotelItems} />
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/Images/TechniciansMan2.png"
            alt="Hotel Staff"
            className="w-[580px] rounded-[24px] shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
