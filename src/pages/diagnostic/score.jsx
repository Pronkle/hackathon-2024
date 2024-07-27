import React, { useState } from "react";
import Menu from '../../components/demo/menu/menu'
import Result from "../../components/diagnostic/result";

function Score() {
  const [answer, setAnswer] = useState([]);
  return (
    <div>
        <Result/>
        <Menu/>
    </div>
  )
}

export default Score