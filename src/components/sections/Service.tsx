import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'AI-Based Front-End Website Creation Services(Vibe coder)',
    description: 'Build modern and interactive websites with AI technology. I offer front-end website development services using React, Tailwind, and AI integration for a smarter and more efficient user experience..'
  },
  {
    title: '3D Design for Prototyping (using inventor, Tinkercad)',
    description: 'Need detailed and accurate technical visualization or 3D prototypes? I am ready to help with 3D design services using Tinkercad and Autodesk Inventor, suitable for production purposes, product presentations, or concept development.'
  },
  {
    title: ' Chatbot & AI Automation for Customer Service',
    description: 'Automate your customer service with responsive and efficient AI-based chatbots. I provide AI chatbot and automation solutions that can be integrated directly into your website or app.'
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="relative text-white py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">our services</h2>
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <button
              onClick={() => toggleDescription(index)}
              className="w-full text-left text-xl md:text-2xl font-semibold focus:outline-none hover:text-yellow-400 transition"
            >
              {service.title}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-gray-300 mt-2"
                >
                  <p className="text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
