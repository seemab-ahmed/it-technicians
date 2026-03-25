const steps = [
  { num: 1, title: 'Scope Review & Alignment', desc: 'Confirm testing objectives and deliverables' },
  { num: 2, title: 'Scheduling & Coordination', desc: 'Execution aligned with hotel operations' },
  { num: 3, title: 'On-Site Testing', desc: 'Network and cabling validation performed' },
  { num: 4, title: 'Documentation Delivery', desc: 'Detailed test reports and photo verification provided' },
  { num: 5, title: 'Follow-Up', desc: 'Available for coordination or additional scope review' },
]

export default function ExecutionProcess() {
  return (
    <section id="methodology" className="bg-gray-100 py-20 flex justify-center">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00288D] mb-3 !leading-[1.3]">
              Structured <br />
              Execution Process
            </h2>
            <p className="text-black text-sm mb-8">Our 5-Step Execution Methodology</p>
            <div className="max-w-[512px] overflow-hidden rounded-2xl">
              <img
                src="/Images/structuredExecutionMan.png"
                alt=""
                className="w-full h-[340px] rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex items-start gap-5 transition-all duration-300 hover:translate-x-2 group">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-[#00288D] font-bold text-2xl flex-shrink-0 transition-all duration-300 group-hover:bg-[#00288D] group-hover:text-white">
                  {num}
                </div>
                <div>
                  <h4 className="font-semibold text-[24px] !leading-[1.3]">{title}</h4>
                  <p className="text-black text-lg">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
