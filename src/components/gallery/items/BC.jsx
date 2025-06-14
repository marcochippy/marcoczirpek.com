import { motion } from "framer-motion";

export default function BC() {
  return (
    <motion.div
      key="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-6 bg-gray-600 rounded-lg shadow flex min-h-dvh">
      <h3 className="text-xl font-bold">BLA</h3>
      <p>Meine Design-Projekte mit Figma und Adobe XD...</p>
    </motion.div>
  );
}
