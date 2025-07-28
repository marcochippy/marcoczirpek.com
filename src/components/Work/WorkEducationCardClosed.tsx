import { WorkEducationItem } from '@/types/WorkEducation';

const WorkEducationCardClosed = (item: WorkEducationItem) => (
  <div className="p-8 h-auto max-w-[65rem] hover:cursor-pointer z-5">
    <div className="flex ">
      <img src={item.logo} alt={item.institution} className="rounded-lg w-30 h-30" />

      <div className="flex flex-col ml-5 justify-end">
        <div className="flex justify-between items-start">
          <span className="text-lg text-gray-600 font-light">{item.period}</span>
        </div>

        <h4 className="text-3xl font-normal text-left">{item.title}</h4>

        <p className="text-gray-700 text-lg font-bold text-left">{item.institution}</p>
      </div>
    </div>
  </div>
);

export default WorkEducationCardClosed;
