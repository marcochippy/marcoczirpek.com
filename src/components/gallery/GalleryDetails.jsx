import { lazy, Suspense } from "react";
import FirstStart from "./items/FirstStart.jsx";
import Loading from "./items/Loading.jsx";
import { motion } from "framer-motion";

export default function GalleryDetails({ project }) {
  if (!project)
    return (
      <div>
        <FirstStart />
      </div>
    );

  const ProjectComponent = lazy(() =>
    import(/* @vite-ignore */ `./items/${project.componentName}`)
  );

  return (
    <Suspense fallback={<Loading />}>
      <ProjectComponent />
    </Suspense>
  );
}
