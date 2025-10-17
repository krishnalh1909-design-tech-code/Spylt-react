import { useRef } from "react";
import { Link } from "react-router-dom";
import flavoursdata from "../../Components/FlavoursData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const containerRef = useRef(null);




   const handleMouseMove = (e, cardRef, topImgRef, bottomImgRef, bgImgRef) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Get offset from center
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Clamp & dampen
    const moveX = Math.max(-40, Math.min(offsetX * 0.25, 40));
    const moveY = Math.max(-40, Math.min(offsetY * 0.25, 40));

    // 🔁 3D rotation angles
    const rotateY = Math.max(-10, Math.min(offsetX / (rect.width / 2) * 10, 10)); // Y-axis (left/right)
    const rotateX = Math.max(-10, Math.min(-offsetY / (rect.height / 2) * 10, 10)); // X-axis (up/down) - negative to flip direction

    // Animate topImg (XY)
    if (topImgRef.current) {
      gsap.to(topImgRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    // Animate bottomImg (X only)
    if (bottomImgRef.current) {
      gsap.to(bottomImgRef.current, {
        x: moveX * 0.6,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    // Animate bg with 3D tilt
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY,
        rotateX,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };



    const handleMouseLeave = (topImgRef, bottomImgRef, cardRef) => {
    if (topImgRef.current) {
      gsap.to(topImgRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (bottomImgRef.current) {
      gsap.to(bottomImgRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };



  return (
    <div
      ref={containerRef}
      className="flavours min-h-screen w-full md:flex-col relative flex flex-col bg-[#FAEADE]"
    >
      <div className="flavours w-full h-full md:w-[100vw] flex flex-col items-center justify-between overflow-x-auto md:overflow-hidden">
        {flavoursdata.map(({ id, containerClasses, bgSrc, bottomImgSrc, topImgSrc }) => {
          const cardRef = useRef(null);
          const topImgRef = useRef(null);
          const bottomImgRef = useRef(null);
          const bgImgRef = useRef(null); 

          return (
            <Link
              key={id}
              ref={cardRef}
              to={`/flavours/${id}`}
              onMouseMove={(e) => handleMouseMove(e, cardRef, topImgRef, bottomImgRef,bgImgRef)}
              onMouseLeave={() => handleMouseLeave(topImgRef, bottomImgRef)}
              onClick={() => {
                if (lenis) {
                  lenis.scrollTo(0);
                } else {
                  window.scrollTo(0, 0);
                }
              }}
              className={`flavour1 ${containerClasses} bg-green-400 card-bg w-[80%] h-[45vw] lg:w-[50%] lg:h-[55vh] rounded-3xl relative mx-auto mt-14 mb-3 lg:mt-56 lg:mx-10 lg:shrink-0`}
            >
              <img
                ref={bgImgRef}
                src={bgSrc}
                alt=""
                className="w-full h-full object-cover rounded-3xl pointer-events-none"
              />
              <img
                ref={bottomImgRef}
                src={bottomImgSrc}
                alt=""
                className="bottomSrc absolute bottom-[0%] left-[25.5%] w-[35vw] lg:w-[25vw] lg:h-[35vw] pointer-events-none"
              />
              <img
                ref={topImgRef}
                src={topImgSrc}
                alt=""
                className="can snacks absolute top-[-15.5%] left-[7%] w-[60vw] lg:w-[40vw] pointer-events-none"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Flavours;
