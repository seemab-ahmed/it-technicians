export default function ServiceArea() {
  return (
    <section id="service-area" className="max-w-[1440px] mx-auto px-6 mt-16">
      <div className="rounded-3xl p-10 md:p-[96px] text-white bg-gradient-to-r from-[#0E0E27] via-[#4361AD] to-[#4361AD]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-[36px] font-semibold !leading-[1.3] mb-4 text-[#FFFFFF]">
              We operate across all of California, supporting hospitality and infrastructure
              projects statewide.
            </h2>
            <p className="text-[#FFFFFF] text-[20px] leading-relaxed max-w-md">
              For larger or multi location deployments, we also take on projects outside the state
              with planned coordination and full operational support.
            </p>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="rounded-lg flex items-center justify-center">
              <img src="/Images/MapImg.png" alt="" className="md:w-[353px] w-[209px] transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
