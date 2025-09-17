import Marco from '@/assets/Marco.webp';
import { motion } from 'framer-motion';
import { GithubBtn, LinkedInBtn, MailBtn } from './Btns';
import { floatingAnimation, floatingAnimation2, floatingAnimation3 } from '@/utils/floatingAnimation';
import { useResponsiveDrag } from '@/utils/useResponsiveDrag';
import { MotionGlobalConfig } from 'framer-motion';

const Hero = () => {
  const dragValues = useResponsiveDrag();

  const imgMarco = {
    src: Marco,
    alt: 'Picture of Marco Czirpek',
    draggable: false,
  };

  const disableAnimationsOnMobile = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      MotionGlobalConfig.skipAnimations = true;
    }
  };

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  disableAnimationsOnMobile();

  return (
    <section id="Marco Czirpek" className="min-h-[90vh] md:w-full flex items-center justify-center relative  ">
      <motion.section className="flex flex-col md:flex-row items-center justify-center h-full w-[90vw] md:w-full md:max-w-[90rem] md:ml-25 md:px-2 relative">
        <motion.div
          {...dragValues}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          className="w-[75%] md:w-[450px] justify-center md:justify-start hover:cursor-pointer -mt-10 md:mt-0 transform-gpu will-change-[transform,filter]">
          <motion.div animate={floatingAnimation} className="relative w-full">
            {isSafari ? null : (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1.15,
                }}
                transition={{
                  opacity: { delay: 0.3, duration: 3 },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
                className=" w-full md:max-w-[450px] z-[1] hidden md:flex absolute rounded-full blur-3xl md:ml-[10px] "
                {...imgMarco}
              />
            )}

            <img
              className="relative md:mt-[-100px] md:ml-[10px] w-full max-w-[450px] z-[3] rounded-full"
              fetchPriority="high"
              {...imgMarco}
            />
          </motion.div>
        </motion.div>
        <motion.div animate={floatingAnimation2}>
          <motion.div
            {...dragValues}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            className="relative hover:cursor-pointer mt-2 md:ml-[-100px] md:mt-[150px] w-full max-w-[700px] px-6 py-4 md:px-8 md:py-7 md:mb-0 mb-2 rounded-xl z-1 backdrop-blur-md bg-white/55 ring-1 ring-black/5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2 drop-shadow-lg drop-shadow-white/5">
                Hi, I'm Marco Czirpek
              </h1>
              <h2 className="text-xl md:text-xl lg:text-3xl font-light md:pb-4 pb-2 md:pr-20 drop-shadow-md drop-shadow-white/20">
                Graphic Designer (B.A.), Full-Stack Developer and Tech Enthusiast from Cologne, Germany.
              </h2>
            </div>
          </motion.div>
        </motion.div>
        <motion.div animate={floatingAnimation3}>
          <motion.div
            {...dragValues}
            initial={{ opacity: 0, x: -5, y: 80, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            className="relative hover:cursor-pointer lg:ml-[-64rem] md:ml-[-52rem] md:mt-[430px] w-[90vw] md:max-w-[340px] px-4 py-4 md:px-8 md:py-7 rounded-xl z-1 backdrop-blur-md bg-white/55 ring-1 ring-black/5">
            <h3 className="text-xl md:text-xl lg:text-[1.8rem] text-center font-bold pb-4 drop-shadow-md drop-shadow-white/20">
              Where to Find Me
            </h3>
            <div className="flex gap-4 items-center justify-center">
              <MailBtn />
              <GithubBtn />
              <LinkedInBtn />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Hero;
