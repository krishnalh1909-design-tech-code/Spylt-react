import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BgVideo from "../assets/Videos/main-video.mp4";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const VidSection = () => {
  const containerRef = useRef(); // The scroll section
  const videoRef = useRef();     // The animated video div

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // Timeline 1 — entrance animation (move in from top, rounded)
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-30% top",
          end: "30% top",
          scrub: true,
        },
      });

      tl1.from(videoRef.current, {
       top:"-15%"
      });

      // Timeline 2 — expand + pin
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
          pin: true,
        },
      });

      tl2.to(videoRef.current, {
        width: "100%",
        height: "100vh",
        borderRadius: "0%",
        ease: "none",
      });
    }, containerRef); // Scope animations to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="page5 w-full h-[100vh] flex flex-col items-center justify-center bg-[#222123] font-bold relative overflow-hidden"
    >
      <div
        ref={videoRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden w-[10vw] h-[10vw] "
      >
        <video
          className="object-cover h-full w-full"
          autoPlay
          loop
          muted
          src={BgVideo}
        />
      </div>
    </div>
  );
};

export default VidSection;
