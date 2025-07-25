import WorkEducationCard from './gallery/WorkEducationCard';
import { workEducationItems } from './gallery/items/WorkEducationItems';
import WorkEducationCardClosedJs from './gallery/WorkEducationCardClosed';
import { motion } from 'framer-motion';

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';

const AccordionItem = ({ header, children, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => <div className="w-full">{header}</div>}
    className="mb-3"
    buttonProps={{
      className: ({ isEnter }) =>
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
    {children}
  </Item>
);

function WorkEducation() {
  return (
    <motion.div
      className="-mt-10 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}>
      <div className="max-w-[65rem] mx-auto relative">
        <h3 className="text-3xl font-bold pb-2 ">Work & Education</h3>
        <div className="relative backdrop-blur-md">
          <Accordion transition transitionTimeout={300}>
            {workEducationItems.map(project => (
              <AccordionItem key={project.id} header={WorkEducationCardClosedJs(project)}>
                <WorkEducationCard key={project.id} project={project} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkEducation;
