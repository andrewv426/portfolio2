import TopTracks from './TopTracks'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center mb-32"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[864px] mx-auto px-4 md:px-8 py-20 flex flex-col gap-10 font-['Karla'] text-[20px] md:text-[24px] text-[#5d524b] leading-normal">

        {/* Header */}
        <div className="flex items-center gap-3">
          <h2 className="m-0 font-['Libre_Baskerville'] text-[40px] text-[#5d524b] font-normal tracking-tight lowercase">projects</h2>
        </div>

        {/* Projects placeholder */}
        <div className="flex flex-col gap-2 text-[16px]">
          <p className="m-0 lowercase">some of my favorite work :)</p>
          <p className="m-0 opacity-60 lowercase">to be updated soon ...</p>
        </div>

        {/* Spotify section */}
        <div className="flex flex-col gap-4 font-['Red_Hat_Display'] mt-8">
          <p className="m-0 lowercase">
            <a
              href="https://open.spotify.com/user/9nxz66bpinvbvd8o7u79wsztc?si=623c997752bd4282"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DB954] hover:underline transition-colors duration-300 inline-flex items-center gap-2"
            >
              follow me!
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </p>
          <TopTracks />
        </div>

      </div>
    </section>
  )
}
