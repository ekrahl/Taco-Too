import React from 'react';
import MenuDisplay from '../../components/MenuDisplay/MenuDisplay';
import { FaAngleDown } from 'react-icons/fa';
import { GiInterleavedArrows } from 'react-icons/gi';
import './Menu.css';

const Menu = () => {

    return (
        <div className='menu-bg flex__center'>
            <div className='menu-cactus-bg'>
                <div className='menu-wrapper' id='menu'>
                    <h1 className='menu-title'><span><GiInterleavedArrows /></span> Menu <span><GiInterleavedArrows style={{ transform: 'rotate(90deg)' }} /></span></h1>
                    <MenuDisplay />
                    <div className='button-container'>
                        <button type='button' className='menu-down-btn'><a href='#contact'><FaAngleDown /></a></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu