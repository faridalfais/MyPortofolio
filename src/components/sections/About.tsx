import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrambledText from '../ScrambledText/ScrambledText';

const About = () => {
  return (
    <section className="relative bg-black flex items-center pt-20">
      <div className="absolute inset-0 z-[-10]">
        {/* Tambahkan background opsional di sini kalau ada */}
      </div>

      <div className="container-custom">
        <SectionTitle title="About me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar Profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="/Images/About.jpeg"
              alt="Portrait" 
              className="rounded-lg shadow w-64 h-auto object-cover grayscale hover:grayscale-0 transition-all duration-400 ease-in-out"
            />
            <div>
            <Link to="/About" className="btn-outline inline-flex items-center gap-2 mt-2">
              More here <ArrowRight size={16} />
            </Link>
            </div>
          </motion.div>

          {/* Teks Profil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 max-w-2xl"
          >
            <p className="!text-base leading-relaxed text-sm uppercase text-gray-300">I M, FARID ALFAIS</p>
            <p className="!text-base leading-relaxed text-sm uppercase text-gray-400">Don't worry, you can call me Farid</p>
            <ScrambledText className="!text-base leading-relaxed text-white max-w-x2 font-semibold">
              Let's build tomorrow's wonders <span className="text-red-600 underline">-today</span>.
            </ScrambledText>

            <ScrambledText
              className="!text-base leading-relaxed text-white max-w-xl"
            >
              My approach to development combines technical expertise with an eye for detail and a commitment to excellence. I believe that great design is about solving problems and creating intuitive, enjoyable experiences for users.
            </ScrambledText>
            <ScrambledText
              className="!text-base leading-relaxed text-white max-w-xl"
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in art, nature, and everyday life.
            </ScrambledText>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;