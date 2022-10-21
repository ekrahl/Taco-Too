import React from 'react';
import Collapsible from 'react-collapsible';

import './MenuDisplay.css';

export default function MenuDisplay() {
    return (
        <div className='menu-items'>
            <Collapsible className='collapsible' trigger=<h2>Appetizers</h2>>
                <h3>Chips and Salsa</h3>
                <p>corn tortilla chips and homemade salsa</p>
                <h3>Flautas</h3>
                <p>4 fried chicken taquitos with lettuce, tomatoes, parmesan and cucumbers</p>
                <h3>Salchi Papas</h3>
                <p>corn tortilla chips and homemade salsa</p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Quesadillas</h2>>
                <p>12" flour tortilla with cheese, vegetables, beans, rice, sour cream, hot sauce</p>
                <p style={{ paddingTop: '1rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Tacos</h2>>
                <p>corn tortilla with lettuce, cilantro, onions, tomatoes, hot sauce</p>
                <p style={{ paddingTop: '.5rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Burritos</h2>>
                <p>served with cheese, rice, beans, lettuce, sour cream, hot sauce</p>
                <p style={{ paddingTop: '.5rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Fajitas</h2>>
                <p>served with rice, beans, salad and 2 corn tortillas</p>
                <p style={{ paddingTop: '.5rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Tortas</h2>>
                <p>with beans, mayo, and vegetables</p>
                <p style={{ paddingTop: '.5rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Gorditas</h2>>
                <p>stuffed with beans, cheese, and hot sauce</p>
                <p style={{ paddingTop: '.5rem' }}><em>add chicken, steak, ground beef, shrimp, pastor, carnitas, chorizo, fish, beeftongue</em></p>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>Platos</h2>>
                <p>served with rice, beans, lettuce and 2 corn tortillas</p>
                <div>
                    <h3>Carne Asada</h3>
                    <p>marinated flank steak</p>
                </div>
                <div>
                    <h3>Pollo Con Crema</h3>
                    <p>seasoned chicken with a creamy sauce</p>
                </div>
                <div>
                    <h3>Chicken Grilled</h3>
                    <p>marinated, spiced chicken</p>
                </div>
                <div>
                    <h3>Chicharrones</h3>
                    <p>crispy fried pork belly</p>
                </div>
                <div>
                    <h3>Fish Fillet</h3>
                    <p>seasoned tilapia</p>
                </div>
                <div>
                    <h3>Camarones a la Diabla</h3>
                    <p>spicy grilled shrimp in a creamy tomato sauce</p>
                </div>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>
            <Collapsible className='collapsible' trigger=<h2>House Specialties</h2>>
                <div>
                    <p>served with lettuce, tomatoes, grilled onions, mushrooms and fries</p>
                    <h3>Steak and Cheese</h3>
                    <h3>Chicken Philly</h3>
                    <h3 style={{ paddingBottom: '2rem' }}>Cheeseburger</h3>
                </div>
                <h1>∙ ∙ ∙</h1>
            </Collapsible>

        </div>
    )
}
