import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flavoursdata from "../Components/FlavoursData";
import FlavourCards from "../Components/FlavourCards";

const FlavourDetail = () => {
  const { id } = useParams();
  const [flavour, setFlavour] = useState(null);


  useEffect(() => {
    const found = flavoursdata.find((f) => f.id.toString() === id);
    setFlavour(found);

    // Optional: scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!flavour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
        Flavour not found
      </div>
    );
  }

  return (
    <>
      {/* Force remount video with key */}
      <div className="h-screen w-full relative" key={id}>

        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          key={flavour.VidSrc} // ensures re-render
        >
          <source src={flavour.VidSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="font-[Antonio] absolute top-[15%] h-[30vh] w-full flex items-center justify-around">
          <h1 className="text-[80px] font-bold text-[#FAEADE]">{flavour.name}</h1>

          {/* <div>

          </div> */}
        </div>




      </div>



      {/* Always show all cards */}
      <div className="h-screen w-full overflow-hidden">
        <FlavourCards />
      </div>
    </>
  );
};

export default FlavourDetail;
