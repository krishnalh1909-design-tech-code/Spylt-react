import { useEffect, useRef } from "react";
import flavoursdata from "./FlavoursData.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const letters = ["W", "E", "H", "A", "V", "E", "6"];
  const containerRef = useRef(null);
  const letterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letterElements = letterRef.current.querySelectorAll("h1");

      // Animate letters on scroll
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
            // markers: true,
          },
        }
      );

      // Horizontal scroll pin and animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000", // better than using viewport % for long scroll
            pin: true,
            scrub: 2,
            markers: true,
          },
        })
        .to(containerRef.current, {
          x: "-305vw",
          ease: "power2.inOut",
        });
    }, containerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-[100vw] md:w-[410vw] relative bg-[#FAEADE] flex flex-col md:flex-row"
    >
      {/* Left panel with text */}
      <div
        ref={letterRef}
        className="we-have w-full md:w-[60vw] flex flex-col items-center justify-center font-[Antonio] text-[#523122] text-[10vw] md:text-[7vw] py-10 md:py-0"
      >
        <div className="flex flex-wrap justify-center">
          {letters.map((char, index) => (
            <h1
              key={index}
              className={`inline-block ${
                index === 2 || index === 6 ? "ml-3 md:ml-5" : ""
              }`}
            >
              {char}
            </h1>
          ))}
        </div>

        <div className="freaking font-extrabold flex flex-wrap justify-center text-[6vw] md:text-[4vw] mt-4">
          {"FREAKING".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className="freaking font-extrabold flex flex-wrap justify-center text-[6vw] md:text-[4vw] mt-2">
          {"DELICIOUS FLAVOUR".split("").map((char, index) => (
            <span key={index} className={char === "S" ? "mr-2 md:mr-3" : ""}>
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
              className={`flavour1 ${containerClasses} w-[80%] md:w-[14%] h-[50vh] md:h-[60vh] rounded-3xl relative mx-auto md:mx-5`}
            >
              <img
                src={bgSrc}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
              <img
                src={bottomImgSrc}
                alt=""
                className="absolute bottom-[0%] left-[20.5%] w-[40vw] md:w-[25vw] h-auto"
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
