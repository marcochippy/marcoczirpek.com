import { GalleryIconsProps, ProjectItem } from '@/types/Project';
import { motion } from 'framer-motion';

const GalleryIcons = ({ projects, activeProject, setActiveProject }: GalleryIconsProps) => {
  return (
    <div className="flex items-center">
      {projects.map((project: ProjectItem) => (
        <motion.button
          className={`${project.bgColor} scale-95 opacity-60 drop-shadow-sm rounded-xl cursor-pointer`}
          animate={{
            scale: activeProject?.id === project.id ? 1.05 : 1,
            opacity: activeProject?.id === project.id ? 1 : 0.5,
          }}
          whileHover={{
            scale: activeProject?.id === project.id ? 1.05 : 1.025,
            opacity: 1,
            filter: `drop-shadow(0 0px 10px rgb(${project.highlight} / 0.5))`,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 15,
          }}
          whileTap={{ scale: 0.95 }}
          key={project.id}
          onClick={() => setActiveProject(project)}>
          <img src={project.icon} className={`h-20 w-20 p-1 m-1 ${project.extraStyling}`} alt="" />
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryIcons;
