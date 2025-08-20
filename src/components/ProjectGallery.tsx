import { useState } from 'react';
import GalleryIcons from './Projects/GalleryIcons';
import ProjectCard from './Projects/ProjectCard';
import { ProjectItems } from './Projects/ProjectItems';
import { ProjectItem } from '@/types/Project';

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="Projects" className="md:mt-20 mt-5 md:mb-0 mb-10 px-5 md:px-0 w-full md:w-[65rem] mx-auto">
      <h3 className="text-3xl font-bold flex justify-center pb-3 text-center md:text-left">
        {(activeProject && 'Projects') || 'Choose a project from the bar below'}
      </h3>

      <div className="flex justify-center">
        <div className="py-3 px-2 inline-flex rounded-xl transition-all duration-400 backdrop-blur-md bg-stone-100 ring-1 ring-black/10">
          <GalleryIcons projects={ProjectItems} activeProject={activeProject} setActiveProject={setActiveProject} />
        </div>
      </div>
      {activeProject && (
        <div className="mt-5">
          <ProjectCard {...activeProject} />
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
