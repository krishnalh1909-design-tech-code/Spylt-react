import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import flavoursdata from "../Components/FlavoursData";
import Flavours from "../Components/Flavours";
import Navbar from '../Components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// import PosterImg from "../Components/PosterImg";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(useGSAP);


const FlavourDetail = () => {
  const descRef = useRef();
  const { id } = useParams();
  const [flavour, setFlavour] = useState(null);

  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(descRef.current, {
  //       y: -350,
  //       scrollTrigger: {
  //         trigger: descRef.current,
  //         start: "-60%",
  //         end: "+=500",
  //         pin: true,
  //         scrub: true,
  //         markers: true,
  //         pinSpacing: true,
  //       },
  //     });
  //   }, descRef); // Scope to this ref

  //   return () => ctx.revert(); // Cleanup
  // }, [flavour]);



  useEffect(() => {
    const found = flavoursdata.find((f) => f.id.toString() === id);
    setFlavour(found);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, [id]);



  if (!flavour) {
    return (
      <></>
    );
  }

  return (
    <>
      {/* Force remount video with key */}
      <div className="overflow-hidden" key={id}>

        <Navbar />

        <div className="h-screen w-full overflow-hidden absolute top-0">
          <video
            className="h-screen w-full object-cover"
            autoPlay
            loop
            muted
            key={flavour.VidSrc} // ensures re-render
          >
            <source src={flavour.VidSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


        <div className="font-[Antonio] h-[100vh] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between relative overflow-hidden">

          <div ref={descRef} className="h-auto lg:h-[30vh] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between absolute top-[15%] px-6 space-y-4 lg:space-y-0">

            {/* Title */}
            <div className="w-full lg:w-[35vw]">
              <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold text-[#FAEADE]">
                {flavour.name}
              </h1>
            </div>

            {/* Details */}
            <div className="w-full lg:w-[25vw] text-[#FAEADE] font-[Antonio2] text-left lg:text-right">
              <p className="font-light text-base sm:text-lg lg:text-2xl">
                {flavour.details}
              </p>
            </div>

          </div>

          <div className="w-full absolute top-[100%] flex flex-wrap items-center justify-center gap-4 px-4 py-6 max-h-[90vh] overflow-y-auto">

            {[
              { value: '60mg', label: 'CAFFEINE' },
              { value: '20g', label: 'PROTEIN' },
              { value: '0g', label: 'SUGAR' },
              { value: '90', label: 'CALORIES' },
              { value: 'ZERO', label: 'LACTOSE' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[45%] sm:w-[40%] md:w-[30%] lg:w-[250px] h-[22vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] flex-shrink-0"
              >
                {/* Top section */}
                <div className="h-[45%] sm:h-[50%] md:h-[58%] w-full text-center bg-[#FAEADE] flex items-center justify-center">
                  <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-[#865A4D] font-bold">
                    {item.value}
                  </h1>
                </div>

                {/* Bottom section */}
                <div className="h-[55%] sm:h-[50%] md:h-[42%] w-full border-[#FAEADE] border-[6px] sm:border-[8px] md:border-[10px] flex items-center justify-center text-center">
                  <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[55px] text-[#FAEADE] font-semibold">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}

          </div>

        </div>

        <div className='h-screen w-full flex overflow-hidden justify-between'>
          <div className='h-full w-[50%]'>

          </div>

          <div className='h-full w-[50%] p-7'>
            <img className='h-full w-full object-contain' src={flavour.posterImg} alt="" />
          </div>
        </div>

        <div className="overflow-hidden">
          <Flavours />
        </div>

      </div>






    </>
  );
};

export default FlavourDetail;
