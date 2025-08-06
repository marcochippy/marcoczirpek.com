import { WorkEducationItem } from '@/types/WorkEducation';

interface WorkEducationCardClosedProps {
  item: WorkEducationItem;
  isOpen?: boolean;
}

const openCloseTransform = `transition-transform duration-300 ease-in-out hover:fill-[#000000]`;

const WorkEducationCardClosed = ({ item, isOpen = false }: WorkEducationCardClosedProps) => (
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
      <div className="mr-0 ml-auto my-auto">
        <svg
          fill={`${isOpen ? '#b8b8b8' : '#636363'}`}
          width="40px"
          height="40px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
          className={`${openCloseTransform} ${isOpen ? 'rotate-180' : 'rotate-0 '}`}>
          <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z" />
        </svg>
      </div>
    </div>
  </div>
);

export default WorkEducationCardClosed;
