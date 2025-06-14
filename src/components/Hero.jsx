import Marco from "../assets/Marco.jpg";
import { motion } from "framer-motion";
import { GithubBtn, LinkedInBtn } from "./Btns";

function Hero() {
  return (
    <div className="pt-[20%] md:pt-40 pb-20">
      <motion.section
        initial={{ filter: "blur(3px)", opacity: 0, y: 30 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[90rem] mx-auto px-4 md:px-8">
        <div className="w-[75%] lg:w-[50%] xl:w-[450px] relative">
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 4 }}
            className=" w-full max-w-[450px] z-[-2] absolute blur-3xl opacity-100"
            src={Marco}
            alt="Picture of Marco Czirpek"
          />
          <img
            className="w-full max-w-[450px] z-[-1] rounded-3xl"
            src={Marco}
            alt="Picture of Marco Czirpek"
          />
        </div>
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.75 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2">
            Marco Czirpek
          </h1>
          <div className="text-xl md:text-xl lg:text-2xl font-light pb-5 pr-20">
            Web developer with Bachelor of Arts and a passion for digital
            realization. I combine creative finesse with technical understanding
            – for functional, aesthetic solutions in the digital space.
          </div>
          <div className="flex gap-4">
            <GithubBtn />
            <LinkedInBtn />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Hero;
