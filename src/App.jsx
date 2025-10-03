import BgImg from "./Components/BgImg";
import BgVid from "./Components/BgVid";
import Flavours from "./Components/Flavours";
import Hero from "./Components/Hero";
import Loader from "./Components/Loader";
import Page4 from "./Components/Page4";
import Poster from "./Components/Poster";
import TextWrapper from "./Components/TextWrapper";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="overflow-hidden">
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
      <TextWrapper />
      <Flavours />
      <Page4 />
      <Poster />
    </div>
  );
};

export default App;
