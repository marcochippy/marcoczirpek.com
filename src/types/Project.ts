export interface Image {
  imgUrl: string;
  alt: string;
  object?: string;
  rowSpan?: number;
  colSpan?: number;
}

export interface Video {
  videoUrl: string;
  rowSpan?: number;
  colSpan?: number;
  alt?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  extraStyling: string;
  highlight: string;
  githubLink?: string;
  githubText?: string;
  deployedLink?: string;
  deployedText?: string;
  tools: string;
  images?: Image[];
  videos?: Video[];
}

export interface ProjectCardProps {
  item: ProjectItem;
}

export interface GalleryIconsProps {
  projects: ProjectItem[];
  activeProject: ProjectItem | null;
  setActiveProject: (project: ProjectItem) => void;
}
