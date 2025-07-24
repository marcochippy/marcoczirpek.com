import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WorkEducationCard from './gallery/WorkEducationCard';
import { workEducationItems } from './gallery/items/WorkEducationItems';
import { ButtonGroup } from './gallery/items/ButtonGroup';

function WorkEducation() {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 34,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="mt-30">
      <div className="max-w-[65rem] mx-auto relative">
        <h3 className="text-3xl lg:text-3xl font-bold pb-2 ">Work & Education</h3>
        <div className="relative">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={false}
            keyBoardControl={true}
            partialVisible={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            itemClass="carousel-item-padding-40-px">
            {workEducationItems.map(project => (
              <WorkEducationCard key={project.id} project={project} />
            ))}
          </Carousel>
        </div>
        {/* <div className="mx-auto max-w-[1500px]">
          <GalleryDetails project={activeProject} />
        </div> */}
      </div>
    </div>
  );
}

export default WorkEducation;
