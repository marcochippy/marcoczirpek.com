import { lazy, Suspense } from "react";
import FirstStart from "./items/FirstStart.jsx";
import Loading from "./items/Loading.jsx";

export default function GalleryDetails({ project }) {
  if (!project)
    return (
      <>
        <FirstStart />
      </>
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
