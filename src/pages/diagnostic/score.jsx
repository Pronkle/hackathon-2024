import React, { useState } from "react";
import Menu from '../../components/demo/menu/menu'
import Result from "../../components/diagnostic/result";
import Questions from "../../components/diagnostic/questions";

function Score() {
const [answer, setAnswer] = useState([]);
  return (
    <div>
        <Result answer={answer}/>
        <Menu/>
    </div>
  )
}

export default Score