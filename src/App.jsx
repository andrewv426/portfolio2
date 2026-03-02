import Navbar from './components/Navbar'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="relative bg-[#fef9ed] min-h-screen">
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
