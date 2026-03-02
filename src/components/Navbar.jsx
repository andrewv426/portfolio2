import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  const scrollToLanding = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToAbout = (event) => {
    event.preventDefault()
    const section = document.getElementById('about')
    if (!section) {
      return
    }

    // AboutMe uses ["start start","end end"] and reaches full opacity at 0.4 progress.
    const viewportHeight = window.innerHeight
    const sectionHeight = section.offsetHeight
    const trackedDistance = Math.max(sectionHeight - viewportHeight, 0)
    const target = section.offsetTop + trackedDistance * 0.4
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  const scrollToProjects = (event) => {
    event.preventDefault()
    const section = document.getElementById('projects')
    if (!section) {
      return
    }

    // Projects uses ["start end","end end"] and reaches full opacity at 0.28 progress.
    const viewportHeight = window.innerHeight
    const sectionHeight = section.offsetHeight
    const trackedDistance = sectionHeight + viewportHeight
    const startOffset = section.offsetTop - viewportHeight
    const target = startOffset + trackedDistance * 0.28
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

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
      <div className="mx-auto max-w-[944px] mt-4 md:mt-6 px-4 md:px-0">
        <div className="bg-[#fef9ed] min-h-[64px] py-4 md:py-0 md:h-[64px] flex items-center justify-between px-6 md:px-8 relative rounded-[16px] md:rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="relative w-8 h-8 hidden md:flex items-center justify-center group cursor-default">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Frog head — flared cheeks, flat bottom, smooth eye bumps */}
              <path
                d="M 15 55 C 8 75, 20 90, 50 90 C 80 90, 92 75, 85 55 C 82 48, 78 40, 70 36 C 64 33, 58 35, 50 38 C 42 35, 36 33, 30 36 C 22 40, 18 48, 15 55 Z"
                stroke="#4F7955"
                strokeWidth="7.5"
                className="fill-transparent transition-colors duration-300"
              />

              {/* Left eye */}
              <circle
                cx="33" cy="46" r="4.5"
                stroke="none"
                className="fill-[#4F7955] transition-colors duration-300"
              />
              {/* Right eye */}
              <circle
                cx="67" cy="46" r="4.5"
                stroke="none"
                className="fill-[#4F7955] transition-colors duration-300"
              />

              {/* Smile - flattened wide curve */}
              <path
                d="M 28 65 Q 50 75 72 65"
                strokeWidth="5"
                className="stroke-[#4F7955] transition-colors duration-300"
              />

              {/* Tongue — bold, straighter, slightly darker pink */}
              <path
                d="M 52 73 Q 56 86, 68 84"
                stroke="#e85d9e"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 origin-[52px_70px] scale-0 group-hover:scale-100"
              />
            </svg>
          </div>

          {/* Logo center (absolute on desktop, natural flow on mobile) */}
          <a
            href="#landing"
            onClick={scrollToLanding}
            className="md:absolute md:left-1/2 md:-translate-x-1/2 font-['Libre_Baskerville'] text-[20px] md:text-[24px] text-[#5d524b] leading-none no-underline"
          >
            AV
          </a>

          {/* Nav links right */}
          <div className="flex items-center gap-[12px] md:gap-[29px]">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="relative font-solanel text-[10px] md:text-[14px] text-[#5d524b] no-underline hover-scroll-underline"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="relative font-solanel text-[10px] md:text-[14px] text-[#5d524b] no-underline hover-scroll-underline"
            >
              PROJECTS
            </a>
            <span className="font-solanel text-[10px] md:text-[14px] text-[#5d524b] cursor-default">
              CONNECT
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
