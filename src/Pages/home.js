import '../App.css';
import Hero from '../Components/hero';
import Specials from '../Components/specials';
import AboutUs from '../Components/aboutus';
import Testimonials from '../Components/testimonials';

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials/>
      <AboutUs />
    </>
  );
}

export default Home;