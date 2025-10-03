import { useEffect, useRef } from "react";
import flavoursdata from "./FlavoursData.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const letters = ["W", "E", "H", "A", "V", "E", "6"];
  const containerRef = useRef(null);
  const letterRef = useRef(null);
  const flavourRef = useRef(null);

  const isMediumScreen = window.innerWidth <= 768;





  useGSAP(() => {

    const letterElements = letterRef.current.querySelectorAll("h1");

    gsap.fromTo(
      letterElements,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: letterRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );





    if (isMediumScreen) {
      // Don't initialize animation
      return;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // better than using viewport % for long scroll
          pin: true,
          scrub: 2,
          // markers: true,
        },
      })
      .to(containerRef.current, {
        x: "-305vw",
        ease: "power2.inOut",
      });
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-[100vw] md:w-[410vw] relative bg-[#FAEADE] flex flex-col md:flex-row"
    >
      {/* Left panel with text */}
      <div
        ref={letterRef}
        className="we-have w-full md:w-[48vw]  flex flex-col items-center justify-center font-[Antonio] text-[#523122] text-[10vw] md:text-[7vw] py-10 md:py-0 leading-[100px]"
      >


        <div className="flex flex-wrap justify-center  font-extrabold">
          {letters.map((char, index) => (
            <h1
              key={index}
              className={`inline-block ${index === 2 || index === 6 ? "ml-3 md:ml-5" : ""
                }`}
            >
              {char}
            </h1>
          ))}
        </div>

        <div className="freaking h-[125px] font-extrabold flex flex-wrap justify-center text-[10vw] md:text-[7vw] bg-red-200 rotate-[-3deg]">
          {"FREAKING".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className="freaking font-extrabold flex flex-wrap justify-center text-[10vw] md:text-[6.5vw]">
          {"DELICIOUS FLAVOUR".split("").map((char, index) => (
            <span key={index} ref={flavourRef} className={char === "S" ? "mr-2 md:mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>

      </div>

      {/* Right panel with flavours */}
      <div className="flavours w-full h-full md:w-[340vw] flex flex-col md:flex-row items-center justify-between overflow-x-auto md:overflow-hidden">
        {flavoursdata.map(
          ({ id, containerClasses, bgSrc, bottomImgSrc, topImgSrc }) => (
            <div
              key={id}
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Flavours;
