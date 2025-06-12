import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
//import Projects from '../components/sections/Projects';
//import Testimonials from '../components/sections/Testimonials';
//import Service from '../components/sections/Service';

import CallToAction from '../components/sections/CallToAction';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/*<Projects limit={4} />
      <Service />
      <Testimonials /> */} 
      <CallToAction />
    </>
  );
};

export default HomePage;