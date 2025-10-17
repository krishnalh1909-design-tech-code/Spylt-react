import { useLenis } from '../Components/useLenis';
import Loader from '../Components/Loader'
import BgVid from '../Sections/HomeSection/BgVid'
import BgImg from '../Sections/HomeSection/BgImg'
import Hero from '../Sections/HomeSection/Hero'
import TextWrapper from '../Sections/HomeSection/TextWrapper'
import Flavours from '../Sections/HomeSection/Flavours'
// import Poster from '../Sections/HomeSection/Poster'
import WrapperAndVid from '../Sections/HomeSection/WrapperAndVid';
import Footer from '../Components/Footer';


const Home = () => {
  useLenis();
  return (
    <div className='overflow-hidden'>
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
      <TextWrapper />
      <Flavours />
      {/* <Poster /> */}
      <WrapperAndVid />
      <Footer />
    </div>
  )
}

export default Home
