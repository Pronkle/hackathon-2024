import React, { useLayoutEffect, useState } from "react";
import Menu from '../../components/demo/menu/menu'
import Result from "../../components/diagnostic/result";
import Questions from "../../components/diagnostic/questions";
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap'


function Score() {
  const {state} = useLocation()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".Completed", {
          scale: 1,
          opacity: 1
      })

    return () => ctx.revert(); // <- cleanup!
  })})

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