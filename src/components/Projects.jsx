import TopTracks from './TopTracks'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[864px] mx-auto px-8 py-20 flex flex-col gap-10 font-['Red_Hat_Display'] text-[24px] text-[#ddd6d6] leading-normal">

        {/* Header */}
        <div className="flex items-center gap-3">
          <h2 className="m-0 font-['Libre_Baskerville'] text-[40px] text-[#fef9ed] font-normal tracking-tight">projects</h2>
        </div>

        {/* Projects placeholder */}
        <div className="flex flex-col gap-2 text-[16px]">
          <p className="m-0">some of my favorite work :)</p>
          <p className="m-0 opacity-60">to be updated soon ...</p>
        </div>

        {/* Spotify section */}
        <div className="flex flex-col gap-4">
          <p className="m-0">check my spotify to see what i&apos;m listening to :)</p>
          <TopTracks />
        </div>

      </div>
    </section>
  )
}
