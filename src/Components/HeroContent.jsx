import { useEffect, useRef } from "react";

import gsap from "gsap";

const HeroContent = () => {
  const titleRef = useRef(null);
  const boxRef = useRef(null);

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
        // duration: 0.5,
        delay: 5,
        stagger: 0.03,
        ease: "power1.out",
      }
    );

    gsap.set(boxRef.current, {
      x: 300,
      opacity: 0,
    });

    gsap.to(boxRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 5,
    });
  }, []);

  return (
    <>
      <div className="page1 w-full flex flex-col items-center justify-center">
        <div
          ref={titleRef}
          className="title text-[10vw] md:text-[7.5vw] font-[Antonio] text-[#523122] font-extrabold flex w-max overflow-hidden absolute top-[12%]"
        >
          {"FREAKING DELICIOUS".split("").map((char, index) => (
            <span key={index} className={char === "G" ? "mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>

        <div
          ref={boxRef}
          className="title2 h-max w-max md:w-[53vw] text-center absolute top-[23%] md:top-[33%] z-90 bg-[#FAEADE] md:rotate-[-2deg] overflow-hidden"
        >
          <h1 className="bg-[#A26833]  text-[10vw] md:text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold text-center border-[5px] md:border-[10px] px-[5px]">
            PROTEIN + CAFFEINE
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
