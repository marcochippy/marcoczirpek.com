import wbsimg1 from '@/assets/WBS/Screenshot 2025-07-28 15-57-44.png';
import wbsimg2 from '@/assets/WBS/Screenshot 2025-07-28 16-02-42.png';

import pokeball from '@/assets/Pokemon/Pokeball.png';

export const ProjectItems = [
  {
    id: 1,
    componentName: 'Pokemon',
    title: 'Pokemon Game',
    description:
      'I completed an intensive four-month bootcamp in modern full-stack web development. I gained hands-on experience in developing, deploying and maintaining web applications using the latest technologies, such as JavaScript, React and Node.js.',
    icon: pokeball,
    bgColor: 'bg-white',
    extraStyling: 'pixelated',
    highlight: '172 0 0',
    images: [
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg2, rowSpan: 2, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg2, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
    ],
  },
];
