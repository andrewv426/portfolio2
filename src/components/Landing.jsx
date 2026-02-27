import { useEffect, useState } from 'react'

const CYCLING_WORDS = ['build', 'explore', 'have fun :)']

export default function Landing() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length)
        setFade(true)
      }, 300)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="landing"
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center leading-tight">
          <h1 className="font-['Sora'] font-bold text-[#fff2f2] m-0 leading-none" style={{ fontSize: 'clamp(48px, 7vw, 108px)' }}>
            ANDREW
          </h1>
          <h1 className="font-['Sora'] font-bold text-[#fff5f5] m-0 leading-none" style={{ fontSize: 'clamp(48px, 7vw, 108px)' }}>
            VONG
          </h1>
        </div>

        {/* Animated currently text */}
        <div
          className="flex flex-row items-center font-['Space_Grotesk'] text-[#ebd7d7] m-0"
          style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}
        >
          <span className="w-[100px] text-right pr-1">learning to</span>
          <span
            className="w-[120px] text-left inline-block transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {CYCLING_WORDS[wordIndex]}
          </span>
        </div>
      </div>
    </section>
  )
}
