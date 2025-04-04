import React from 'react';
import Header from "../components/Header"; // Corrected the import to use a capitalized "Header"
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';
import Clinic from '../components/Clinic';
import Specialist from '../components/Specialist';
import Feedback from '../components/Feedback';

function Index() { // React component names should start with a capital letter
  return (
    <div>
      <Header />
      <HeroSection/>
      <Service/>
      <Clinic/>
      <Specialist/>
      <Feedback/>
      
    </div>
  );
}

export default Index;
