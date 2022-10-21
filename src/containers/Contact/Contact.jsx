import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

import './Contact.css';

export default function Contact() {
    return (
        <div className='location-bg flex__center'>
            <div className='location-wrapper flex__center'>
                <div className='spacer'></div>
                <h1 className='location-title'>Location</h1>
                <p className='location-info'><a href='https://www.google.com/maps/place/Taco+Too/@38.9193517,-77.2343642,15z/data=!4m5!3m4!1s0x0:0x5d4e6a1a69279fad!8m2!3d38.9193621!4d-77.2343422'>2000 Chain Bridge Road <br /> Vienna, Virginia, 22182</a></p>
            </div>
            <div className='hours-wrapper flex__Center'>
                <h1 className='hours-title'>Hours</h1>
                <p className='hours-info'>Monday 7am - 6pm</p>
                <p className='hours-info'>Tuesday 7am - 6pm</p>
                <p className='hours-info'>Wednesday 7am - 6pm</p>
                <p className='hours-info'>Thursday 7am - 6pm</p>
                <p className='hours-info'>Friday 7am - 6pm</p>
                <p className='hours-info'>Saturday 7am - 5pm</p>
                <p className='hours-info'>Sunday 7am - 6pm</p>
            </div>
            <div className='contact-wrapper flex__center' id='contact'>
                <h1 className='contact-title'>Contact</h1>
                <p className='contact-info'><AiOutlinePhone />  571-487-7634</p>
                <p className='contact-info'><AiOutlineMail />  letstacoboutit@ilovetacotoo.com</p>
            </div>
        </div>

    )
}
