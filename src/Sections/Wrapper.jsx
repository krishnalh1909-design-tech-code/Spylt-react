

const Wrapper = () => {
  return (
    <div
      className="page4 w-full h-screen md:h-screen lg:h-[130vh] flex flex-col gap-3 items-center justify-center bg-[#222123] font-bold"
    >

      <div className="font-[Antonio] text-[#E7CFBD] font-light text-2xl">
        <p>
          Unlock the Advantages:
        </p>
      </div>

      <div className="font-[Antonio] text-[#E7CFBD] font-light text-2xl">
        <p>
          Explore the Key Benefits of Choosing SPYLT
        </p>
      </div>


      <div className="textBox h-[60vh] lg:h-[90vh] w-full flex flex-col justify-center items-center font-bold">

        <div className="border-[#222123] border-[8px] rotate-[3deg]  text-[#FCE1CD] text-center overflow-hidden font-[Antonio] text-[10vw] lg:text-[6vw] z-50 w-[60vw] lg:w-[40vw]">
          <h1 className="bg-[#C88E64]">SHELF STABLE</h1>
        </div>

        <div className="overflow-hidden rotate-[-1deg] font-[Antonio] text-[#2E2D2F] text-center text-[10vw] lg:text-[6vw] w-[80vw] lg:w-[50vw]">
          <h1 className=" bg-[#FAEADE]">PROTEIN + CAFFEINE</h1>
        </div>

        <div className="mt-[10px] overflow-hidden rotate-[1deg] font-[Antonio] text-center text-[#FCE1CD] z-50 border-[8px] border-[#222123] lg:w-[60vw] lg:text-[6vw] text-[10vw] w-[90vw]">
          <h1 className="bg-[#7F3B2D]">INFINITELY RECYCLABLE</h1>
        </div>

        <div className="overflow-hidden rotate-[-3deg] font-[Antonio] text-center lg:text-[6vw] lg:w-[60vw] text-[10vw] w-[60vw]  text-[#2E2D2F] ">
          <h1 className="bg-[#FED775]">LACTOSE FREE</h1>
        </div>


      </div>

      <div className="font-[Antonio] text-[#E7CFBD] font-light text-2xl">
        <p>And much more...</p>
      </div>

    </div>
  )
}

export default Wrapper
