import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href="#home"><img className='logo-animation' src={images.logoOrange} alt='logo' /></a>
            </div>
            <ul className='navbar-links p__amatic'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-smallscreen">
                <GiHamburgerMenu color='var(--color-orange)' fontSize={27} className="overlay__open" onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="navbar-smallscreen_links p__amatic">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
