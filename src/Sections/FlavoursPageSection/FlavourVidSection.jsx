import CardData from '../../Components/CardData'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);


const FlavourVidSection = () => {
  const containerRef = useRef();
  const whatRef = useRef();
  const talkRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {

      

    }, containerRef); // Scope animations to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
     <div ref={containerRef}  className="relative w-full h-[155vh] z-[50] leading-[21vw] px-[5vw] font-[Antonio] font-bold bg-[#c42222] overflow-hidden">

        <h1 ref={whatRef}  className="heading1 text-[20vw] text-end w-full">WHAT'S</h1>
        <h1 className="heading2 text-[20vw] text-[#E3A458] text-center w-full">
          EVERYONE
        </h1>
        <h1 ref={talkRef} className="heading3 text-[20vw]">TALKING</h1>

        {CardData.map(({ rotate, video }, index) => (
          <div
            key={index}
            className={`cards overflow-hidden rounded-2xl h-[75vh] w-[70vw] lg:w-[20vw] absolute top-[37%] left-[15%] lg:left-[50%] lg:-translate-x-1/2`}
            style={{
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
  )
}

export default FlavourVidSection





