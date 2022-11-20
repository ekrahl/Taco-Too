import React from 'react';
import Collapsible from 'react-collapsible';
import { menu } from '../../constants/data';
import './MenuDisplay.css';

export default function MenuDisplay() {
    return (

        <div className='menu-items'>

            <Collapsible className='collapsible' trigger=<h2>Appetizers</h2>>
                {menu.filter(function (item) { return item.category === "Appetizers" }).map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
                <h1 className="menu-padding">∙ ∙ ∙</h1>
            </Collapsible>

            {menu.filter(function (item) { return item.category === "Entrees" }).map((item) => (
                <div key={item.id}>
                    <Collapsible className='collapsible' trigger=<h2>{item.title}</h2>>
                        <p className="entree-padding">{item.description}</p>
                        <p style={{ paddingTop: '1rem' }}><em>{item.options}</em></p>
                        <h1 className="menu-padding">∙ ∙ ∙</h1>
                    </Collapsible>
                </div>
            ))}
            <Collapsible className='collapsible' trigger=<h2>Platos</h2>>
                <p className="menu-padding">served with rice, beans, lettuce and 2 corn tortillas</p>
                {menu.filter(function (item) { return item.category === "Platos" }).map((item) => (
                    <div key={item.id}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                <h1 className="menu-padding">∙ ∙ ∙</h1>
            </Collapsible>

            <Collapsible className='collapsible' trigger=<h2>House Specialties</h2>>
                <p className="menu-padding">served with lettuce, tomatoes, grilled onions, mushrooms and fries</p>
                {menu.filter(function (item) { return item.category === "House Specialties" }).map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                    </div>
                ))}
                <h1 className="menu-padding">∙ ∙ ∙</h1>
            </Collapsible>

        </div>
    )
}
