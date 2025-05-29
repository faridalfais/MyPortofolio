import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, imageUrl, tags, link }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
        <p className="text-light-dimmed mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-dark rounded text-light-dimmed"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;