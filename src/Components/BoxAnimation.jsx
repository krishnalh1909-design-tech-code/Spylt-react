import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const BoxAnimation = ({ text }) => {
  const boxRef = useRef(null);

  useGSAP(() => {

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

  }, { scope: boxRef });

  return (
    <div
      ref={boxRef}
      className="title2 bg-[#FCE1CD] absolute top-[35%] md:top-[45%] lg:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[0deg] md:rotate-[-2deg] lg:rotate-[-2deg] z-50 overflow-hidden p-2 w-max text-[12vw] md:text-[90px] lg:text-[110px]"
    >
      <h1
        className="font-[Antonio] font-bold text-center  text-[#FCE1CD] bg-[#A26833] px-[3px]"
      >
        {text}
      </h1>
    </div>


  )
}

export default BoxAnimation
