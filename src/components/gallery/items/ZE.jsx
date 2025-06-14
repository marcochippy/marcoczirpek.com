import { motion } from "framer-motion";
import DPImage from "../../../assets/ZE/0U5A9480 Kopie.webp";
import RImage from "../../../assets/ZE/_I9A0108.webp";
import WIImage from "../../../assets/ZE/Wie_Is_Innenteil.webp";

export default function ZE() {
  return (
    <motion.div
      key="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-6 bg-gray-600 rounded-3xl shadow min-h-dvh">
      <p>Time Span</p>
      <h3 className="text-2xl font-bold">Zimmermann Editorial GmbH</h3>
      <p>Text about my time there (Summary).</p>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <img src={DPImage} alt="" className="h-150 row-span-3 rounded-4xl" />
        <img src={RImage} alt="" className="h-70 col-span-2 rounded-4xl" />
        <img
          src={WIImage}
          alt=""
          className="h-70 col-span-2 row-span-2 rounded-4xl"
        />
      </div>
    </motion.div>
  );
}
