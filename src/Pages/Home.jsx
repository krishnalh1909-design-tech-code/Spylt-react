
import Loader from '../Components/Loader'
import BgVid from '../Components/BgVid'
import BgImg from '../Components/BgImg'
import Hero from '../Components/Hero'
import TextWrapper from '../Components/TextWrapper'
import Flavours from '../Components/Flavours'
// import Poster from '../Components/Poster'
// import Wrapper from '../Components/Wrapper'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Loader />
      <BgVid />
      <BgImg />
      <Hero />
      <TextWrapper />
      <Flavours />
      {/* <Poster />
      <Wrapper /> */}
    </div>
  )
}

export default Home
