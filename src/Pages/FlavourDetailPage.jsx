
import Navbar from '../Components/Navbar';
import FlavourHero from "../Sections/FlavoursPageSection/FlavourHero";
import PosterImg from '../Sections/FlavoursPageSection/FlavourPosterImg';
import Flavours from "../Sections/HomeSection/Flavours";
import Footer from "../Components/Footer";
import { useLenis } from '../Components/useLenis';

const FlavourDetailPage = () => {
   useLenis();
  return (
   
    <div className="overflow-hidden">
      <Navbar />
      <FlavourHero />
      <PosterImg />
      <Flavours />
      <Footer />
    </div>
  );
};

export default FlavourDetailPage;
