import WorkEducationCard from './gallery/WorkEducationCard';
import { workEducationItems } from './gallery/items/WorkEducationItems';
import WorkEducationCardClosedJs from './gallery/WorkEducationCardClosed';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function WorkEducation() {
  return (
    <div className="-mt-10">
      <div className="max-w-[65rem] mx-auto relative">
        <h3 className="text-3xl font-bold pb-2 ">Work & Education</h3>
        <div className="relative">
          <Accordion>
            {workEducationItems.map(project => (
              <AccordionItem key={project.id} header={WorkEducationCardClosedJs(project)} className="mb-3">
                <WorkEducationCard key={project.id} project={project} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default WorkEducation;
