import { motion } from 'framer-motion';

export function GithubBtn() {
  return (
    <motion.a
      className="w-[65px] drop-shadow-sm"
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))',
      }}
      transition={{
        type: 'spring',
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
        draggable={false}
      />
    </motion.a>
  );
}

export function LinkedInBtn() {
  return (
    <motion.a
      className="w-[65px] drop-shadow-sm"
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))',
      }}
      transition={{
        type: 'spring',
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
        draggable={false}
      />
    </motion.a>
  );
}

export function LinkedIn2Btn() {
  return (
    <motion.a
      whileHover={{ scale: 1.1, filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))' }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      drag
      dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
      className="w-[65px] drop-shadow-md"
      href="https://www.linkedin.com/in/marcoczirpek/"
      target="_blank"
      rel="noopener noreferrer">
      <img
        className="rounded-xl h-[65px] inline"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn Icon"
        draggable={false}
      />
    </motion.a>
  );
}
// function ZEIcon() {
//   return (
//     <motion.a
//       className="w-[65px] drop-shadow-md"
//       whileHover={{
//         scale: 1.1,
//         filter: "drop-shadow(0 7px 7px rgb(0 0 0 / 0.25))",
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 400,
//         damping: 15,
//       }}
//       whileTap={{ scale: 0.95 }}
//       href="https://github.com/marcochippy"
//       target="_blank"
//       rel="noopener noreferrer">
//       <img
//         className=" bg-white p-2 rounded-xl h-[65px] inline"
//         src={Marco}
//         alt="LinkedIn Icon"
//       />
//     </motion.a>
//   );
// }
