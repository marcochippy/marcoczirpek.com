import { ProjectItem } from '@/types/Project';

const ProjectCard = (project: ProjectItem) => {
  return (
    <div className="p-8 pt-1 h-auto min-h-[300px] bg-stone-100 z-10 border border-black/10 border-t-0 rounded-b-xl relative">
      <p className="text-gray-600 text-xl -mt-1 mb-4 ">{project.description}</p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-3 gap-5">
        {project.videos?.map((video, index) => (
          <video
            key={index}
            src={video.videoUrl}
            autoPlay
            muted
            loop
            preload="none"
            className={`rounded-lg w-full h-full ${video.rowSpan ? `row-span-${video.rowSpan}` : ''} ${
              video.colSpan ? `col-span-${video.colSpan}` : ''
            }`}
          />
        ))}
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
      </div>
    </div>
  );
};

export default ProjectCard;
