import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Cards from '../Cards/Cards';
import './Home.css';

const Home = () => {
    const quizs = useLoaderData().data;
    console.log(quizs);
    return (

        <div>
            <Banner></Banner>
            <div className='home-container'>
                <div className="cards-container">
                    {
                        quizs.map(quiz => <Cards
                            key={quiz.id}
                            quiz={quiz}
                        ></Cards>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;