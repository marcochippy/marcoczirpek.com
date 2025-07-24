const WorkEducationCard = ({ project }) => {
  return (
    <div className="m-1 mr-5 p-8 h-auto min-h-[300px] bg-black/5 ring-1 ring-black/10 rounded-xl hover:cursor-pointer">
      <div className="flex">
        <img src={project.logo} alt={project.institution} className="rounded-lg w-30 h-30" />

        <div className=" flex-col ml-5 mb-0 mt-auto">
          <div className="flex justify-between items-start">
            <span className="text-lg text-gray-600 font-light">{project.period}</span>
          </div>

          <h4 className="text-3xl font-normal">{project.title}</h4>

          <p className="text-gray-700 text-lg font-bold">{project.institution}</p>
        </div>
      </div>
      <p className="text-gray-600 text-xl mb-4 mt-2 ">{project.description}</p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-3 gap-5">
        {project.videos?.map((video, index) => (
          <video
            key={index}
            src={video.videoUrl}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="rounded-lg relative mt-4"
          />
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
