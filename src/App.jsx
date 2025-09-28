
import BgImg from "./Components/BgImg";
import BgVid from "./Components/BgVid";
import Hero from "./Components/Hero";
import Loader from "./Components/Loader";
import TextWrapper from "./Components/TextWrapper";

const App = () => {
  return (
    <div className="">
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
      <TextWrapper />
    </div>
  );
};

export default App;
