const reasons = [
  {
    icon: '/Images/ProvenExpertise.png',
    title: 'Proven Expertise',
    desc: 'Expertise in hospitality network testing and cabling verification.',
    maxW: 'max-w-[314px]',
  },
  {
    icon: '/Images/documented_Icon.png',
    title: 'Documented Deliverables',
    desc: 'Documented deliverables including testing summaries and photo verification.',
    maxW: 'max-w-[382px]',
  },
  {
    icon: '/Images/costEfficiency.png',
    title: 'Cost Efficiency',
    desc: 'Proven ability to execute efficiently in operational hotel environments.',
    maxW: 'max-w-[408px]',
  },
]

export default function WhyUs() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#00288D] mb-2 !leading-[1.3]">Why IT Technicians</h2>
      <p className="text-[#000000] text-lg mb-14">Enterprise Standards. Efficient Methodology.</p>

      <div className="grid md:grid-cols-3 gap-12">
        {reasons.map(({ icon, title, desc, maxW }) => (
          <div key={title} className="flex flex-col items-center transition-all duration-300 hover:-translate-y-2 cursor-default">
            <div className="w-16 h-16 rounded-full border-2 border-[#0A192F33] flex items-center justify-center mb-5 transition-all duration-300 hover:border-[#00288D] hover:shadow-md hover:scale-110">
              <div className="w-8 h-8 rounded">
                <img src={icon} alt="" className="transition-transform duration-300 hover:rotate-12" />
              </div>
            </div>
            <h3 className="font-bold text-black mb-2">{title}</h3>
            <p className={`text-black text-lg ${maxW}`}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
