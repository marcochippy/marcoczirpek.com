import pokeball from '@/assets/Pokemon/Pokeball.png';
import pokemon1 from '@/assets/Pokemon/pokemon-1.webp';
import pokemon2 from '@/assets/Pokemon/Pokemon-2.mp4';

import WorkoutTrackerIcon from '@/assets/WorkoutTracker/dumbbell.png';
import wbsimg1 from '@/assets/WBS/wbs-tracker-1.webp';
import wbsvid2 from '@/assets/WorkoutTracker/wbs-tracker-2.mp4';
import wbsimg3 from '@/assets/WorkoutTracker/wbs-tracker-2.webp';

import Wearhter from '@/assets/Wearther/PartlyCloudy.svg';
import Wearhtermockup1 from '@/assets/Wearther/Wearther-iphone.webp';
import Wearhtermockup2 from '@/assets/Wearther/Wearther-macbook.webp';

export const ProjectItems = [
  {
    id: 1,
    title: 'Wearther - Hourly weather forecasts with outfit recommendations',
    description: `I built a weather web app using the MERN stack that gives hourly forecasts for the next 12 hours and clothing recommendations based on the weather in the Cologne area. It has been a project full of “firsts” like working with a VPS, GitHub Actions, Cloudflare Workers and more. I plan to add more features over time.`,
    icon: Wearhter,
    bgColor: 'bg-[#87CEEB]',
    extraStyling: '',
    highlight: '135 206 235 / 0.8',
    githublink: 'https://github.com/marcochippy/Wearther',
    githubText: 'GitHub Repo here',
    deployedLink: 'https://wearther.marcoczirpek.com/',
    deployedText: 'Check out the Project here',
    tools: 'MERN Stack, AI Integration, VPS, GitHub Actions, Cloudflare Workers',
    gridSpan: 3,
    rowSpan: 1,
    images: [
      { imgUrl: Wearhtermockup1, rowSpan: 1, colSpan: 1, alt: 'Wearther Image' },
      { imgUrl: Wearhtermockup2, rowSpan: 1, colSpan: 2, alt: 'Wearther Image' },
    ],
  },
  {
    id: 3,
    title: 'PokeBrawl - Pokémon Game',
    description: `As part of the bootcamp, we developed a small Pokémon-inspired browser game, featuring both a frontend and backend. Players choose a Pokémon of their liking and battle through rounds against randomly generated opponents. Once defeated, they can enter their name into a global leaderboard to see how far they made it compared to others. The design and gameplay were inspired by the style of the original Pokémon games. Check out the game for yourself.`,
    icon: pokeball,
    bgColor: 'bg-white',
    extraStyling: 'pixelated',
    highlight: '172 0 0 / 0.3',
    // githublink: '',
    // githubText: '',
    deployedLink: 'https://pokemon-mono-frontend.onrender.com/',
    deployedText: 'Check out the Game here',
    tools: 'React, Tailwindcss, Express, MongoDB',
    gridSpan: 2,
    rowSpan: 1,
    images: [{ imgUrl: pokemon1, rowSpan: 2, colSpan: 1, alt: 'Pokemon Screenshot' }],
    videos: [{ videoUrl: pokemon2, rowSpan: 2, colSpan: 1, alt: 'Pokemon Video Loop' }],
  },
  {
    id: 2,
    title: 'Workout Tracker',
    description: `For the final project of the bootcamp, my team and I developed a social workout tracker focused on helping users find training partners based on shared workout routines and gym locations. The app includes real-time workout tracking, social features to connect with others, and an AI-powered tool that generates personalized exercise plans tailored to individual goals and preferences.`,
    icon: WorkoutTrackerIcon,
    bgColor: 'bg-[#E0A448]',
    extraStyling: '',
    highlight: '239 199 139 / 0.8',
    // githublink: '',
    // githubText: '',
    deployedLink: 'https://finalproject-frontend-d2e7.onrender.com/',
    deployedText: 'Check out the Project here',
    tools: 'React, Tailwindcss, Express, MongoDB, AI Integration',
    gridSpan: 3,
    rowSpan: 1,
    images: [
      { imgUrl: wbsimg1, rowSpan: 1, colSpan: 1, alt: 'Workout Tracker Image' },
      { imgUrl: wbsimg3, rowSpan: 1, colSpan: 1, alt: 'Workout Tracker Image' },
    ],
    videos: [{ videoUrl: wbsvid2, rowSpan: 1, colSpan: 1, alt: 'Workout Tracker Video Loop' }],
  },
];
