import React, { useEffect, useState } from "react";
import QuestionAns from "./questionans";
import QuestionData from "./questiondata";
import { Link } from "react-router-dom";
import './style.css'
 
const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    
  }, [])
 
  const clearChoices = () => {
    document.getElementById("one").checked = false;
    document.getElementById("two").checked = false;
    document.getElementById("three").checked = false;
    document.getElementById("four").checked = false;
  }

  const getChoices = (num) => {
    switch (answer[num]) {
      case 0:
        document.getElementById("one").checked = true;
        break;
      case 1:
        document.getElementById("two").checked = true;
        break;
      case 2:
        document.getElementById("three").checked = true;
        break;
      case 3:
        document.getElementById("four").checked = true;
        break;
    }
  }

  const handleAnswer = (id, ans) => {
    // console.log(ans)
    let temp = [...answer]; 
    temp[id] = ans;
    setAnswer([...temp]);
    // console.log(temp)
  };
 
  const handleIncrement = () => {
    setNumber(number + 1);

    clearChoices()

    // revisiting question
    if (answer.length > number+1) {
      getChoices(number+1)
    }
    if (number === 9) {
      alert("This is the Last Question");
      setShow(false)
      return;
    }
  }
  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);

    clearChoices()
    if (answer.length >= number-1) {
      getChoices(number-1)
    }
    
  };
 
  return (
    <div className="container mb-5">
      <div className="qbox"> 
        <div className="qinfo"> 
          <QuestionAns question={QuestionData[number]} handleAnswer={handleAnswer}/>
          <div className="buttons">
          <button className="prev" onClick={handleDecrement}> Prev</button>
          {show ? (
            <button className="next" onClick={handleIncrement}> Next</button>
          ) : (
            <Link to="/score" state={{answer: answer}}>
              <button className="submit">Submit</button>
            </Link>
          )}
          </div>
        </div> 
      </div>
    </div>
  );
};
 
export default Questions;