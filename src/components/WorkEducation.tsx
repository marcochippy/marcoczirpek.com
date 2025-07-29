import WorkEducationCard from './Work/WorkEducationCard';
import { workEducationItems } from './Work/WorkEducationItems';
import WorkEducationCardClosed from './Work/WorkEducationCardClosed';
import { motion, easeIn } from 'framer-motion';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const WorkEducation = () => {
  return (
    <div id="Work & Education" className="md:w-full w-[95%] mx-auto min-h-[50vh]">
      <motion.section
        className="-mt-7 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: easeIn }}>
        <div className="w-full md:max-w-[65rem] md:mx-auto relative">
          <h3 className="text-2xl md:text-3xl font-bold pb-2 ">Work & Education</h3>
          <div className="relative backdrop-blur-md">
            <Accordion transition transitionTimeout={300}>
              {workEducationItems.map(item => (
                <AccordionItem
                  key={item.id}
                  header={WorkEducationCardClosed(item)}
                  className="mb-3"
                  buttonProps={{
                    className: ({ isEnter }: { isEnter: boolean }) =>
                      `w-full text-left transition-all duration-1 ease-out ${
                        isEnter
                          ? 'opacity-100 bg-stone-100 border border-black/10 border-b-0 rounded-b-none rounded-xl'
                          : 'opacity-65 scale-99 hover:opacity-100 hover:scale-100 bg-stone-100 border border-black/10 rounded-xl'
                      }`,
                  }}
                  contentProps={{
                    className: 'transition-height duration-300 ease-out',
                  }}
                  panelProps={{
                    className: 'overflow-hidden',
                  }}>
                  <WorkEducationCard key={item.id} item={item} />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default WorkEducation;
