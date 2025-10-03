import React from 'react'

const Wrapper = () => {
  return (
     <div
        className="page4 w-full min-h-[130vh] flex flex-col items-center relative bg-[#222123] font-bold"
      >
        <div
          className="z-50 overflow-hidden w-[40vw] h-max rotate-[3deg] absolute top-[20%] border-[10px] border-[#222123]"
        >
          <h1
            className="overflow-hidden w-[40vw] text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold bg-[#C88E64] text-center"
          >
            SELF STABLE
          </h1>
        </div>

        <div
          className="overflow-hidden absolute top-[37%] w-[50vw] h-max border-[10px] border-[#222123]"
        >
          <h1
            className="overflow-hidden w-[50vw] text-[7vw] font-[Antonio] text-[#2E2D2F] font-bold bg-[#FAEADE] text-center"
          >
            PROTEIN + CAFFEINE
          </h1>
        </div>

        <div
          className="z-50 border-[15px] border-[#222123] overflow-hidden absolute top-[54%] w-[60vw] h-max rotate-[2deg]"
        >
          <h1
            className="overflow-hidden w-[60vw] text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold bg-[#7F3B2D] text-center"
          >
            INFINITELY RECYCLABLE
          </h1>
        </div>

        <div
          className="overflow-hidden absolute top-[72%] w-[40vw] h-max rotate-[-3deg]"
        >
          <h1
            className="overflow-hidden w-[40vw] text-[7vw] font-[Antonio] text-[#2E2D2F] font-bold bg-[#B09758] text-center"
          >
            LACTOSE FREE
          </h1>
        </div>

        <p className="font-[Antonio] text-[#E7CFBD] mt-[10vh] font-light">
          Unlock the Advantages:
        </p>

        <p className="font-[Antonio] text-[#E7CFBD] mt-[1vh] font-light">
          Explore the Key Benefits of Choosing SPYLT
        </p>

        <p className="font-[Antonio] text-[#E7CFBD] absolute top-[95%] font-light">
          And much more...
        </p>
      </div>
  )
}

export default Wrapper
