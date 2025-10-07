
import { Link } from "react-router-dom";
import flavoursdata from "../Components/FlavoursData";


const FlavourCards = () => {
  return (
    <div className="flavours w-full h-full md:w-[340vw] flex flex-col md:flex-row items-center justify-between overflow-x-auto md:overflow-hidden">
      {flavoursdata.map(({ id, containerClasses, bgSrc, bottomImgSrc, topImgSrc }) => (
        <Link
          key={id}
          to={`/flavours/${id}`}
          className={`flavour1 ${containerClasses} w-[80%] md:w-[14%] h-[45vw] md:h-[40%] lg:h-[55%] rounded-3xl relative mx-auto mt-14 mb-3 md:my-5 md:mx-5 md:shrink-0`}
        >
          <img
            src={bgSrc}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
          <img
            src={bottomImgSrc}
            alt=""
            className="absolute bottom-[0%] left-[25.5%] w-[35vw] md:w-[25vw] lg:h-[35vw]"
          />
          <img
            src={topImgSrc}
            alt=""
            className="can absolute top-[-15.5%] left-[7%] w-[60vw] md:w-[37vw]"
          />
        </Link>
      )
      )}
    </div>
  )
}

export default FlavourCards
