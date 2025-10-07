import React from 'react';
import { useParams } from 'react-router-dom';
import flavours from '../Components/FlavoursData';


const PosterImg = () => {
  const { id } = useParams();
  const flavour = flavours.find(item => item.id === Number(id));

  if (!flavour) {
    return <div>Flavour not found</div>;
  }

  return (
    <div className='poster-div h-[200vh] md:h-[220vh] lg:h-[120vh] w-full overflow-hidden flex flex-col lg:flex-row bg-[#FAEADE]'>

      <div className='poster-det h-[100vh] lg:h-[120vh] md:h-full w-full md:w-[100vw] lg:w-[40vw] overflow-hidden'>

        {/* <div className='h-[60vh] w-full bg-green-400'>

        </div>

        <div className='h-[60vh] w-full bg-red-500 flex justify-center'>

        </div> */}

      </div>



      <div className="poster my-1 h-[120vh] md:h-full w-full lg:w-[60vw] flex items-center justify-center relative overflow-hidden">

        {/* Main Poster Image (always visible) */}
        <div className="absolute rounded-[10px] top-1/2 left-1/2 lg:left-[35%] h-[100%] md:h-[90%] lg:h-[100%] w-[100%] lg:w-[35vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <img
            src={flavour.posterImg}
            alt={flavour.name}
            className="w-full h-full object-contain md:object-contain lg:object-contain"
          />
        </div>

        {/* Secondary/Decorative Image (hidden on small screens) */}
        <div className="absolute top-1/2 left-1/2 lg:left-[75%] hidden lg:block h-[85%] lg:h-[50vw] w-[90%] md:w-[40vw] -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-full h-full object-contain"
            src={flavour.productImgSrc}
            alt=""
          />
        </div>

      </div>

    </div>
  );
};

export default PosterImg;
