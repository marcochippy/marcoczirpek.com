import React from "react";
import { useScroll } from "../utils/useScroll";

function Navbar() {
  const isScrolled = useScroll();

  return (
    <div
      className={`flex items-center justify-center w-full z-1 py-3 duration-400 fixed ${
        isScrolled ? "backdrop-blur-sm" : "bg-transparent"
      } `}>
      <div className="flex items-center justify-between w-[1500px] mx-10">
        <nav>MARCO CZIRPEK</nav>
        <nav className="flex justify-between">
          <div className="btn mx-4">About me</div>
          <div className="btn mx-4">Portfolio</div>
          <div className="btn ml-4">STUFF</div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
