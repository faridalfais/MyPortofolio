import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollVelocity from '../ScrollVelocity/ScrollVelocity';
import Silk from '../Silk/Silk';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
  <div className="absolute inset-0 z-[-10]">
  <Silk
  speed={8}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>
  </div>
  <div className="relative z-10 w-full max-w-6xl mx-auto">
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.span
        className="inline-block text-accent mb-3 text-xs sm:text-sm md:text-base uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Vibe coder
      </motion.span>

      <motion.h1
        className="font-serif mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        What future do we <br /> want to design?
      </motion.h1>

      <motion.p
        className="text-light-dimmed text-base sm:text-lg md:text-xl mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        I see the world a little differently, which sometimes helps me identify gaps and turn them into opportunities.
        Combining the power of vibe coding, engineering design, and artificial intelligence to deliver precise and aesthetic digital solutions.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <Link to="/projects" className="btn-primary flex items-center gap-2 justify-center sm:justify-start">
          View projects <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn-outline text-center">
          Contact me
        </Link>
      </motion.div>
      <ScrollVelocity
  texts={[' Front-End Vibe Coder .', 'Desain mechanical.']}
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-4 whitespace-normal break-words max-w-full overflow-hidden"
/>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;