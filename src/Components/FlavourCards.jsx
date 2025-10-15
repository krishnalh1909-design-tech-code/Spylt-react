import { Link } from "react-router-dom";
import flavoursdata from "../Components/FlavoursData";

const FlavourCards = () => {
  return (
    <div className="flavours w-full h-full py-7 md:w-[100vw] lg:h-screen lg:w-[310vw] flex flex-col md:flex-col lg:flex-row items-center justify-between overflow-x-auto md:overflow-hidden">
      {flavoursdata.map(({ id, containerClasses, bgSrc, bottomImgSrc, topImgSrc }) => (
        <Link
          key={id}
          to={`/flavours/${id}`}
          className={`flavour1 ${containerClasses} card-bg w-[80%] h-[45vw] lg:w-[14%] lg:h-[50vh] rounded-3xl relative mx-auto mt-14 mb-3 lg:mt-10 lg:mx-10 lg:shrink-0`}
        >
          <img
            src={bgSrc}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
          <img
            src={bottomImgSrc}
            alt=""
            className="bottomSrc absolute bottom-[0%] left-[25.5%] w-[35vw] lg:w-[25vw] lg:h-[35vw]"
          />
          <img
            src={topImgSrc}
            alt=""
            className="can snacks absolute top-[-15.5%] left-[7%] w-[60vw] lg:w-[37vw]"
          />
        </Link>
      )
      )}
    </div>
  )
}

export default FlavourCards
