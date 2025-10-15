import { useLenis } from '../Components/useLenis';
import Loader from '../Components/Loader'
import BgVid from '../Components/BgVid'
import BgImg from '../Components/BgImg'
import Hero from '../Sections/Hero'
import TextWrapper from '../Sections/TextWrapper'
import Flavours from '../Sections/Flavours'
import Poster from '../Sections/Poster'
import WrapperAndVid from '../Sections/WrapperAndVid';


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
      <Poster />
      <WrapperAndVid />
    </div>
  )
}

export default Home
