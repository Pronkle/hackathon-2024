import React from 'react';
import { Link } from 'react-router-dom';
import QuestionData from './questiondata';

const Result = ({answer}) => {
    function giveResult(){
        let count = 0;
        console.log(answer)
        for(let i = 0; i < 10; i++){
            if(answer[i] === QuestionData[i].ans) count++;
        }
        return count;
    }

    return(
        <div className="welcome_box">
            <div className="row_box">
                <h2>Congrats on Finishing!</h2>
                <p>You Scored {giveResult()} / 10</p>
                <Link to="/schedule">
                    <button className="Finish_Button">MySchedule</button>
                </Link>
            </div>
        </div>
    )
}

export default Result;