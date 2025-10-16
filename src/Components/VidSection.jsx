import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BgVideo from "../assets/Videos/main-video.mp4";
import { useRef } from "react";
import CardVid1 from "../assets/Videos/CardVideos/CardVid1.mp4"
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
          end: "+=3000",
          scrub: 2,
          pin: true,
        },
      });

      tl2
        .to(videoRef.current, {
          width: "100%",
          height: "100vh",
          borderRadius: "0%",
          ease: "none",
        })
        .to(headRef.current, {
          delay: 1.5,
          duration: 2,
          top: "-50%",
        }, "a")
        .from(whatRef.current, {
          delay: 1.5,
          x: -350
        }, "a")
        .from(talkRef.current, {
          delay: 1.5,
          x: 250
        }, "a")
        .from(".cards", {
          y: 700,
          x: 500,
          duration: 3,
          ease: "power3",
          stagger: 2
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

        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[5%] bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>

        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[15%]  bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>

        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[30%]  bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>

        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[45%]  bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>

        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[60%]  bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>


        <div className="cards overflow-hidden rotate-[-3deg] lg:rotate-[-5deg] rounded-2xl h-[75vh] w-[20vw] absolute top-[37%] left-[75%]  bg-amber-300">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={CardVid1} type="video/mp4" />
          </video>
        </div>


      </div>

    </div>
  );
};

export default VidSection;




{/* <div
          class="cards rotate-[-5deg] overflow-hidden rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[37%]"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db5c1208c8a25762bb619_1_Madison_1-transcode.mp4"
          ></video>
        </div>

        <div
          class="cards rotate-[5deg] rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[39%] left-[15%] z-[10] overflow-hidden"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db740f86577023a832835_1_AlexanderM_1-transcode.mp4"
          ></video>
        </div>

        <div
          class="cards rotatr[-5deg] overflow-hidden rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[35%] left-[30%] z-[20]"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db80618ee4a59f2efb198_1_AndrewC_1-transcode.mp4"
          ></video>
        </div>

        <div
          class="overflow-hidden rotate-[5deg] cards rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[37%] left-[45%] z-[30]"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db855456668dfc4c52615_1_BryanK_1-transcode.mp4"
          ></video>
        </div>

        <div
          class="cards rotate[5deg] overflow-hidden rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[37%] left-[60%] z-[40]"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db8a83056c32978e4c03a_1_ChrisS_1-transcode.mp4"
          ></video>
        </div>

        <div
          class="cards rotate-[-5deg] overflow-hidden rounded-2xl h-[73vh] w-[20vw] border-5 border-[#FAEADE] absolute top-[39%] left-[75%] z-[50]"
        >
          <video
            autoplay
            muted
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db8e8928a767c7d03f23e_1_Devante_1-transcode.mp4"
          ></video>
        </div>

        <div class="cards rounded-2xl overflow-hidden h-[73vh] w-[20vw] border-2 border-amber-300 absolute top-[45%] left-[90%] z-[60]">
              <video autoplay muted src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F673db855456668dfc4c52615_1_BryanK_1-transcode.mp4"></video>
        </div>  */}
