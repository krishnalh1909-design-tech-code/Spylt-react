import BgImg from "./Components/BgImg";
import BgVid from "./Components/BgVid";
import Hero from "./Components/Hero";
import Loader from "./Components/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
    </div>
  );
};

export default App;
