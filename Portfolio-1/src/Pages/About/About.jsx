import React from 'react';
import AboutSectionAp from '../../Components/AboutSectionAP';
import ExperiencePage from '../../Components/ExperiencePage';
import MyWorldSection from '../../Components/MyWorldSection';
import DesignPhilosophy from '../../Components/DesignPhilosophy';
import Education from './Education';

const About = () => {
  return (
    <div>
      <title>About Web Developer | Maksuda Sultana Nowrin </title>
      <AboutSectionAp />
      <Education></Education>
      <ExperiencePage />
      <MyWorldSection />
      <DesignPhilosophy />
    </div>
  );
};

export default About;