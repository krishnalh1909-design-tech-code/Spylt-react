
import BoxAnimation from "./BoxAnimation";
import TextAnimation from "./TextAnimation";

const HeroContent = () => {
  
  return (
    <>
      <div className="page1 h-screen w-full overflow-hidden relative">
        <TextAnimation text="FREAKING DELICIOUS" />
        <BoxAnimation text="PROTEIN + CAFFEINE" />
      </div>
    </>
  );
};

export default HeroContent;
