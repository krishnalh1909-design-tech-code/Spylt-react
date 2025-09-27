import BgImg from "./Components/BgImg";
import BgVid from "./Components/BgVid";
import Loader from "./Components/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <BgVid />
      <BgImg />
    </div>
  );
};

export default App;
