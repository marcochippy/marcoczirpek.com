import pokeball from '@/assets/Pokemon/Pokeball.png';
import pokemon1 from '@/assets/Pokemon/pokemon-1.webp';
import pokemon2 from '@/assets/Pokemon/Pokemon-2.mp4';

export const ProjectItems = [
  {
    id: 1,
    title: 'PokeBrawl - Pokémon Game',
    description: `As part of the bootcamp, we developed a small Pokémon-inspired browser game, featuring both a frontend and backend. Players choose a Pokémon of their liking and battle through rounds against randomly generated opponents. Once defeated, they can enter their name into a global leaderboard to see how far they made it compared to others. The design and gameplay were inspired by the style of the original Pokémon games. Check out the game for yourself. I'm currently reworking the project using the Next.js framework.`,
    icon: pokeball,
    bgColor: 'bg-white',
    extraStyling: 'pixelated',
    highlight: '172 0 0',
    // githublink: '',
    // githubText: '',
    deployedLink: 'https://pokemon-mono-frontend.onrender.com/',
    deployedText: 'Check out the Game here',
    tools: 'React, Tailwindcss, Express, MongoDB',
    images: [{ imgUrl: pokemon1, rowSpan: 2, colSpan: 1, alt: 'WBS Coding bootcamp classroom' }],
    videos: [{ videoUrl: pokemon2, rowSpan: 2, colSpan: 1, alt: 'Connect Video Loop' }],
  },
];
