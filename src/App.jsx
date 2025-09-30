
import BgImg from "./Components/BgImg";
import BgVid from "./Components/BgVid";
import Flavours from "./Components/Flavours";
import Hero from "./Components/Hero";
import Loader from "./Components/Loader";
import TextWrapper from "./Components/TextWrapper";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
      <TextWrapper />
      <Flavours />
    </div>
  );
};

export default App;
