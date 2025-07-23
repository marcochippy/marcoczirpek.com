import React from 'react';
import Hero from '../components/Hero';
import ProjectGallery from '../components/ProjectGallery';
import AboutMe from '../components/AboutMe';

function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ProjectGallery />
    </div>
  );
}

export default Home;
