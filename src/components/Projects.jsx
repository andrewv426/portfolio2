import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const sectionRef = useRef(null)

  // 250vh element + offset ["start end", "end end"] = 350vh tracked scroll.
  // Slide up over first 100vh (0→0.28), hold solid ~155vh (0.28→0.72), fade out last 100vh (0.72→1).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.95, 1, 1, 0.95])

  return (
    <section
      id="projects"
      ref={sectionRef}
      // Pulled up by 100vh so it overlaps the fade-out of AboutMe.
      className="relative h-[250vh] w-full bg-transparent -mt-[100vh] z-20 pointer-events-auto"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Content Wrapper */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-10 w-full max-w-[864px] mx-auto px-4 md:px-8 py-20 flex flex-col gap-10 font-['Karla'] text-[20px] md:text-[24px] text-[#fef9ed] leading-normal drop-shadow-md"
        >

          {/* Header */}
          <div className="flex items-center gap-3">
            <h2 className="m-0 font-['Libre_Baskerville'] text-[40px] text-[#fef9ed] font-normal tracking-tight lowercase drop-shadow-lg">projects</h2>
          </div>

          {/* Projects placeholder */}
          <div className="flex flex-col gap-2 text-[16px]">
            <p className="m-0 lowercase">some of my favorite work :)</p>
            <p className="m-0 opacity-60 lowercase">to be updated soon ...</p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
