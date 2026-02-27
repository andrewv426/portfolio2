import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY.current) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="mx-auto max-w-[864px] mt-6">
        <div className="bg-[#fef9ed] h-[64px] flex items-center justify-between px-8 relative rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          {/* Smiley left */}
          <span className="font-['Space_Grotesk'] text-[12px] text-[#644d4d] select-none">
            :)
          </span>

          {/* Logo center — absolute for true centering */}
          <a
            href="#landing"
            className="absolute left-1/2 -translate-x-1/2 font-['Libre_Baskerville'] text-[24px] text-[#5d524b] leading-none no-underline"
          >
            AV
          </a>

          {/* Nav links right */}
          <div className="flex items-center gap-[29px]">
            <a
              href="#about"
              className="font-['Libre_Baskerville'] text-[11px] text-[#5d524b] no-underline hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#projects"
              className="font-['Libre_Baskerville'] text-[11px] text-[#5d524b] no-underline hover:opacity-70 transition-opacity"
            >
              Projects
            </a>
            <span className="font-['Libre_Baskerville'] text-[11px] text-[#5d524b] cursor-default">
              Contact
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
