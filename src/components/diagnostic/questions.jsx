import React, { useEffect, useState } from "react";
import QuestionAns from "./questionans";
import QuestionData from "./questiondata";
import { Link } from "react-router-dom";
 
const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    
  }, [])
 
  const handleAnswer = (id, ans) => {
    // console.log(ans)
    let temp = [...answer]; 
    temp[id] = ans;
    setAnswer([...temp]);
    // console.log(temp)
  };
 
  const handleIncrement = () => {
    if (number === 9) {
      alert("This is a Last questions");
      setShow(false)
      return;
    }
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };
 
  return (
    <div className="container mb-5">
      <div className="row"> 
        <div className="col-12"> 
          <QuestionAns question={QuestionData[number]} handleAnswer={handleAnswer} />
          <div className="buttons">
          <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleDecrement}> Prev</button>
          {show ? (
            <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleIncrement}> Next</button>
          ) : (
            <Link to="/solution">
              <button className="btn btn-info px-4 py-2 fw-bold">Submit</button>
            </Link>
          )}
          </div>
        </div> 
      </div>
    </div>
  );
};
 
export default Questions;