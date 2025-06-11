import { useState } from "react";
import Marco from "../assets/Marco.jpg";
import GalleryIcons from "./gallery/GalleryIcons";
import GalleryDetails from "./gallery/GalleryDetails";

const projects = [
  {
    id: 1,
    icon: "/ze-feder.svg",
    bgColor: "bg-white",
    componentName: "ProjectA",
  },
  {
    id: 2,
    icon: "/bankingclub_gmbh_logo.webp",
    bgColor: "bg-red-300",
    componentName: "ProjectB",
  },
];
function ProjectGalerie() {
  const [activeProject, setActiveProject] = useState();

  return (
    <div className="border-t">
      <div className="flex justify-between">
        <GalleryIcons projects={projects} setActiveProject={setActiveProject} />
      </div>
      <div className="mx-auto max-w-[1500px]">
        <GalleryDetails project={activeProject} />
      </div>
    </div>
  );
}

export default ProjectGalerie;
