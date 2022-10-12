import React from 'react';
import './Quiz.css';

const Quiz = ({ showQuiz, handleCorrectItem }) => {
    const { id, question, options } = showQuiz;
    
    return (
        <div>
            <div className='quiz-question'>
                <h5>Quiz:  {question}</h5>
                <div className='option-grid'>

                    <div className='options'>
                        <input  type="radio" id="html" name="fav_language" value="HTML" /><label for="html">{options[0]}</label>
                    </div>


                    <div className='options'>
                        <input type="radio" id="html" name="fav_language" value="HTML" /><label for="html">{options[1]}</label>
                    </div>


                    <div className='options'>
                        <input type="radio" id="html" name="fav_language" value="HTML" /><label for="html">{options[2]}</label>
                    </div>


                    <div className='options'>
                        <input type="radio" id="html" name="fav_language" value="HTML" /><label for="html">{options[3]}</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Quiz;