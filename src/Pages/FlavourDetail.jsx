import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flavoursdata from "../Components/FlavoursData";
import Flavours from "../Components/Flavours";

import Navbar from '../Components/Navbar'

const FlavourDetail = () => {
  const { id } = useParams();
  const [flavour, setFlavour] = useState(null);


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

        <div className="h-screen w-full overflow-hidden relative">
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


        <div className="font-[Antonio] absolute top-[15%] h-max w-full flex items-center justify-between px-10">
          <h1 className="text-[80px] font-bold text-[#FAEADE] w-[30vw]">{flavour.name}</h1>

          <div className="h-full w-[25vw] text-[#FAEADE] font-[Antonio2] flex items-center text-right">
            <p>{flavour.details}</p>
          </div>
        </div>

        <div className="overflow-hidden">
          <Flavours />
        </div>

      </div>



      {/* Always show all cards */}
      {/* <div className="h-screen w-full overflow-hidden">
        <FlavourCards />
      </div> */}
    </>
  );
};

export default FlavourDetail;
