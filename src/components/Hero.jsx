import Navbar from './Navbar'

export default function Hero() {
  return (
    <header className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/Images/hero_img.png" className="w-full h-full object-cover" alt="hero" />
        <div className="absolute w-full object-cover inset-0 bg-[linear-gradient(to_right,rgba(10,25,60,0.95)_0%,rgba(10,25,60,0.90)_40%,rgba(10,25,60,0.70)_60%,rgba(10,25,60,0)_100%)]"></div>
      </div>

      <Navbar />

      <section className="relative z-10 max-w-[1440px] mx-auto px-6 pt-16 lg:pt-24">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold !leading-[1.3] text-[#FFFFFF] font-jakarta anim-fade-up">
            Large Scale On Site IT Infrastructure Execution Across Southern California
          </h1>

          <p className="mt-10 text-[#FFFFFF] !leading-[1.6] text-base md:text-lg anim-fade-up-1">
            Structured network testing, cabling verification and documented field execution for
            established hospitality brands from San Diego to Los Angeles.
          </p>

          <div className=" mt-4 lg:mt-[60px] flex flex-col md:flex-row items-center md:items-start gap-6 anim-fade-up-2">
            <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Request Project Support
              <img src="/Images/right-arrow.svg" alt="" />
            </a>

            <p className="text-[16px] text-gray-300 !leading-[1.3] max-w-xs">
              Submit your scope and property location. We respond within one business day
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className=" mt-12 xl:mt-[100px] flex flex-col md:flex-row gap-6 items-center md:items-start anim-fade-up-3">
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl flex items-center gap-4 max-w-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-center rounded">
              <img src="/Images/buildingIcon.png" alt="" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
            </div>
            <p className="text-[16px]">
              Focused on physical infrastructure deployment for complex hotel environments
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl flex items-center gap-4 max-w-[320px] transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-center rounded">
              <img src="/Images/reviewIcon.png" alt="" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
            </div>
            <p className="text-[16px]">Experience working on Hilton branded properties</p>
          </div>
        </div>
      </section>
    </header>
  )
}
