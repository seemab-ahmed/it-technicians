import { useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Case Study', href: '#case-study' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="relative z-10 max-w-[1440px] mx-auto flex items-center justify-between px-6 py-6">
        <a href="/" className="cursor-pointer">
          <img src="/Images/Logo.png" alt="IT Technicians" />
        </a>

        <ul className="hidden md:flex font-inter gap-10 text-sm navMenu">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="relative after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block border border-white px-6 py-2 rounded-full text-sm font-inter menuBtn transition-all duration-300 hover:bg-white hover:text-[#00288D] hover:scale-105"
        >
          Request Project Support
        </a>

        <div
          className="md:hidden w-10 h-10 flex items-center justify-center rounded cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <img src="/Images/menuBtn.png" alt="Open menu" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
        >
          <div className="bg-white text-blue-900 w-[90%] max-w-sm md:max-h-sm rounded-2xl p-6 mt-6 relative">
            <div className="flex items-center justify-between mb-5">
              <a href="/">
                <img src="/Images/Logo2.png" alt="IT Technicians" />
              </a>
              <div className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                <img src="/Images/menu_close.png" alt="Close menu" />
              </div>
            </div>

            <ul className="space-y-6 text-lg">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="block text-center border border-blue-900 py-3 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Request Project Support
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
