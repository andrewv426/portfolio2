import Navbar from './components/Navbar'
import Landing from './components/Landing'
import sequoiaBg from './assets/sequoia-sunrise.jpg'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Spotify from './components/Spotify'
import { Analytics } from '@vercel/analytics/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function App() {
  const mainRef = useRef(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  })

  // Option 3: Blur & Scale (Perfected Sequence)
  // The total page height is now massive because AboutMe is 300vh tall.
  // We want the beige mask to fade away *immediately* as the user leaves the Landing page,
  // so the forest is fully revealed before the About Me text even begins to fade in.  
  const bgScale = useTransform(scrollYProgress, [0, 0.1], [1.1, 1])
  const beigeOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <div className="relative min-h-screen w-full">
      {/* 
        LAYER 1: The permanent background and its darkened state.
        This provides the dark forest for About Me and Projects.
      */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sequoiaBg})`, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* 
        LAYER 2: Dynamic Beige Mask
        Fades out to reveal the darkened, scaling forest background. 
      */}
      <motion.div
        className="fixed inset-0 z-[2] bg-[#fef9ed] pointer-events-none"
        style={{ opacity: beigeOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 w-full" ref={mainRef}>
        <Navbar />
        <main className="relative w-full">
          <Landing />
          <AboutMe />
          <Projects />
          <Spotify />
        </main>

        <Analytics />
      </div>
    </div>
  )
}
