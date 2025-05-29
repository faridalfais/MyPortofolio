import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      title:'Frontend Vibe Coding Website',
      description: 'I am currently developing several React + Vite based landing pages, with AI Agent integration in it for automated interactions. This project is designed with vibe coding approach to make it aesthetic, lightweight, and engaging.',
      imageUrl: '/Images/Front end 2.jpg',
      tags: ['React', 'Vite', 'Tallwind', 'CSS'],
      link:'/front',
    },
    {
      title: 'AI Automation & Chatbot',
      description: 'I am developing an AI chatbot for my personal website and also trying integration via Flowise and Google Sheet as its data source. This chatbot is designed to answer visitor questions automatically and efficiently.',
      imageUrl: '/Images/Chatbot.jpg',
      tags: ['Python', 'Flowise', 'OpenAI', 'N8N'],
      link: '/ai',
    },
    {
      title: 'Mechanical Design',
      description: 'Some early designs still need refinement in terms of size accuracy and form efficiency. I am also learning more complex designs in Inventor for advanced prototyping purposes.',
      imageUrl: '/Images/Mechanical 1.jpg',
      tags: ['Autocad', 'Autodesk Inventor', 'Trinkerd', 'Canva'],
      link: '/desain',
    },
    {
      title: 'Robotic / IOT',
      description: 'I am building an ESP32 based robotic with WiFi and Bluetooth control, and sensor based automatic movement features. This project is my first step in combining AI, servo control, and this project is a work in progress.',
      imageUrl: '/Images/Robotic1.jpg',
      tags: ['Arduino IDE', 'Esp32'],
      link: '/robotic',
    },
  ];

  const galleryImages = [
    '/Images/Serti_chatbot.jpeg',
    '/Images/SertiMicro.jpeg',
    '/Images/Serti_Nodejs.jpg',
    '/Images/Serti_IBM.jpg',
  ];

  return (
    <motion.section
      className="min-h-screen bg-dark text-white pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Click the yellow arrow to see more projects"
        /> 

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-yellow-light rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-60 object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Link to={project.link} className="text-yellow-400 hover:text-blue-500">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-medium text-white border border-yellow-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ====== Gallery Section Start ====== */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-serif text-yellow-300 mb-6">
            Certificate
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
            some certificates that i got from online courses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-yellow-400/50 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* ====== Gallery Section End ====== */}

      </div>
    </motion.section>
  );
};

export default ProjectsPage;
