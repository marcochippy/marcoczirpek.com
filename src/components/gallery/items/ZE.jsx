import { motion } from "framer-motion";
import DPImage from "../../../assets/ZE/0U5A9480 Kopie.webp";
import RImage from "../../../assets/ZE/_I9A0108.webp";
import WIImage from "../../../assets/ZE/Wie_Is_Innenteil.webp";
import IntroProject from "./IntroProject";
import Opener from "../../../assets/ZE/_I9A0108.webp";

const ZEDetails = {
  headline: "Zimmermann Agentur GmbH",
  time: "10.2022 - 09.2024",
  subHead: "My time as Junior Graphic Designer",
  tools: ["Photoshop", "InDesign", "Illustrator"],
  summary: `After graduating with my Bachelor's degree in 2022, I joined Zimmermann Editorial GmbH, an agency specialising in internal communications for clients such as DHL Group, secusmart and Deutsche Bank. Working across a variety of media, including print, newsletters, mobile reporting and environmental design, has allowed me to refine my skills in both traditional and digital communication design.\n\n Working on smaller web projects made me realise how much I enjoyed the creative, challenging and technical aspects of web development. Inspired by this, I fully immersed myself in a web development bootcamp, deepening my knowledge and transitioning into more dynamic, code-driven design solutions — combining these new skills with my extensive design expertise.`,

  opener: Opener,
  icon: "/ze-feder.svg",
  bgColor: "bg-white",
};

export default function ZE() {
  return (
    <motion.div
      key="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-6 bg-gray-600 rounded-3xl shadow min-h-dvh">
      <IntroProject details={ZEDetails} />
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
