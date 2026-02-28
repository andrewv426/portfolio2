import Navbar from './components/Navbar'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import sequoiaBg from './assets/sequoia-sunrise.jpg'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Single fixed background for the entire page */}
      <div className="fixed inset-0 z-0">
        <img
          src={sequoiaBg}
          alt=""
          className="w-full h-full object-cover opacity-40 blur-[0.75px] pointer-events-none select-none"
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Landing />
        <AboutMe />
        <Projects />
      </main>

      {/* Vercel Page View Analytics */}
      <Analytics />
    </div>
  )
}
