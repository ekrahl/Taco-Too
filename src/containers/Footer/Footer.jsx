import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import './Footer.css';

const currentDate = new Date();

const Footer = () => {
  return (
    <div className="app__footer">
      <ul className="social-links flex__center">
        <li><a href="https://www.facebook.com/"><FaFacebookSquare color='var(--color-blue)' fontSize={40}/></a></li>
        <li><a href="https://twitter.com/?lang=en"><FaTwitterSquare color='var(--color-green)' fontSize={40}/></a></li>
        <li><a href="https://www.instagram.com/"><FaInstagramSquare color='var(--color-pink)' fontSize={40}/></a></li>
      </ul>
      <p>Taco Too © {currentDate.getFullYear()}</p>
    </div>
  )
}

export default Footer