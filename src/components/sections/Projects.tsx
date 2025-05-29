import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const Projects = ({ limit = 4 }) => {
  const projects = [
    {
      title: 'Frontend Vibe Coding Website',
      description: 'I m still exploring interactive animations and how to make the display smoother & more responsive. Also learning optimization so that the website is faster and lighter.',
      imageUrl: '/Images/Front end 1.jpg',
      tags: ['React', 'Vite', 'Tallwind', 'CSS'],
      link: '/Front',
    },
    {
      title: 'Mechanical Design',
      description: 'Still exploring how to create proper and efficient designs. Also starting to learn more complex engineering designs using Inventor.',
      imageUrl: '/Images/Mechanical 2.jpg',
      tags: ['Autocad', 'Autodesk inventor', 'Tringkerd', 'Canva'],
      link: '/Desain',
    },
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      
      
      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of projects that showcase my skills and expertise."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Link to={project.link} key={index} className="text-gray-100 hover:text-yellow-600">
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>

        {limit && projects.length > limit && (  // ✅ Gunakan logical &&
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          > 
          <Link to="/projects" className="text-yellow-400 hover:text-blue-500 inline-flex items-center gap-1">
              View all projects <ArrowRight size={20} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;