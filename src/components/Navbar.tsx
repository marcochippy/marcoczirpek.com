'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const menus = ['Marco Czirpek', 'Work & Education', 'Projects', 'About Me'];
  const [activeSection, setActiveSection] = useState('Marco Czirpek');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-10% 0px -50% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    };

    const observer = new IntersectionObserver(entries => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        setActiveSection(visibleEntries[0].target.id);
      }
    }, options);

    menus.forEach(menu => {
      const element = document.getElementById(menu);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [menus]);

  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex md:opacity-100 px-1 lg:px-0 md:w-[65rem] pointer-events-none">
      <nav className="flex ml-auto mr-0 py-2 px-1 rounded-full transition-all duration-400 backdrop-blur-md bg-white/5 ring-1 ring-black/10 pointer-events-auto">
        {menus.map((menu, i) => {
          if (menu === 'Marco Czirpek') {
            return null;
          }
          return (
            <a
              key={i}
              href={`#${menu}`}
              className={`mx-1 py-2 px-4 transition-all rounded-full duration-400 backdrop-blur-sm ring-1 ring-black/3 hover:font-bold hover:bg-green-300/70 hover:ring-black/10 ${
                activeSection === menu ? 'bg-green-300/70 font-bold ring-black/10 ' : ''
              }`}>
              {menu}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
