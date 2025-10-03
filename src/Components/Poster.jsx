import MeltingBg from "../assets/melting-bg.svg"

const Poster = () => {
  return (
    <div class="page3 w-full h-[110vh] relative bg-[#E0D1B8]">

      <div>

        <img
          class="absolute top-0 z-10 object-cover object-left"
          src={MeltingBg}
          alt=""
        />

        <img
          class="z-50 absolute top-[10%] h-[100vh] w-full"
          src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66f680a53c9d01623c840586_66ba173c3434647ad01ee996_14856267915%20123123%201.webp"
          alt=""
        />
      </div>

      <h1
        class="absolute z-50 text-[7vw] font-[Antonio] text-[#523122] font-bold top-[30%] left-[3%]"
      >
        IT STILL DOES
      </h1>

      <div
        class="page3-tag w-[40vw] h-max absolute top-[43%] overflow-hidden left-[1%] z-200 p-5"
      >
        <h1
          class="z-200 w-[32vw] rotate-[-3deg] text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold bg-[#A26833] py-[0.5vw] px-[1.5vw] border-[#E0D1B8] border-[10px]"
        >
          BODY GOOD
        </h1>
      </div>
    </div>
  )
}

export default Poster
