function GalleryIcons({ projects, setActiveProject }) {
  return (
    <div className="">
      {projects.map((project) => (
        <button key={project.id} onClick={() => setActiveProject(project)}>
          <img src={project.icon} className="w-30 h-30" alt="" />
        </button>
      ))}
    </div>
  );
}

export default GalleryIcons;
