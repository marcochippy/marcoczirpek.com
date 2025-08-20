import wbslogo from '@/assets/WBS/wbs_coding_school_logo.jpeg';
import wbsimg1 from '@/assets/WBS/wbs-tracker-1.webp';
import pokemon1 from '@/assets/WBS/pokemon-mockup.webp';

import zelogo from '@/assets/ZE/ze-feder.png';
import zeimg1 from '@/assets/ZE/ze-rhoen-1.webp';
import zeimg2 from '@/assets/ZE/ze-richard-2.webp';
import zeimg3 from '@/assets/ZE/ze-richard.webp';
import zeimg4 from '@/assets/ZE/ze-weava-1.webp';
import zeimg5 from '@/assets/ZE/ze-weava.webp';
import zeimg6 from '@/assets/ZE/ze-wieis.webp';

import hmkwlogo from '@/assets/HMKW/hmkw-logo.webp';
import hmkwvideo from '@/assets/HMKW/Connect_Startup-grey.mp4';
import hmkwopener from '@/assets/HMKW/Connect_Opener_Top.webp';
import hmkwimg2 from '@/assets/HMKW/Connect_Mockup_09.webp';

import bclogo from '@/assets/BC/bc-logo.webp';
import bcimg1 from '@/assets/BC/Bankingnews_Cover_Open_1.webp';
import bcimg2 from '@/assets/BC/Bankingnews_Inside_1.webp';

export const workEducationItems = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp',
    institution: 'WBS Coding School',
    period: '03.2025 - 07.2025',
    description: `I completed an intensive four-month bootcamp in modern full-stack web development, where I gained hands-on experience building responsive, user-friendly interfaces using technologies such as JavaScript and React. I worked on developing dynamic frontends that interact seamlessly with backend services and APIs. On the backend, I worked with Node.js and Express to build RESTful APIs and server-side logic. I also gained practical experience with both SQL and NoSQL databases, including PostgreSQL and MongoDB, for storing and managing application data. My training covered key backend concepts such as authentication, data modeling, and deployment.`,
    logo: wbslogo,
    images: [
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'Image from Web Development Bootcamp' },
      { imgUrl: pokemon1, rowSpan: 1, colSpan: 2, alt: 'Image from Web Development Bootcamp' },
    ],
    // videos: [{}],
  },
  {
    id: 2,
    title: 'Fulltime Junior Graphic Designer',
    institution: 'Zimmermann Editorial GmbH',
    period: '10.2022 - 09.2024',
    description: `After graduating with my Bachelor's degree in 2022, I joined Zimmermann Editorial GmbH, an agency specialising in internal communications for clients such as DHL Group, secusmart and Deutsche Bank. Working across a variety of media, including print, newsletters and mobile video reporting, has allowed me to refine my skills in both traditional and digital communication design. Working on smaller web projects made me realise how much I enjoyed the creative, challenging and technical aspects of web development.`,
    logo: zelogo,
    images: [
      { imgUrl: zeimg5, rowSpan: 2, colSpan: 2, alt: 'Image of Magazine by ZimmermannEditorial' },
      { imgUrl: zeimg6, rowSpan: 1, colSpan: 1, alt: 'Image of Magazine by ZimmermannEditorial' },
      { imgUrl: zeimg3, rowSpan: 1, colSpan: 1, alt: 'Image of Magazine by ZimmermannEditorial' },
      { imgUrl: zeimg4, rowSpan: 1, colSpan: 1, alt: 'Image of Magazine by ZimmermannEditorial' },
      { imgUrl: zeimg2, rowSpan: 1, colSpan: 1, alt: 'Image of Magazine by ZimmermannEditorial' },
      { imgUrl: zeimg1, rowSpan: 1, colSpan: 1, alt: 'Image of Magazine by ZimmermannEditorial' },
    ],
  },
  {
    id: 3,
    title: 'Graphic Design and Visual Communication (B.A.)',
    institution: 'HMKW Hochschule für Medien, Kommunikation und Wirtschaft',
    period: '10.2017 - 09.2022',
    description: `I studied Graphic Design and Visual Communication, where I developed a strong interest in the relationship between design and technology. For my bachelor's thesis, I researched the increasing use of social media due to the COVID-19 pandemic and the potential consequences for people. As a solution to the problem of people's loneliness, I developed a concept for an app called Connect that rethinks the role of social media and encourages users to engage in offline activities, alone or with others, that suit them.`,
    logo: hmkwlogo,
    images: [
      {
        imgUrl: hmkwopener,
        rowSpan: 2,
        colSpan: 2,
        alt: 'Image of multiple Connect-App mockups',
        object: 'object-cover object-left',
      },
      { imgUrl: hmkwimg2, rowSpan: 1, colSpan: 1, alt: 'Image of Connect-App mockups', object: 'object-contain' },
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
      { imgUrl: bcimg1, rowSpan: 2, colSpan: 1, alt: 'Work exhibit of BANKINGNEWS' },
      { imgUrl: bcimg2, rowSpan: 2, colSpan: 2, alt: 'Work exhibit of BANKINGNEWS' },
    ],
  },
];
