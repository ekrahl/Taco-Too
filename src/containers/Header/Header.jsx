import React, { useState } from 'react';
import { images } from '../../constants';
import { FaAngleDown } from 'react-icons/fa';
import './Header.css';
import Modal from 'react-modal';

export default function Header() {

    const imageUrl = window.innerWidth >= 650 ? images.tacosSm : images.tacos;
    const imageUrl2 = window.innerWidth >= 650 ? images.prep2 : images.prep2;

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className='header-bg flex__center' style={{ backgroundImage: `url(${imageUrl})` }} id='home'>
            <div>
                <h1 className='header-title'><span className='title1'>Authentic</span> <br /> <span className='title2'>Mexican</span> <br /> <span className='title3'>Kitchen</span></h1>
                <p className='header-subtitle'>Experience the Flavors</p>
                <div className='buttons-wrapper'>
                    <button type='button' className='header-button'>
                        <a href='#menu'>View Menu</a>
                    </button>
                    <button onClick={toggleModal} type='button' className='header-button'>Order Online</button>
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        contentLabel="Coming Soon!"
                        style={{ 

                            content: { 
                                paddingTop: '10%', 
                                backgroundImage: `url(${imageUrl2})`,
                                backgroundSize: 'cover',
                                borderRadius: '2rem',
                                margin: '8rem'
                                }
                             
                            }}
                    >
                        <div className='modal-info-wrapper'>
                            <h1>Coming Soon!</h1>
                            <button className='modal-close-button' onClick={toggleModal}>Close</button>
                        </div>
                    </Modal>
                    <button type='button' className='down-button'>
                        <a href='#about'><FaAngleDown /></a>
                    </button>
                </div>
            </div>
        </div>
    )
}
