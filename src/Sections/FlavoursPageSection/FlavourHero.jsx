import { useParams } from "react-router-dom";
import flavoursdata from "../../Components/FlavoursData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavourHero = () => {
  const descRef = useRef(null);
  const infoRef = useRef(null);
  const nameRef = useRef(null);

  const { id } = useParams();
  const [flavour, setFlavour] = useState(null);


  useLayoutEffect(() => {
    if (!descRef.current || !infoRef.current || !nameRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: descRef.current,
          start: "top top",
          end: "+=500",
          pin: true,
          scrub: 2,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      tl.from(nameRef.current, {
        top: "15%",
        duration: 1.5,
        ease: "none",
      }, "A")
        .from(infoRef.current, {
          top: "100%",
          duration: 1.5,
          ease: "none",
        }, "A");

    }, descRef);

    return () => {
      ctx.revert();
      // cleanupScrollTrigger();
    };
  }, [flavour]);

  // ✅ Handle route change / ID change
  useEffect(() => {
    const found = flavoursdata.find((f) => f.id.toString() === id);
    setFlavour(found);
  }, [id]);

  if (!flavour) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-[#FAEADE] text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div
      ref={descRef}
      className="h-screen md:h-[120vh] w-full overflow-hidden relative"
    >
      <video
        className="h-[120vh] w-full object-cover"
        autoPlay
        loop
        muted
        key={flavour.VidSrc}
        onLoadedData={() => {
          ScrollTrigger.refresh(true);
        }}
      >
        <source src={flavour.VidSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={nameRef}
        className="font-[Antonio] absolute top-[-35%] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 space-y-4 lg:space-y-0"
      >
        <div className="w-full lg:w-[45vw]">
          <h1 className="text-[40px] sm:text-[60px] lg:text-[95px] font-bold text-[#FAEADE]">
            {flavour.name}
          </h1>
        </div>
        <div className="w-full lg:w-[25vw] text-[#FAEADE] font-[Antonio2] text-left lg:text-right">
          <p className="font-light text-base sm:text-lg lg:text-2xl">
            {flavour.details}
          </p>
        </div>
      </div>

      <div
        ref={infoRef}
        className="font-[Antonio] absolute top-[20%] w-full flex flex-wrap items-center justify-center gap-4 px-4 py-6 max-h-[90vh] overflow-y-auto"
      >
        {[
          { value: "60mg", label: "CAFFEINE" },
          { value: "20g", label: "PROTEIN" },
          { value: "0g", label: "SUGAR" },
          { value: "90", label: "CALORIES" },
          { value: "ZERO", label: "LACTOSE" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-[35%] sm:w-[40%] md:w-[30%] lg:w-[28%] h-[20vh] sm:h-[23vh] md:h-[28vh] lg:h-[33vh] flex-shrink-0 overflow-hidden"
          >
            <div className="h-[40%] sm:h-[50%] md:h-[58%] w-full text-center bg-[#FAEADE] flex items-center justify-center">
              <h1
                style={{ color: flavour.color }}
                className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold"
              >
                {item.value}
              </h1>
            </div>
            <div className="h-[55%] sm:h-[50%] md:h-[42%] w-full border-[#FAEADE] border-[5px] sm:border-[8px] md:border-[10px] flex items-center justify-center text-center overflow-hidden">
              <h2 className="text-[25px] sm:text-[36px] md:text-[42px] lg:text-[55px] text-[#FAEADE] font-semibold">
                {item.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourHero;
