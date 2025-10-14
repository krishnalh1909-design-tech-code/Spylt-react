import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const TextAnimation = ({ text }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
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
  }, { scope: titleRef });

  return (
    <div
      ref={titleRef}
      className="title absolute top-[20%] md:top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[90px] lg:text-[110px] font-[Antonio] text-[#523122] font-extrabold flex overflow-hidden "
    >
      {text.split("").map((char, index) => (
        <span key={index} className={char === "G" ? "mr-3" : ""}>
          {char}
        </span>
      ))}
    </div>
  )
}

export default TextAnimation
