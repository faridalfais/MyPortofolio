import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from '../com/Particles/Particles';


const AboutPage = () => {
    return (
    <motion.section
      className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
    <div className="absolute inset-0 z-[-10]">
            <Particles
              particleColors={['#c6bf0c', '#c6bf0c']}
              particleCount={200}
              particleSpread={10}
              speed={0.3}
              particleBaseSize={400}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              className="w-full h-full"
            />
          </div>
      <div className="container-custom relative z-10 space-y-28">

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-snug mb-6">
            "Design is not just about looks, and technology is not just about tools. In it I combine the two to create something that really resonates."</h1>
            <Link to= "/projects" className="inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition">
              View projects →
            </Link>
          </div>
              <div className="rounded overflow-hidden">
            <img
              src="favicon.png"
              alt="Logo"
              className="w-full md:w-1/2 lg:w-1/3 mx-auto"
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-black text-white p-8 rounded-xl shadow-md">
          <div className="flex items-center justify-center border border-gray-400 w-full aspect-video">
            😐 BOY
          </div>
          <div>
            <p className="text-sm uppercase text-gray-400 mb-2">“Knowing others is intelligence; knowing yourself is true wisdom.” -Lao Tzu</p>
            <p className="text-2xl font-semibold mb-2">
              Hi, I’m Muhamad Farid <span className="text-red-600 underline">alFais</span>.
            </p>
            <p className="text-sm text-gray-100">
              A high school graduate who grew up in the midst of a tough life and rapid technological developments.
              My journey in the world of coding began about a year ago—exactly 6 months full of exploration and trial and error.
            </p>
            <p className="text-sm text-gray-100">
            Previously, I had attended a mechanical engineering design training from a government program. 
            That's where I got to know and fell in love with AutoCAD and Autodesk Inventor. 
            From engineering design, I jumped into the world of AI and coding, and it turned out to be a very fun combination.
            </p>
            <p className="text-sm text-yellow-300">
            I believe that technology, especially AI, can be the most powerful tool if used correctly. 
            I not only code, but I experience firsthand how AI helps me be more productive and creative.
            </p>
          </div>
        </div>
        {/* Founder Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8 py-10">
  {/* Kiri: Education */}
  <div className="bg-black text-white p-6 md:p-10 rounded-2xl shadow-xl">
    <h3 className="text-2xl font-semibold mb-4">Education</h3>
    <h2 className="text-lg uppercase text-yellow-500 mb-2">SMAN 14 TANGERANG CITY</h2>
    <p className="text-gray-300 mb-3">
      I am a high school graduate, but my learning journey did not stop there. After graduating, I attended a government-sponsored mechanical engineering design training, 
      where I learned how to use AutoCAD and Autodesk Inventor. Since then, I have continued my self-learning process, especially in the following areas:
    </p>
    <ul className="text-yellow-200 list-disc list-inside space-y-1 mb-3">
      <li>Front-End Development</li>
      <li>AI Automation & Chatbot</li>
      <li>AI Content (images, videos, music)</li>
      <li>Desain 3D prototype</li>
    </ul>
    <p className="text-gray-300">
      For me, education is not about the degree—it is about the desire to continue to grow.
    </p>
  </div>

  {/* Kanan: Foto / Sertifikat */}
  <div className="bg-black rounded-2xl shadow-xl p-6 md:p-10">
    <p className="text-sm text-gray-300 mb-4">Certificate Desain Mehcanical</p>
    <div className="w-full overflow-hidden rounded-xl">
      <img
        src="./Images/certificate.jpeg"
        alt="Deskripsi gambar"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;