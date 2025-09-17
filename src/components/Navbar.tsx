'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const menus = ['Marco Czirpek', 'Work & Education', 'Projects', 'About Me'];
  const [activeSection, setActiveSection] = useState('Marco Czirpek');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -30% 0px',
      threshold: [0, 0.5],
    };

    let timeoutId: number;
    const observer = new IntersectionObserver(entries => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      }, 16);
    }, options);

    menus.forEach(menu => {
      const element = document.getElementById(menu);
      if (element) observer.observe(element);
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [menus]);

  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex md:opacity-100 px-1 lg:px-0 md:w-[65rem] pointer-events-none">
      <nav
        className="flex ml-auto mr-0 py-2 px-1 rounded-full backdrop-blur-md bg-white/5 ring-1 ring-black/10 pointer-events-auto will-change-transform"
        style={{ transform: 'translateZ(0)' }}>
        {menus.map((menu, i) => {
          if (menu === 'Marco Czirpek') {
            return null;
          }
          return (
            <a
              key={i}
              href={`#${menu}`}
              className={`mx-1 py-2 px-4 rounded-full backdrop-blur-sm ring-1 ring-black/3 will-change-transform transition-all duration-200 ease-in-out hover:font-bold hover:bg-green-300/70 hover:ring-black/10 ${
                activeSection === menu ? 'bg-green-300/70 font-bold ring-black/10 ' : ''
              }`}
              style={{ transform: 'translateZ(0)' }}>
              {menu}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
