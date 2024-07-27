import React, { useState } from "react";
import Menu from '../../components/demo/menu/menu'
import Result from "../../components/diagnostic/result";
import Questions from "../../components/diagnostic/questions";
import { useLocation } from "react-router-dom";

function Score() {
  const {state} = useLocation()
  return (
    <div>
        <div className="Completed">
            Congrats on being done!
        </div>
        <Result answer={state.answer}/>
        <Menu/>
    </div>
  )
}

export default Score