import { useState } from 'react';
import GalleryIcons from './gallery/GalleryIcons';
import GalleryDetails from './gallery/GalleryDetails';

const projects = [
  {
    id: 1,
    icon: '/ze-feder.svg',
    bgColor: 'bg-white',
    componentName: 'ZE',
  },
  {
    id: 2,
    icon: '/bankingclub_gmbh_logo.webp',
    bgColor: 'bg-white',
    componentName: 'BC',
  },
  {
    id: 3,
    icon: '/bankingclub_gmbh_logo.webp',
    bgColor: 'bg-white',
    componentName: 'BC',
  },
  {
    id: 4,
    icon: '/bankingclub_gmbh_logo.webp',
    bgColor: 'bg-white',
    componentName: 'BC',
  },
  {
    id: 5,
    icon: '/bankingclub_gmbh_logo.webp',
    bgColor: 'bg-white',
    componentName: 'BC',
  },
];
function ProjectGalerie() {
  const [activeProject, setActiveProject] = useState();

  return (
    <div className="border-t ">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-3xl  sm:text-3xl md:text-3xl font-bold pb-2 ">Work & Education</h2>
        <div className="flex justify-between">
          <GalleryIcons projects={projects} activeProject={activeProject} setActiveProject={setActiveProject} />
        </div>
        <div className="mx-auto max-w-[1500px]">
          <GalleryDetails project={activeProject} />
        </div>
      </div>
    </div>
  );
}

export default ProjectGalerie;
