const WorkEducationCard = ({ project }) => {
  return (
    <div className="p-8 pt-1 h-auto min-h-[300px] bg-stone-100 z-10 border border-black/10 border-t-0 rounded-b-xl relative">
      <p className="text-gray-600 text-xl -mt-1 mb-4 ">{project.description}</p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-3 gap-5">
        {project.videos?.map((video, index) => (
          <video key={index} src={video.videoUrl} type="video/mp4" autoPlay muted loop className="rounded-lg" />
        ))}
        {project.images?.map((image, index) => (
          <img
            key={index}
            src={image.imgUrl}
            alt={image.alt}
            className={`rounded-lg ${image?.object || `object-cover`}  w-full h-full row-span-${
              image.rowSpan
            } col-span-${image.colSpan}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkEducationCard;
