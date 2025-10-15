
import BoxAnimation from "./BoxAnimation";
import TextAnimation from "./TextAnimation";

const HeroContent = () => {

  return (
    <>
      <div className="page1 h-screen w-full overflow-hidden relative"> 
        <TextAnimation text="FREAKING DELICIOUS" />
        <BoxAnimation text="PROTEIN + CAFFEINE" />
        <div className="hero-desc w-[65vw] md:w-[35vw] lg:w-[30vw] text-[#A26833] overflow-hidden text-center absolute top-[50%] md:top-[70%] lg:top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <p> Live life to the fullest with SPYLT: Shatter boredom and embrace your
            inner kid with every deliciously smooth chug.</p>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
