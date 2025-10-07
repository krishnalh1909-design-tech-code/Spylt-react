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

  const { id } = useParams();
  const flavour = flavours.find((item) => item.id === Number(id));

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        x: "-100vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000", // Adjust this based on scroll length needed
          scrub: 1,
          pin: true,
        },
      });
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
      <div ref={containerRef} className="h-screen relative overflow-hidden">
        {/* Inner slider that moves */}
        <div
          ref={sliderRef}
          className="w-[200vw] h-full flex items-center gap-[15px] font-extrabold font-[Antonio] text-[15vw] px-[5vw]"
        >
          <h1  style={{ color: flavour.text}}>CHUG</h1>
          <h1 className="text-[#FAEADE]">SPYLT</h1>
          <h1 className="text-[#FAEADE]">WITH</h1>
          <h1 style={{ color: flavour.text}}>DELIGHT</h1>
        </div>
      </div>
    </div>
  );
};

export default SlidVid;
