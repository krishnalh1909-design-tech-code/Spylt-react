import React from 'react'

const Wrapper = () => {
  return (
    <div className="page4 w-full min-h-screen flex flex-col items-center justify-center relative bg-[#222123] font-bold px-4 py-10 overflow-hidden">
      {/* HEADLINE STACK */}
      <div className="space-y-6 md:space-y-8 relative w-full flex flex-col items-center">
        {/* Self Stable */}
        <div className="w-full max-w-[600px] transform rotate-[3deg] border-[6px] md:border-[10px] border-[#222123] z-10">
          <h1 className="text-center font-[Antonio] text-[clamp(2rem,7vw,4rem)] bg-[#C88E64] text-[#FCE1CD] py-2 px-4">
            SELF STABLE
          </h1>
        </div>

        {/* Protein + Caffeine */}
        <div className="w-full max-w-[700px] border-[6px] md:border-[10px] border-[#222123]">
          <h1 className="text-center font-[Antonio] text-[clamp(2rem,7vw,4rem)] bg-[#FAEADE] text-[#2E2D2F] py-2 px-4">
            PROTEIN + CAFFEINE
          </h1>
        </div>

        {/* Infinitely Recyclable */}
        <div className="w-full max-w-[800px] transform rotate-[2deg] border-[8px] md:border-[15px] border-[#222123] z-10">
          <h1 className="text-center font-[Antonio] text-[clamp(2rem,7vw,4rem)] bg-[#7F3B2D] text-[#FCE1CD] py-2 px-4">
            INFINITELY RECYCLABLE
          </h1>
        </div>

        {/* Lactose Free */}
        <div className="w-full max-w-[600px] transform rotate-[-3deg] border-[6px] border-transparent">
          <h1 className="text-center font-[Antonio] text-[clamp(2rem,7vw,4rem)] bg-[#B09758] text-[#2E2D2F] py-2 px-4">
            LACTOSE FREE
          </h1>
        </div>
      </div>

      {/* SUBTEXTS */}
      <div className="text-center mt-12 space-y-2">
        <p className="font-[Antonio] text-[#E7CFBD] text-sm md:text-base font-light">
          Unlock the Advantages:
        </p>
        <p className="font-[Antonio] text-[#E7CFBD] text-sm md:text-base font-light">
          Explore the Key Benefits of Choosing SPYLT
        </p>
        <p className="font-[Antonio] text-[#E7CFBD] text-sm md:text-base font-light mt-4">
          And much more...
        </p>
      </div>
    </div>

  )
}

export default Wrapper
