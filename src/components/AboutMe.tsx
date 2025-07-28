import { motion } from 'framer-motion';

const AboutMe = () => {
  const textFormat = 'text-xl pb-3';

  const dragValues = {
    whileHover: { scale: 1 },
    whileTap: { scale: 0.95 },
    whileDrag: { scale: 0.98 },
    drag: true,
    dragConstraints: { top: -25, bottom: 25, left: -25, right: 25 },
  };

  return (
    <section
      id="About Me"
      className="min-h-[60vh] max-w-[65rem] mt-30 mb-30 mx-auto flex lg:flex-row flex-col justify-between gap-8 ">
      <motion.div className="flex-1 max-w-[45rem] hover:cursor-pointer" {...dragValues}>
        <div className="px-8 py-7 lg:rounded-xl backdrop-blur-md bg-black/3 ring-1 ring-black/10">
          <h3 className="text-3xl font-bold pb-1 ">Designer’s Mind × Developer’s Hands</h3>
          <p className={textFormat}>My name is Marco Czirpek, born and raised in Cologne, Germany.</p>
          <p className={textFormat}>
            In September 2022, I graduated with my Bachelor's degree in Graphic Design and Visual Communication. Shortly
            after, I started as a Junior Designer at Zimmermann Editorial GmbH, an agency specialising in internal
            communications.
          </p>
          <p className={textFormat}>
            Having focused on UI/UX design in my bachelor's thesis, and having a strong passion in the field, I decided
            to deepen my understanding by completing the WBS Coding School Full-Stack Developer bootcamp in July 2025.
          </p>
          <p className="text-xl pb-1">
            Since completing the bootcamp, I have continued to develop my skills and build on the tools I acquired. I am
            currently working on personal projects and expanding my tech stack with tools such as TypeScript and
            Next.js.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="w-[20rem] mt-40 flex-shrink-0 px-8 py-7 lg:rounded-xl backdrop-blur-md bg-black/3 ring-1 ring-black/10 hover:cursor-pointer"
        {...dragValues}>
        Social things like LinkedIn, Github, Button for email
      </motion.div>
    </section>
  );
};

export default AboutMe;
