import React from 'react';
import './Cards.css';

const Cards = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className='cards-info'>
            <img src={logo} alt="" />
            <div className='cards-detail'>
                <h4>{name}</h4>
                <h4>Total:{total}</h4>
                <button className='card-btn'>Start Practise</button>
            </div>
        </div>
    );
};

export default Cards;