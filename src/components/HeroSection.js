import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import pexels1 from '../videos/pexels1.mp4'

function HeroSection() {
  return (
    <div className = 'hero-container'>
     <video src= {pexels1} autoPlay loop muted ></video>
      <h1></h1>
      <p></p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>CRIE SUA CONTA</Button>

        <Button className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'>SAIBA MAIS</Button>
      </div>
    </div>
  );
}

export default HeroSection;
