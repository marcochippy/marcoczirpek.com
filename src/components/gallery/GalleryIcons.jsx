import { motion } from "framer-motion";

function GalleryIcons({ projects, activeProject, setActiveProject }) {
  return (
    <div className="mx-auto">
      {projects.map((project) => (
        <motion.button
          className={`${project.bgColor} w-min-[40px] h-min-[40px] mx-3 my-2 rounded-xl cursor-pointer`}
          style={{
            filter:
              activeProject?.id === project.id
                ? "drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))"
                : "drop-shadow(0 3px 3px rgb(0 0 0 / 0.12))",
          }}
          animate={{
            scale: activeProject?.id === project.id ? 1.05 : 1,
            opacity: activeProject?.id === project.id ? 1 : 0.5,
          }}
          whileHover={{
            scale: activeProject?.id === project.id ? 1.05 : 1.025,
            opacity: 1,
            filter: "drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          whileTap={{ scale: 0.95 }}
          key={project.id}
          onClick={() => setActiveProject(project)}>
          <img src={project.icon} className="h-25 w-25 p-1 m-1" alt="" />
        </motion.button>
      ))}
    </div>
  );
}

export default GalleryIcons;
