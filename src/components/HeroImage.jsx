import React from 'react';
import './HeroImage.css';

import farmerImg from '../assets/farmer.jpg';
export default function HeroImage() {
  return (
    <div className="hero-image">
      <img
        src={farmerImg}
        alt="Farmer in field"
      />
      <div className="hero-overlay">
        <h1>Smart Farmer Weather Assistant</h1>
      </div>
    </div>
  );
}
