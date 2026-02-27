export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[864px] mx-auto px-8 py-20 flex flex-col gap-14 font-['Red_Hat_Display'] text-[24px] text-[#ddd6d6] leading-normal">

        {/* Header */}
        <div className="flex items-center gap-3">
          <h2 className="m-0 font-['Libre_Baskerville'] text-[40px] text-[#fef9ed] font-normal tracking-tight">about me</h2>
        </div>

        {/* Academic block */}
        <div className="flex flex-col text-[16px]">
          <div className="flex items-center gap-2 mb-1">
            <p className="m-0 font-bold italic">academically..</p>

            {/* Animated Rolling Eyes Emoji */}
            <div className="relative w-6 h-6 bg-[#FFCC4D] rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center gap-[2px]">
              {/* Left Eye */}
              <div className="relative w-[8px] h-[8px] bg-white rounded-full overflow-hidden">
                <div className="absolute top-[1px] left-[1px] w-[5px] h-[5px] bg-[#664500] rounded-full animate-[roll-eyes_4s_infinite]"></div>
              </div>
              {/* Right Eye */}
              <div className="relative w-[8px] h-[8px] bg-white rounded-full overflow-hidden">
                <div className="absolute top-[1px] left-[1px] w-[5px] h-[5px] bg-[#664500] rounded-full animate-[roll-eyes_4s_infinite]"></div>
              </div>
              {/* Mouth */}
              <div className="absolute bottom-[4px] w-[10px] h-[1.5px] bg-[#664500] rounded-full"></div>

              <style jsx>{`
                @keyframes roll-eyes {
                  0%, 10%, 100% { transform: translate(0, 0); }
                  20%, 30% { transform: translate(0, -3px); }
                  40%, 50% { transform: translate(1.5px, -3px); }
                  60%, 80% { transform: translate(-1.5px, -3px); }
                  90% { transform: translate(0, -3px); }
                }
              `}</style>
            </div>
          </div>
          <p className="m-0">studying cs + math @ texas a&amp;m</p>
          <p className="m-0">incoming  @ ??</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">my current interests lie in ML,  infra, and healthcare ! </p>
        </div>

        {/* Free time block */}
        <div className="flex flex-col text-[16px]">
          <p className="m-0 font-bold italic">on my free time..</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">i lift, play basketball, watch netflix, and occasionally play tft :)</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 opacity-60">(insert images of Rockets, Attack on Titan, TFT penguin)</p>

          {/* Stacked Images Dispersal Container */}
          <div className="relative w-32 h-32 mt-4 ml-8 group cursor-pointer flex items-center justify-center">

            {/* Image 3 (Bottom/Right): TFT Penguin */}
            <div className="absolute w-24 h-24 rounded-lg bg-[#2e374acc] backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-10 rotate-6 translate-x-3 translate-y-3 group-hover:rotate-6 group-hover:translate-x-[140%] group-hover:translate-y-0 shadow-lg">
              <span className="text-xs text-white text-center opacity-80">TFT<br />Penguin<br />(Img 3)</span>
            </div>

            {/* Image 2 (Middle/Left): Levi AOT */}
            <div className="absolute w-24 h-24 rounded-lg bg-[#3a4738cc] backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-20 -rotate-6 -translate-x-3 translate-y-2 group-hover:-rotate-6 group-hover:-translate-x-[140%] group-hover:translate-y-0 shadow-lg">
              <span className="text-xs text-white text-center opacity-80">Levi<br />AoT<br />(Img 2)</span>
            </div>

            {/* Image 1 (Top/Center): KD Rockets */}
            <div className="absolute w-28 h-28 rounded-lg bg-[#6a2020cc] backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-30 rotate-0 group-hover:scale-105 shadow-xl">
              <span className="text-xs text-white font-bold text-center">KD Rockets<br />(Img 1)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
