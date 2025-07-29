import { ProjectItem } from '@/types/Project';

const ProjectCard = (project: ProjectItem) => {
  return (
    <div className="p-8 h-auto min-h-[300px] bg-stone-100 z-10 border border-black/10 rounded-xl relative">
      <div className="flex ">
        <img
          src={project.icon}
          className={`${project.extraStyling} ${project.bgColor} drop-shadow-sm p-4 rounded-lg w-30 h-30`}
        />
        <div className="flex flex-col ml-5 justify-end">
          <h4 className="text-3xl font-normal text-left">{project.title}</h4>
          <p className="text-gray-700 text-lg font-bold text-left">{project.tools}</p>
        </div>
      </div>
      <p className="text-gray-600 text-xl mt-2 mb-3 ">{project.description}</p>
      <button className="text-gray-700 text-lg ring-1 ring-black/3 bg-white rounded-xl transition-all duration-400 px-4 py-2 font-bold text-left mb-4 hover:cursor-pointer hover:bg-green-300/70 hover:ring-black/10">
        <a target="_blank" rel="noopener noreferrer" href={project.deployedLink}>
          {project.deployedText}
        </a>
      </button>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-5">
        {project.images?.map((image, index) => (
          <img
            key={index}
            src={image.imgUrl}
            alt={image.alt}
            loading="lazy"
            className={`rounded-lg ${image?.object || 'object-cover'} w-full h-full ${
              image.rowSpan ? `row-span-${image.rowSpan}` : ''
            } ${image.colSpan ? `col-span-${image.colSpan}` : ''}`}
          />
        ))}
        {project.videos?.map((video, index) => (
          <video
            key={index}
            src={video.videoUrl}
            autoPlay
            muted
            loop
            preload="none"
            className={`rounded-lg w-full h-full object-cover ${video.rowSpan ? `row-span-${video.rowSpan}` : ''} ${
              video.colSpan ? `col-span-${video.colSpan}` : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
