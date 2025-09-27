import BgImg from "./BgImg";
import BgVid from "./BgVid";

const HeroContent = () => {
  return (
    <>
      <BgVid />
      <BgImg />
      <div className="page1 w-full flex flex-col items-center justify-center">
       
        <div
          // ref={titleRef}
          className="title text-[10vw] md:text-[7.5vw] font-[Antonio] text-[#523122] font-extrabold flex w-max overflow-hidden absolute top-[12%]"
        >
          {"FREAKING DELICIOUS".split("").map((char, index) => (
            <span key={index} className={char === "G" ? "mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>

        
        <div
          // ref={subtitleRef}
          className="title2 h-max w-max md:w-[53vw] text-center absolute top-[23%] md:top-[36%] z-90 bg-[#FAEADE] rotate-[0deg62] md:rotate-[-3deg] overflow-hidden"
        >
          <h1 className="bg-[#035b25] text-[10vw] md:text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold text-center border-[5px] md:border-[10px] px-[5px]">
            PROTEIN + CAFFEINE
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
