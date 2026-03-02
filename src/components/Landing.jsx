import sequoiaBg from '../assets/sequoia-sunrise.jpg'

export default function Landing() {
  return (
    <section
      id="landing"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        <h1
          className="font-['Sora'] font-black text-center m-0 leading-[0.85] tracking-tighter w-full"
          style={{
            fontSize: 'clamp(80px, 15vw, 250px)',
            backgroundImage: `url(${sequoiaBg})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            // Fallback for mobile/safari if fixed attachment acts weird
          }}
        >
          <span className="block max-sm:bg-scroll max-sm:bg-[#5d524b] max-sm:[-webkit-text-fill-color:initial] max-sm:[-webkit-background-clip:initial] max-sm:bg-none">ANDREW</span>
          <span className="block max-sm:bg-scroll max-sm:bg-[#5d524b] max-sm:[-webkit-text-fill-color:initial] max-sm:[-webkit-background-clip:initial] max-sm:bg-none">VONG</span>
        </h1>
      </div>
    </section>
  )
}
