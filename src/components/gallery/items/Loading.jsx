import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      key="project"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" min-h-dvh">
      LOADING
    </motion.div>
  );
}

export default Loading;
