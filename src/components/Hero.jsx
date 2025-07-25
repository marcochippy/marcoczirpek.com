import Marco from '../assets/Marco.jpg';
import { motion } from 'framer-motion';
import { GithubBtn, LinkedInBtn, MailBtn } from './Btns';
import { floatingAnimation, floatingAnimation2, floatingAnimation3 } from '../utils/floatingAnimation';

function Hero() {
  const dragValues = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 0.95 },
    whileDrag: { scale: 0.98 },
    drag: true,
    dragConstraints: { top: -70, bottom: 70, left: -70, right: 70 },
  };

  const imgMarco = {
    src: Marco,
    alt: 'Picture of Marco Czirpek',
    draggable: false,
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative ml-25 px-4 md:px-8 ">
      <motion.section className="flex lg:flex-row items-center justify-center h-full w-full max-w-[90rem] relative">
        <motion.div
          {...dragValues}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          className="w-[75%] lg:w-[50%] xl:w-[450px] flex justify-center lg:justify-start hover:cursor-pointer">
          <motion.div animate={floatingAnimation} className="relative w-full">
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
              className=" w-full max-w-[450px] z-[-2] rounded-full absolute blur-3xl lg:ml-[10px] lg:mt-[-100px] border"
              {...imgMarco}
            />
            <img
              className="relative lg:mt-[-100px] lg:ml-[10px]  w-full max-w-[450px] z-[1] rounded-full"
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
            className="relative hover:cursor-pointer lg:ml-[-100px] lg:mt-[150px] w-full max-w-[700px] px-4 lg:px-8 lg:py-7 rounded-xl z-1 backdrop-blur-md bg-white/55 ring-1 ring-black/5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2 drop-shadow-lg drop-shadow-white/5">
                Hi, I'm Marco Czirpek
              </h1>
              <h2 className="text-xl md:text-xl lg:text-3xl font-light pb-5 lg:pr-20 drop-shadow-md drop-shadow-white/20">
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
            className="relative hover:cursor-pointer lg:ml-[-64rem] lg:mt-[430px] w-[340px] px-4 lg:px-8 lg:py-7 rounded-xl z-1 backdrop-blur-md bg-white/55 ring-1 ring-black/5">
            <h3 className="text-xl md:text-xl lg:text-[1.8rem] text-center font-bold pb-4  drop-shadow-md drop-shadow-white/20">
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
    </div>
  );
}

export default Hero;
