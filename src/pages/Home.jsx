import React from 'react';
import Hero from '../components/Hero';
import ProjectGallery from '../components/ProjectGallery';
import AboutMe from '../components/AboutMe';
import WorkEducation from '../components/WorkEducation';

function Home() {
  return (
    <div>
      <Hero />
      <WorkEducation />
      {/* <ProjectGallery /> */}
      <AboutMe />
    </div>
  );
}

export default Home;
