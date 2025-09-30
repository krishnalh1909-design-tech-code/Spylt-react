// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import flavoursdata from "./FlavoursData.js";

// gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const letters = ["W", "E", "H", "A", "V", "E", "6"];
  // const flavoursRef = useRef(null);

  

  return (
    <div className="h-screen w-[400vw] relative bg-[#FAEADE] flex">
      <div className=" we-have h-full w-[60vw] flex flex-col items-center justify-center font-[Antonio] text-[#523122] text-[7vw]">
        <div className="flex">
          {letters.map((char, index) => (
            <h1
              key={index}
              className={index === 2 || index === 6 ? "ml-5" : ""}
            >
              {char}
            </h1>
          ))}
        </div>

        <div className="freaking font-[Antonio] text-[#523122] font-extrabold flex">
          {"FREAKING".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className="freaking font-[Antonio] text-[#523122] font-extrabold flex">
          {"DELICIOUS FLAVOUR".split("").map((char, index) => (
            <span key={index} className={char === "S" ? "mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>
      </div>

      <div className="flavours w-[340vw] h-full flex items-center overflow-hidden">
        {/* <div className="flex justify-center"> */}
        {flavoursdata.map(
          ({ id, containerClasses, bgSrc, bottomImgSrc, topImgSrc }) => (
            <div
              key={id}
              className={`flavour1 ${containerClasses} w-[25%] h-[50vh] rounded-3xl relative`}
            >
              <img
                src={bgSrc}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
              <img
                src={bottomImgSrc}
                alt=""
                className="absolute bottom-[-23%] left-[20%] w-[25vw]"
              />
              <img
                src={topImgSrc}
                alt=""
                className="can absolute top-[-15.5%] left-[7%] w-[37vw]"
              />
            </div>
          )
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Flavours;

// bg-[#defae5]
