import { WorkEducationItem } from '@/types/WorkEducation';

const WorkEducationCardClosed = (item: WorkEducationItem) => (
  <div className="md:p-8 p-4 h-auto max-w-[65rem] hover:cursor-pointer z-5">
    <div className="flex ">
      <img src={item.logo} alt={item.institution} className="rounded-lg md:w-30 md:h-30 w-25 h-25" />

      <div className="flex flex-col ml-5 justify-end">
        <div className="flex justify-between items-start">
          <span className="text-sm md:text-lg text-gray-600 font-light">{item.period}</span>
        </div>

        <h4 className="text-xl md:text-3xl font-normal text-left">{item.title}</h4>

        <p className="text-gray-700 text-base md:text-lg font-bold text-left">{item.institution}</p>
      </div>
    </div>
  </div>
);

export default WorkEducationCardClosed;
