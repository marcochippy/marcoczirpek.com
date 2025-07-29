import pokeball from '@/assets/Pokemon/Pokeball.png';

export const ProjectItems = [
  {
    id: 1,
    title: 'Pokémon Game',
    description: `As part of the bootcamp, we developed a small Pokémon-inspired browser game within just one week, featuring both a frontend and backend. Players choose a Pokémon of their liking and battle through rounds against randomly generated opponents. Once defeated, they can enter their name into a global leaderboard to see how far they made it compared to others. The design and gameplay were inspired by the style of the original Pokémon games. Check out the game for yourself here. I'm currently reworking the project using the Next.js framework.`,
    icon: pokeball,
    bgColor: 'bg-white',
    extraStyling: 'pixelated',
    highlight: '172 0 0',
    images: [{ imgUrl: pokeball, rowSpan: 1, colSpan: 1, alt: 'WBS Coding bootcamp classroom' }],
  },
];
