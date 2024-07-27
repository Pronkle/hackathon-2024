import React from 'react';
import { Link } from 'react-router-dom';
import QuestionData from './questiondata';
import "../../pages/diagnostic/diagnostic.css"

const Result = ({answer}) => {
    function giveResult(){
        var count = 0;
        console.log(answer)
        for(let i = 0; i < 5; i++){
            if(answer[i] === QuestionData[i].ans) count++;
        }
        return count;
    }

    return(
        <div className="fin_box">
            <div className="done_box">
                <div className='Done'>Congrats on Finishing!</div>
                <div className='Res'>You Scored {giveResult()} / 5</div>
                <Link to="/schedule" state={{answer: answer}}>
                    <button className="Finish_Button">View My Schedule</button>
                </Link>
            </div>
        </div>
    )
}

export default Result;