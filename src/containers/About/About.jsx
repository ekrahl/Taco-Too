import React from 'react';
import { images } from '../../constants';
import { FaAngleDown } from 'react-icons/fa';

import './About.css';

export default function About() {

  const imageUrl = window.innerWidth >= 650 ? images.prep : images.prep;

  return (
    <div className='about-wrapper'>
      <div className='about-cactus-bg'></div>
      <div className='about-bg' style={{ backgroundImage: `url(${imageUrl})` }} id='about'>
        <div className='info-container'>
          <h1 className='about-title'>About Us</h1>
          <p className='about-info'>Established in 2022, Taco Too is a locally-owned family business, serving up fresh, made-from-scratch Mexican cuisine in a casual, convenient Tyson's Corner location.</p>
        <button type='button' className='about-down-btn'><a href="#menu"><FaAngleDown /></a></button>
        </div>

      </div>
    </div>
  )
}
