import React from 'react';

const Cards = ({quiz}) => {
    const {name, logo} = quiz;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Cards;