import { motion } from "framer-motion";

function GithubBtn() {
  return (
    <motion.a
      className="w-[65px] drop-shadow-md"
      whileHover={{
        scale: 1.1,
        filter: "drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      whileTap={{ scale: 0.95 }}
      href="https://github.com/marcochippy"
      target="_blank"
      rel="noopener noreferrer">
      <img
        className=" bg-white p-2 rounded-xl h-[65px] inline"
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt="LinkedIn Icon"
      />
    </motion.a>
  );
}

function LinkedInBtn() {
  return (
    <motion.a
      className="w-[65px] drop-shadow-md"
      whileHover={{
        scale: 1.1,
        filter: "drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      whileTap={{ scale: 0.95 }}
      href="https://www.linkedin.com/in/marcoczirpek/"
      target="_blank"
      rel="noopener noreferrer">
      <img
        className="rounded-xl h-[65px] inline"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn Icon"
      />
    </motion.a>
  );
}

export { GithubBtn, LinkedInBtn };
