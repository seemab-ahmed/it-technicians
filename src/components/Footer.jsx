const serviceAreas = ['San Diego', 'Orange County', 'Los Angeles']

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-5">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <a href="/" className="transition-opacity duration-300 hover:opacity-75">
            <img src="/Images/Logo2.png" alt="IT Technicians" />
            <p className="mt-4 text-[#4A5568] max-w-xs">
              Physical infrastructure deployment and field execution experts
            </p>
          </a>

          <div>
            <h3 className="text-[#00288D] font-semibold mb-4">Industries</h3>
            <ul className="space-y-3 text-[#00288D]">
              <li className="transition-all duration-200 hover:translate-x-1 hover:opacity-75 cursor-default">Hospitality Brands</li>
              <li className="transition-all duration-200 hover:translate-x-1 hover:opacity-75 cursor-default">Enterprise Properties</li>
              <li className="transition-all duration-200 hover:translate-x-1 hover:opacity-75 cursor-default">Contractors &amp; Vendors</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#00288D] font-semibold mb-4">Service Area</h3>
            <ul className="space-y-3 text-[#00288D]">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:opacity-75 cursor-default">
                  <img src="/Images/map-pin.png" alt="" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-[#4A5568] text-sm font-inter">
          © 2026 IT Technicians. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
