import React from 'react';
import './Quiz.css';

const Quiz = ({ showQuiz }) => {
    const { id, question, options } = showQuiz;
    return (
        <div>
            <div className='quiz-question'>
                <h5>Quiz:  {question}</h5>
                <div className='option-grid'>
                    <form>
                        <div className='options'><input type="radio" name="" id="" /><p>{options[0]}</p></div>
                    </form>
                    <form>
                        <div className='options'><input type="radio" name="" id="" /><p>{options[1]}</p></div>
                    </form>
                    <form>
                        <div className='options'><input type="radio" name="" id="" /><p>{options[2]}</p></div>
                    </form>
                    <form>
                        <div className='options'><input type="radio" name="" id="" /><p>{options[3]}</p></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quiz;