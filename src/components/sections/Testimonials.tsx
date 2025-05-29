import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  imageUrl: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Working with this developer was a game-changer for our project. The attention to detail and technical expertise brought our vision to life in ways we couldn't have imagined.",
      author: "Sarah Johnson",
      position: "HR, TechStart",
      imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "The portfolio redesign exceeded all our expectations. Not only is the site beautiful, but it's also incredibly fast and user-friendly. I couldn't be happier with the results.",
      author: "Ainsley carter",
      position: "Creative Director, DesignLab",
      imageUrl: "./Images/Cewek.png",
    },
    {
      text: "I've worked with many developers, but few have the combination of technical skill and design sensibility. The process was smooth from start to finish, and the results speak for themselves.",
      author: "Eliza Hernandez",
      position: "Product Manager, InovateCo",
      imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section bg-dark">
      <div className="container-custom">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What clients have to say about working with me."
          centered
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="overflow-hidden relative rounded-lg bg-dark-lightest p-8 md:p-12"
          >
            <div className="absolute top-8 left-8 text-accent opacity-30">
              <Quote size={48} />
            </div>
            
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-lg md:text-xl italic mb-8 relative z-10">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].imageUrl}
                  alt={testimonials[activeIndex].author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-light-dimmed text-sm">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-light/20 hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-light/20 hover:border-accent hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;