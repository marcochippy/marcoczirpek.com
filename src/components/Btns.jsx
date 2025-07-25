import { motion } from 'framer-motion';
import mailIcon from '../assets/mail.png';

export function GithubBtn() {
  return (
    <motion.a
      className="w-[65px] drop-shadow-sm"
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 0px 10px rgb(0 0 0 / 0.3))',
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
        filter: 'drop-shadow(0 0px 12px rgb(4 116 179 / 0.5))',
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

export function MailBtn() {
  return (
    <motion.a
      className="w-[65px] h-[65px] bg-green-200 rounded-xl drop-shadow-sm flex items-center justify-center"
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 0px 12px rgb(185 248 207 / 0.6))',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 15,
      }}
      whileTap={{ scale: 0.95 }}
      href="mailto:contact@marcoczirpek.com?subject=Mail via marcoczirpek.com"
      target="_blank"
      rel="noopener noreferrer">
      <img className="h-[50px]" src={mailIcon} alt="Mail Icon" draggable={false} />
    </motion.a>
  );
}
