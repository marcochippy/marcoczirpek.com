export interface Video {
  videoUrl: string;
  rowSpan?: number;
  colSpan?: number;
  alt?: string;
}

export interface Image {
  imgUrl: string;
  alt: string;
  object?: string;
  rowSpan?: number;
  colSpan?: number;
}

export interface WorkEducationItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
  videos?: Video[];
  images?: Image[];
}

export interface WorkEducationCardProps {
  item: WorkEducationItem;
}
