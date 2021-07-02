import React from 'react';
import '../../App.css'
import HeroSection from '../items/HeroSection'
import Footer from '../items/Footer'
import Navbar from '../items/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
