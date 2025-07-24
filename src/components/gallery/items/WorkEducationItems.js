import wbslogo from '../../../assets/wbs_coding_school_logo.jpeg';
import wbsimg1 from '../../../assets/Marco.jpg';
import wbsimg2 from '../../../assets/react.svg';

import zelogo from '../../../assets/ZE/ze-feder.png';
import zeimg1 from '../../../assets/ZE/Magazine_PP.webp';
import zeimg2 from '../../../assets/ZE/Magazine_Rhoen.webp';
import zeimg3 from '../../../assets/ZE/Magazine_Wie_Is.webp';
import zeimg4 from '../../../assets/ZE/Photo_PP.webp';
import zeimg5 from '../../../assets/ZE/Photo_Ri.webp';
import zeimg6 from '../../../assets/ZE/Web_ContentForte_Mockup_Lowres.webp';

import hmkwlogo from '../../../assets/HMKW/hmkw-logo.webp';
import hmkwvideo from '../../../assets/HMKW/Connect_Startup.mp4';
import hmkwopener from '../../../assets/HMKW/Connect_Opener_Top3.webp';
import hmkwimg2 from '../../../assets/HMKW/connect-logo.webp';

import bclogo from '../../../assets/BC/bc-logo.webp';
import bcimg1 from '../../../assets/BC/Bankingnews_Cover_Open_1.webp';
import bcimg2 from '../../../assets/BC/Bankingnews_Inside_1.webp';

export const workEducationItems = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp',
    institution: 'WBS Coding School',
    period: '03.2025 - 07.2025',
    description:
      'I completed an intensive four-month bootcamp in modern full-stack web development. I gained hands-on experience in developing, deploying and maintaining web applications using the latest technologies, such as JavaScript, React and Node.js.',
    logo: wbslogo,
    images: [
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg2, rowSpan: 2, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg2, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
    ],
  },
  {
    id: 2,
    title: 'Fulltime Junior Graphic Designer',
    institution: 'Zimmermann Editorial GmbH',
    period: '10.2022 - 09.2024',
    description: `After graduating with my Bachelor's degree in 2022, I joined Zimmermann Editorial GmbH, an agency specialising in internal communications for clients such as DHL Group, secusmart and Deutsche Bank. Working across a variety of media, including print, newsletters, mobile reporting and environmental design, has allowed me to refine my skills in both traditional and digital communication design. Working on smaller web projects made me realise how much I enjoyed the creative, challenging and technical aspects of web development.`,
    logo: zelogo,
    images: [
      { imgUrl: zeimg4, rowSpan: 2, colSpan: 2, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: zeimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: zeimg2, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: zeimg3, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: zeimg5, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: zeimg6, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
    ],
  },
  {
    id: 3,
    title: 'Graphic Design and Visual Communication (B.A.)',
    institution: 'HMKW Hochschule für Medien, Kommunikation und Wirtschaft',
    period: '10.2017 - 09.2022',
    description: `I studied and about final project CONNECT. For my bachelor's thesis, I researched the increasing use of social media due to the COVID-19 pandemic and the potential consequences for people. As a solution to the problem of people's loneliness, the concept of an app was developed that would rethink the role of social media and allow users to engage in offline activities, alone or with others, that suit them.`,
    logo: hmkwlogo,
    images: [
      {
        imgUrl: hmkwopener,
        rowSpan: 2,
        colSpan: 2,
        alt: 'WBS Coding bootcamp classroom',
        object: 'object-cover object-left',
      },
      // { imgUrl: hmkwimg2, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom', object: 'object-contain' },
    ],
    videos: [{ videoUrl: hmkwvideo, rowSpan: 1, colSpan: 1, alt: 'Connect Video Loop' }],
  },
  {
    id: 4,
    title: 'Working Student',
    institution: 'BANKINGCLUB GmbH',
    period: '03.2018 - 07.2019 & 09.2020 - 03.2021',
    description: `During my university years, I worked as a working student at BANKINGCLUB GmbH, a hub for professionals in the banking and finance sector. This role allowed me to engage in the production of the company's print magazine, BANKINGNEWS. My responsibilities also included various design tasks, from supporting conventions to engaging in photography, eventually expanding into video content production.`,
    logo: bclogo,
    images: [
      { imgUrl: bcimg1, rowSpan: 2, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      { imgUrl: bcimg2, rowSpan: 2, colSpan: 2, alt: 'WBS Coding bootcamp classroom' },
      // { imgUrl: wbsimg2, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
      // { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' },
    ],
  },
];
