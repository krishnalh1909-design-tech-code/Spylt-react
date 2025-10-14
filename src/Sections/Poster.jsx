import MeltingBg from "../assets/melting-bg.svg"
import TextAnimation from "../Components/TextAnimation"

const Poster = () => {
  return (
    <div className="page3 w-full h-[90vh] md:h-[110vh] relative bg-[#E0D1B8] mt-[-10px] overflow-hidden">

      <div className="h-[60vh] overflow-hidden absolute top-0 z-10">

        <img
          className=" object-cover object-left"
          src={MeltingBg}
          alt=""
        />

      </div>

      <div className="z-50 absolute bottom-0 md:bottom-[0%] h-[50vh] md:h-[100vh] w-full">
        
        <img
          className="z-50 absolute bottom-0 md:bottom-[0%] h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66f680a53c9d01623c840586_66ba173c3434647ad01ee996_14856267915%20123123%201.webp"
          alt=""
        />
      </div>



      {/* <div className="absolute">
          <TextAnimation text="ddd" />
      </div> */}

    

      {/* <h1
        className="absolute z-50 text-[7vw] font-[Antonio] text-[#523122] font-bold top-[30%] left-[3%]"
      >
        IT STILL DOES
      </h1> */}

      {/* <div
        className="page3-tag w-[40vw] h-max absolute top-[43%] overflow-hidden left-[1%] z-200 p-5"
      >
        <h1
          className="z-200 w-[32vw] rotate-[-3deg] text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold bg-[#A26833] py-[0.5vw] px-[1.5vw] border-[#E0D1B8] border-[10px]"
        >
          BODY GOOD
        </h1>
      </div> */}

    </div>
  )
}

export default Poster
