import { WorkEducationCardProps } from '@/types/WorkEducation';

const WorkEducationCard = ({ item }: WorkEducationCardProps) => {
  return (
    <div className="md:p-8 p-4 pt-1 h-auto min-h-[300px] bg-stone-100 z-10 border border-black/10 border-t-0 rounded-b-xl relative">
      <p className="text-gray-600 text-base md:text-xl -mt-1 mb-4 ">{item.description}</p>
      <div className="grid md:grid-flow-row md:auto-rows-max md:grid-cols-3 grid-cols-2 gap-5">
        {item.videos?.map((video, index) => (
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
        {item.images?.map((image, index) => (
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

export default WorkEducationCard;
