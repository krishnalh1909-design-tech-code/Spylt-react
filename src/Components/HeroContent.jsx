import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroContent = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleChars = titleRef.current?.querySelectorAll("span") || [];

    gsap.from(titleChars, {
      y: 500,
      duration: 0.5,
      stagger: 0.02,
      delay: 0.5, // reduced delay for testing
      ease: "power4.out",
    });

    gsap.from(subtitleRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="page1 h-[100vh] w-full flex flex-col items-center justify-center absolute">
      {/* Main Title */}
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

      {/* Subtitle */}
      <div
        ref={subtitleRef}
        className="title2 w-max md:w-[53vw] text-center absolute top-[23%] md:top-[36%] z-90 bg-[#FAEADE] rotate-[0deg62] md:rotate-[-3deg] overflow-hidden"
      >
        <h1 className="bg-[#A26833] text-[10vw] md:text-[7vw] font-[Antonio] text-[#FCE1CD] font-bold text-center border-[5px] md:border-[10px] px-[5px]">
          PROTEIN + CAFFEINE
        </h1>
      </div>
    </div>
  );
};

export default HeroContent;
