import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <motion.div
      className="skill-icon"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-3 text-accent">{icon}</div>
      <span className="text-sm">{name}</span>
    </motion.div>
  );
};

export default SkillCard;