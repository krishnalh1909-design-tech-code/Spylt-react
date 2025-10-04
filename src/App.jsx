
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


import Home from "./Pages/Home";

import FlavourDetail from "./Pages/FlavourDetail";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavours/:id" element={<FlavourDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
