import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    return (
        <div className='cards-info'>
            <img src={logo} alt="" />
            <div className='cards-detail'>
                <h4>{name}</h4>
                <h4>Total:{total}</h4>
                <button className='card-btn'> <Link to={`/topics/${id}`}>Start Practise</Link> </button>
            </div>
        </div>
    );
};

export default Cards;