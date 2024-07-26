//C:\react-js\myreactdev\src\components\QuestionComp.js
import React from "react";
 
const QuestionComp = ({ question, handleAnswer }) => {
  const { title, options, id } = question;
  return (
    <div className="question">
      <p className="fw-bold">Question No - {id + 1} / 5</p> 
      <p className="fw-bold">{title}</p> 
      <div> 
        <input type="radio" name="box" id="one" /> 
        <input type="radio" name="box" id="two" /> 
        <input type="radio" name="box" id="three" /> 
        <input type="radio" name="box" id="four" /> 
        <label htmlFor="one" className="box first" onClick={() => handleAnswer(id, 0)}> 
          <div className="course"> <span className="circle" /> <span className="subject"> {options[0]} </span> </div> 
        </label> 
        <label htmlFor="two" className="box second" onClick={() => handleAnswer(id, 1)}> 
          <div className="course"> <span className="circle" /> <span className="subject"> {options[1]} </span> </div> 
        </label> 
        <label htmlFor="three" className="box third" onClick={() => handleAnswer(id, 2)}> 
          <div className="course"> <span className="circle" /> <span className="subject"> {options[2]} </span> </div> 
        </label> 
        <label htmlFor="four" className="box forth" onClick={() => handleAnswer(id, 3)}> 
          <div className="course"> <span className="circle" /> <span className="subject"> {options[3]} </span> </div> 
        </label> 
      </div> 
    </div>
  );
};
 
export default QuestionComp;