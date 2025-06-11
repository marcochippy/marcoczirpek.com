import { lazy, Suspense } from "react";
import FirstStart from "./items/FirstStart.jsx";

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
    <Suspense fallback={<div>Lade Projekt...</div>}>
      <ProjectComponent />
    </Suspense>
  );
}
