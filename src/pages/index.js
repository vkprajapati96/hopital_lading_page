import React from 'react';
import Header from "../components/Header"; 
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';
import Clinic from '../components/Clinic';
import Specialist from '../components/Specialist';
import Feedback from '../components/Feedback';

function Index() { 
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
