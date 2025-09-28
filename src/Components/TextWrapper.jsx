import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextWrapper = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-50%",
        end: "50%",
        scrub: true,
      },
    });

    tl.to(containerRef.current.querySelectorAll("span"), {
      color: "#FAEADE",
      stagger: 1,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="page2 w-full h-[120vh] flex flex-wrap flex-col items-center justify-center relative overflow-x-hidden bg-[#7F3B2D] font-bold"
    >
      <h1 className="font-[Antonio2] text-[11vw] md:text-[8vw] tracking-tighter text-[#8C4F42] leading-[9vh]">
        <span>STIR</span> <span>UP</span> <span>YOUR</span>
      </h1>
      <h1 className="font-[Antonio2] text-[11vw] md:text-[8vw] mb-[3vh] md:mb-[7vh] text-[#8C4F42] tracking-tighter">
        <span>FEARLESS</span> <span>PAST</span> <span>AND</span>
      </h1>
      <h1 className="font-[Antonio2] text-[11vw] md:text-[8vw] mt-[3vh] md:mt-[5vh] text-[#8C4F42] leading-[9vh] tracking-tighter">
        <span>YOUR</span> <span>FUTURE</span> <span>WITH</span>{" "}
        <span>EVERY</span>
      </h1>
      <h1 className="font-[Antonio2] text-[11vw] md:text-[8vw] text-[#8C4F42] tracking-tighter">
        <span>GULF</span> <span>OF</span> <span>PERFECT</span>{" "}
        <span>JOURNEY</span>
      </h1>
    </div>
  );
};

export default TextWrapper;
