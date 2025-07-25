import WorkEducationCard from './gallery/WorkEducationCard';
import { workEducationItems } from './gallery/items/WorkEducationItems';
import WorkEducationCardClosedJs from './gallery/WorkEducationCardClosed';

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
    <div className="-mt-10">
      <div className="max-w-[65rem] mx-auto relative">
        <h3 className="text-3xl font-bold pb-2 ">Work & Education</h3>
        <div className="relative">
          <Accordion transition transitionTimeout={300}>
            {workEducationItems.map(project => (
              <AccordionItem key={project.id} header={WorkEducationCardClosedJs(project)}>
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
