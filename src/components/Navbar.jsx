import React from 'react';
import { useScroll } from '../utils/useScroll';
import { div } from 'motion/react-client';

function Navbar() {
  const isScrolled = useScroll();

  const isScrolledBlur = `mx-1 py-2 px-4 transition-all rounded-full duration-400 ${
    isScrolled ? 'backdrop-blur-md bg-white/15 ring-1 ring-black/10' : 'bg-transparent'
  }`;

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <div className="w-full max-w-[90rem] flex justify-end">
        <div
          className={`flex py-2 px-1 rounded-full transition-all duration-400 ${
            isScrolled ? 'backdrop-blur-md bg-white/5 ring-1 ring-black/10' : 'bg-transparent'
          } `}>
          <nav className="flex">
            <div className={`${isScrolledBlur}`}>About me</div>
            <div className={`${isScrolledBlur}`}>Portfolio</div>
            <div className={`${isScrolledBlur}`}>STUFF</div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
