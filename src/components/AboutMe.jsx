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
    <motion.div className="-m-5 mb-5 max-w-[65rem] mx-auto hover:cursor-pointer" {...dragValues}>
      <div className=" px-8 py-7 lg:rounded-xl backdrop-blur-md bg-black/3 ring-1 ring-black/10">
        <h3 className="text-3xl font-bold pb-1 ">Designer’s Mind × Developer’s Hands</h3>
        <p className={textFormat}>My name is Marco Czirpek, born and raised in Cologne, Germany.</p>
        <p className={textFormat}>
          After graduating with a Bachelor's degree in Graphic Design and Visual Communication in September 2022, I
          worked as a Junior Designer at Zimmermann Editorial GmbH, an agency specialising in internal communications
          for clients such as DHL Group, Deutsche Bank and Secusmart.
        </p>
        <p className="text-xl pb-1">
          Having focused on UI/UX design in my bachelor's thesis, and being interested in the field, I decided to deepen
          my expertise by completing the WBS Coding School Full-Stack Developer bootcamp in July 2025. I am now eager to
          apply and expand my digital design skills.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
