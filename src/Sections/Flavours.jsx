import { useRef, useEffect } from "react";
// import flavoursdata from "../Components/FlavoursData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FlavourCards from "../Components/FlavourCards";
import TextAnimation from "../Components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const letters = ["W", "E", "H", "A", "V", "E", "6"];
  const containerRef = useRef(null);
  const letterRef = useRef(null);
  const flavourRef = useRef(null);

  const isMediumScreen = window.innerWidth <= 1024;

  useEffect(() => {
    let prevWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      const wasMedium = prevWidth <= 1024;
      const isMedium = currentWidth <= 1024;

      // If we crossed the medium breakpoint (in either direction)
      if (wasMedium !== isMedium) {
        window.location.reload();
      }

      prevWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useGSAP(() => {
    const ctx = gsap.context(() => {
      const letterElements = letterRef.current?.querySelectorAll("h1");

      if (letterElements) {
        gsap.fromTo(
          letterElements,
          { y: 50, opacity: 0 },
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
      }

      if (!isMediumScreen && containerRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: true,
          },
        }).to(containerRef.current, {
          x: "-300vw",
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isMediumScreen]);

  return (
    <div
      ref={containerRef}
      className="flavours min-h-screen w-[100vw] md:w-[100vw] md:flex-col lg:w-[410vw] relative bg-[#FAEADE] flex flex-col lg:flex-row"
    >

      {/* <div
        ref={letterRef}
        className="we-have w-full md:w-[48vw] flex flex-col items-center justify-center font-[Antonio] text-[#523122] text-[10vw] md:text-[7vw] py-10 md:py-0 leading-[100px] bg-amber-300"
      >
        <div className="flex flex-wrap justify-center font-extrabold">
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
            <span key={index} className={char === "S" ? "mr-2 md:mr-3" : ""}>
              {char}
            </span>
          ))}
        </div>
      </div> */}

      <FlavourCards />
    </div>
  );
};

export default Flavours;
