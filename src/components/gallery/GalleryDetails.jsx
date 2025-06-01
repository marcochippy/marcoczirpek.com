import { lazy, Suspense } from "react";

export default function GalleryDetails({ project }) {
  if (!project) return <div>Wähle ein Projekt aus</div>;

  const ProjectComponent = lazy(() =>
    import(`./items/${project.componentName}`)
  );

  return (
    <Suspense fallback={<div>Lade Projekt...</div>}>
      <ProjectComponent />
    </Suspense>
  );
}
