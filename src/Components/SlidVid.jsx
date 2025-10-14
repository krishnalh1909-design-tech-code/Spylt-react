import MeltingBg from "../assets/melting-bg.svg";
import { useParams } from "react-router-dom";
import flavours from "../Components/FlavoursData";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SlidVid = () => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const circleRef = useRef();

  const { id } = useParams();
  const flavour = flavours.find((item) => item.id === Number(id));

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Slider scroll animation
      gsap.to(sliderRef.current, {
        x: "-151.5vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });

      // Circle growth animation (separate scroll section)
      // gsap.to(circleRef.current, {
      //   height: "100vh",
      //   width: "100vw",
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: circleRef.current,
      //     start: "top bottom", // when the circle comes into view after the slider
      //     end: "top top",      // until it's at the top
      //     scrub: 1,
      //     pin: false,
      //     anticipatePin: 1,
      //   },
      // });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  if (!flavour) {
    return <div>Flavour not found</div>;
  }

  return (
    <div style={{ background: flavour.bg }} className="w-full overflow-hidden">

      <div className="h-[35vh] w-full">
        <img className="h-full w-full object-cover" src={MeltingBg} alt="" />
      </div>

      {/* Outer wrapper that gets pinned */}
      <div ref={containerRef} className="h-screen w-[285vw]  relative overflow-hidden flex">
        {/* Inner slider that moves */}
        <div
          ref={sliderRef}
          className="w-[285vw]  h-full overflow-hidden  flex items-center gap-[25px] font-extrabold font-[Antonio] text-[15vw] px-[15vw]"
        >
          <h1 style={{ color: flavour.text }}>CHUG</h1>
          <h1 className="text-[#FAEADE]">SPYLT</h1>
          <h1 className="text-[#FAEADE]">WITH</h1>
          <h1 style={{ color: flavour.text }}>DELIGHT</h1>


        </div>



      </div>




    </div>
  );
};

export default SlidVid;
