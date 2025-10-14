import { useEffect, useRef } from "react";

import gsap from "gsap";

const HeroContent = () => {
  const titleRef = useRef(null);
  // const boxRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(titleRef);

    gsap.fromTo(
      q("span"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 5,
        stagger: 0.03,
        ease: "power1.out",
      }
    );

    // gsap.set(boxRef.current, {
    //   x: 300,
    //   opacity: 0,
    // });

    // gsap.to(boxRef.current, {
    //   x: 0,
    //   opacity: 1,
    //   duration: 1,
    //   ease: "power3.out",
    //   delay: 5,
    // });
  }, []);

  return (
    <>
      <div className="page1 h-[70vh] w-full overflow-hidden relative">
        <div
          ref={titleRef}
          className="title absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[90px] lg:text-[110px] font-[Antonio] text-[#523122] font-extrabold flex overflow-hidden "
        >
          {"FREAKING DELICIOUS".split("").map((char, index) => (
            <span key={index} className={char === "G" ? "mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>

        {/* <div
          ref={boxRef}
          className="title2 h-[25vh] lg:w-[50vw] flex items-center justify-center  text-[12vw] md:text-[90px] lg:text-[110px] absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] z-90 bg-[#FAEADE] overflow-hidden"
        >
          <h1 className="bg-[#A26833]  text-[10vw] md:text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold text-center border-[5px] md:border-[10px] px-[5px]">
            PROTEIN + CAFFEINE
          </h1>
        </div> */}
      </div>
    </>
  );
};

export default HeroContent;
