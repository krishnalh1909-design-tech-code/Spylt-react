import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BgVideo from "../assets/Videos/main-video.mp4";
import { useRef } from "react";
// import CardVid1 from "../assets/Videos/CardVideos/CardVid1.mp4"
import CardData from "../Components/CardData";
// import BgVideo from "../assets/Videos/main-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const VidSection = () => {
  const containerRef = useRef();
  const videoRef = useRef();
  const headRef = useRef();
  const whatRef = useRef();
  const talkRef = useRef();

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
        top: "-15%"
      });

      // Timeline 2 — expand + pin
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 2,
          pin: true,
        },
      });

      tl2
        .to(videoRef.current, {
          delay: 1,
          duration: 4,
          width: "100%",
          height: "100vh",
          borderRadius: "0%",
          ease: "linear",
        })
        .to(headRef.current, {
          delay: 1,
          duration: 4,
          top: "-50%",
          ease: "linear"
        }, "a")
        .from(whatRef.current, {
          delay: 1,
          duration: 4,
          x: -350,
          ease: "power1.inOut"
        }, "a")
        .from(talkRef.current, {
          delay: 1,
          duration: 4,
          x: 250,
          ease: "power1.inOut"
        }, "a")
        .from(".cards", {
          top: "110%",
          left: "50%",
          duration: 3,
          ease: "power3",
          stagger: 2,
          ease: "power1.inOut"
        });

    }, containerRef); // Scope animations to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="page5 w-full h-[100vh] flex flex-col items-center justify-center bg-[#222123] font-bold overflow-hidden relative">

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


      <div ref={headRef} className="absolute top-[105%] page6 w-full h-[155vh] z-[50] leading-[21vw] px-[5vw] font-[Antonio] font-bold bg-[#c42222] overflow-hidden">

        <h1 ref={whatRef} className="heading1 text-[20vw] text-end w-full">WHAT'S</h1>
        <h1 className="heading2 text-[20vw] text-[#E3A458] text-center w-full">
          EVERYONE
        </h1>
        <h1 ref={talkRef} className="heading3 text-[20vw]">TALKING</h1>

        {CardData.map(({ rotate, left, video }, index) => (
          <div
            key={index}
            className={`cards overflow-hidden rounded-2xl h-[75vh] w-[70vw] lg:w-[20vw] absolute top-[37%] left-[15%] lg:left-[${left}]`}
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

    </div>
  );
};

export default VidSection;





