import React from 'react';
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';
import Clinic from '../components/Clinic';
import Specialist from '../components/Specialist';
import Feedback from '../components/Feedback';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Index() { 
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Service/>
      <Clinic/>
      <Specialist/>
      <Feedback/>
      <Newsletter/>
      <Footer/>
      
      
    </div>
  );
}

export default Index;
