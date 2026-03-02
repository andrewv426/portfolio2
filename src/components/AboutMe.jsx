import durantImg from '../assets/durant.webp'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[864px] mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-8 font-['Karla'] text-[24px] text-[#5d524b] leading-normal mt-10 md:mt-0">

        {/* Left Column: Text */}
        <div className="flex flex-col gap-10 md:gap-14 flex-1 items-start w-full">
          {/* Header */}
          <div className="flex items-center gap-3">
            <h2 className="m-0 font-['Libre_Baskerville'] text-[40px] text-[#5d524b] font-normal tracking-tight lowercase">about me</h2>
          </div>

          {/* Academic block */}
          <div className="flex flex-col text-[16px]">
            <div className="flex items-center gap-2 mb-1">
              <p className="m-0 font-bold italic lowercase">academically..</p>

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
              </div>
            </div>
            <p className="m-0 lowercase">studying cs + math @ texas a&amp;m</p>
            <p className="m-0 lowercase">incoming swe @ [?]</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 lowercase">my current interests lie in ml, infra, and healthcare research!</p>
          </div>

          {/* Free time block */}
          <div className="flex flex-col text-[16px]">
            <p className="m-0 font-bold italic lowercase">away from school...</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 lowercase">i lift, play basketball, watch netflix, and occasionally play games :)</p>
          </div>
        </div>

        {/* Right Column: Single Image Slot */}
        <div className="flex flex-col items-center justify-center shrink-0 md:mr-4 w-full md:w-auto">
          <div className="relative group flex items-center justify-center">
            <img
              src={durantImg}
              alt="Me"
              className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-md shadow-lg object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#5d524b]/90 text-[#fef9ed] text-[12px] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              picture of me!
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
