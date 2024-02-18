import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function PresSection() {
  return (
    <div className='pres-container'>
      <h1>Hi, I'm Jade</h1>
      <p>Just a traveller with a camera</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
      </div>
    </div>
  );
}

export default PresSection;
