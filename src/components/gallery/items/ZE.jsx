import { motion } from "framer-motion";
import DP2Image from "../../../assets/ZE/Magazine_PP.webp";
import DPImage from "../../../assets/ZE/Photo_PP.webp";
import RhImage from "../../../assets/ZE/Magazine_Rhoen.webp";
import WIImage from "../../../assets/ZE/Magazine_Wie_Is.webp";
import RImage from "../../../assets/ZE/Photo_Ri.webp";
import CFImage from "../../../assets/ZE/Web_ContentForte_Mockup_Lowres.webp";
import IntroProject from "./IntroProject";

const ZEDetails = {
  headline: "Zimmermann Agentur GmbH",
  time: "10.2022 - 09.2024",
  subHead: "My time as Junior Graphic Designer",
  tools: ["Photoshop", "InDesign", "Illustrator"],
  summary: `After graduating with my Bachelor's degree in 2022, I joined Zimmermann Editorial GmbH, an agency specialising in internal communications for clients such as DHL Group, secusmart and Deutsche Bank. Working across a variety of media, including print, newsletters, mobile reporting and environmental design, has allowed me to refine my skills in both traditional and digital communication design.\n\n Working on smaller web projects made me realise how much I enjoyed the creative, challenging and technical aspects of web development. Inspired by this, I fully immersed myself in a web development bootcamp, deepening my knowledge and transitioning into more dynamic, code-driven design solutions — combining these new skills with my design knowledge.`,

  icon: "/ze-feder.svg",
  bgColor: "bg-white",
};

const ImageSettings = "h-full object-cover rounded-3xl";

export default function ZE() {
  return (
    <motion.div
      key="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-6 bg-gray-500 rounded-4xl shadow">
      <IntroProject details={ZEDetails} />
      <div className="grid grid-rows-3 grid-cols-3 gap-5">
        <div className="row-span-2 col-span-2 ">
          <img src={DPImage} alt="" className={ImageSettings} />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={WIImage} alt="" className={ImageSettings} />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={RImage} alt="" className={ImageSettings} />
        </div>
        <div className="col-span-1">
          <img src={RhImage} alt="" className={ImageSettings} />
        </div>
        <div className="col-span-1">
          <img src={CFImage} alt="" className={ImageSettings} />
        </div>
        <div className="col-span-1">
          <img src={DP2Image} alt="" className={ImageSettings} />
        </div>
      </div>
    </motion.div>
  );
}
