import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'N8N', 'Python', 'React', 'Vite',
  'Arduino IDE', 'ESP32', 'Flowise', 'Gemini',
  'GitHub', 'Vercel', 'AutoCAD', 'Inventor',
  'Canva', 'Google Sheet',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500 p-[2px] rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div
              className="bg-black w-full h-full rounded-xl py-6 px-4 text-center font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Tambahkan di tailwind.config.js
// theme: {
//   extend: {
//     colors: {
//       neon: '#39ff14'
//     }
//   }
// }
