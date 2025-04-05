import React from 'react';
import Header from "../components/header"; 
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';
import Clinic from '../components/Clinic';
import Specialist from '../components/Specialist';
import Feedback from '../components/Feedback';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

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
