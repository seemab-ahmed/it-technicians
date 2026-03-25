const projects = [
  {
    img: '/Images/ProjectCase1.png',
    title: 'Hilton Hotel Anaheim Resort',
    desc: 'Comprehensive network cabling test and verification conducted in a live hospitality environment. Legacy cable runs were identified and selectively upgraded to align with updated infrastructure standards, ensuring stable connectivity across the property.',
    btnClass: 'border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition',
  },
  {
    img: '/Images/ProjectCase2.png',
    title: 'Embassy Suites by Hilton',
    desc: 'Structured cabling validation and performance testing completed as part of a network refresh initiative. Outdated cable segments were replaced to support improved reliability and compliance with current deployment requirements.',
    btnClass: 'border border-[#00288D] text-[#00288D] px-5 py-2 rounded-full text-sm hover:bg-[#00288D] hover:text-white transition',
  },
  {
    img: '/Images/ProjectCase3.png',
    title: 'Hilton San Diego Mission Valley',
    desc: 'On site infrastructure assessment including full cabling test verification and targeted cable replacement where needed. The project enhanced overall network integrity while maintaining uninterrupted hotel operations.',
    btnClass: 'border border-[#00288D] text-[#00288D] px-5 py-2 rounded-full text-sm hover:bg-[#00288D] hover:text-white transition',
  },
]

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-14 !leading-[1.3]">
          Selected Case Study Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ img, title, desc, btnClass }) => (
            <div key={title} className="hover:shadow-xl transition-all duration-300 cursor-pointer card hover:-translate-y-2 rounded-xl overflow-hidden">
              <div className="lg:w-[384px] md:w-[320px] myProject overflow-hidden">
                <img src={img} alt="" className="rounded-md w-full transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[24px] mb-3 !leading-[1.3]">{title}</h3>
                <p className="text-[#4A5568] text-lg mb-5 max-w-[384px] md:max-w-[350px]">
                  {desc}
                </p>
                <button className={btnClass}>View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
