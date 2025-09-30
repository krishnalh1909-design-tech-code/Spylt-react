import BgImg1 from "../assets/Images/bgImg.png"
import BgImg2 from "../assets/Images/bgImg2.png"

const BgImg = () => {
  return (
    <div
      className="bg-[#F9E9DD] bg-cover bg-center h-screen w-full absolute overflow-hidden block md:hidden"
      style={{ backgroundImage: `url(${BgImg1})` }}
    >
      <div className="sImg h-[40vh] w-full scale-140 absolute bottom-[0%]">
        <img className="h-full w-full object-contain" src={BgImg2} alt="Background Detail" />
      </div>
    </div>
  )
}

export default BgImg
