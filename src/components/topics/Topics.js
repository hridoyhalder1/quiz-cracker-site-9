import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const showQuizs = useLoaderData().data.questions;
    console.log(showQuizs);
    return (
        <div>
            {/* <h2>Topics page.{showQuizs.length}</h2> */}
            {
                showQuizs.map(showQuiz => <Quiz
                key={showQuiz.id}
                showQuiz={showQuiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Topics;