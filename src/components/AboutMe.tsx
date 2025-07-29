import { motion } from 'framer-motion';
import { GithubBtn, LinkedInBtn, MailBtn } from './Btns';

const AboutMe = () => {
  const textFormat = 'md:text-xl text-base pb-3 pr-5';

  const socialSpacing = 'flex items-center place-content-between pb-5';
  const socialText = 'md:text-xl text-base pr-5 w-[75%]';

  const dragValues = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 0.95 },
    whileDrag: { scale: 0.98 },
    drag: false,
    dragConstraints: { top: -70, bottom: 70, left: -70, right: 70 },
  };

  return (
    <section
      id="About Me"
      className="relative min-h-[60vh] md:max-w-[65rem] mx-auto mb-5 md:mb-25 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 ">
      <motion.div
        {...dragValues}
        className="relative w-full max-w-[45rem] md:px-8 md:py-7 px-4 py-3 rounded-xl backdrop-blur-md bg-black/3 ring-1 ring-black/10 hover:cursor-pointer ">
        <h3 className="text-3xl font-bold pb-1 ">Designer’s Mind × Developer’s Hands</h3>
        <p className={textFormat}>I'm Marco Czirpek, born and raised in Cologne, Germany.</p>
        <p className={textFormat}>
          In September 2022, I graduated with my Bachelor's degree in Graphic Design and Visual Communication. Shortly
          after, I started as a Junior Designer at Zimmermann Editorial GmbH, an agency specialising in internal
          communications.
        </p>
        <p className={textFormat}>
          Having focused on UI/UX design in my bachelor's thesis, and having a strong passion in the field, I decided to
          deepen my understanding by completing the WBS Coding School Full-Stack Developer bootcamp in July 2025.
        </p>
        <p className="md:text-xl text-base pb-1 pr-5">
          Since completing the bootcamp, I have continued to develop my skills and build on the tools I acquired. I am
          currently working on personal projects and expanding my tech stack with tools such as TypeScript and Next.js.
        </p>
      </motion.div>
      <motion.div
        {...dragValues}
        className="md:w-[40rem] md:-ml-7 relative md:mt-85 mt-3 md:px-8 md:py-7 px-4 py-3 rounded-xl backdrop-blur-md bg-black/3 ring-1 ring-black/10 hover:cursor-pointer">
        <h3 className="text-3xl font-bold pb-4 ">My Socials</h3>
        <div className={socialSpacing}>
          <p className={socialText}>If you'd like to see more code or projects, check out my GitHub page.</p>
          <GithubBtn />
        </div>
        <div className={socialSpacing}>
          <p className={socialText}>You can find more about my professional background on LinkedIn.</p>
          <LinkedInBtn />
        </div>
        <div className="flex items-center place-content-between pb-2">
          <p className={socialText}>
            If you have any questions or want to say hello, feel free to reach out via email.
          </p>
          <MailBtn />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
