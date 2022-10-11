import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Cards from '../Cards/Cards';


const Home = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        
        <div>
            <Banner></Banner>
            <div>
                <Cards></Cards>
            </div>
            <h2>home page{quiz.data.length}</h2>
        </div>
    );
};

export default Home;