import React, { useEffect, useState } from "react"

import "./style.css"
import { Link, ScrollRestoration } from "react-router-dom"



export default function Navbar() {

  useEffect(() => {
    var prevScroll = 0;
    var currentScroll = 0;
    window.addEventListener('scroll', () => {
      currentScroll = window.scrollY;
      if (prevScroll > currentScroll) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScroll = currentScroll
    })
  }, [])
    
    
    
    return (
        <div id={"navbar"}>
            <Link to="/" id="link">Home</Link>
            <Link to="/demo" id="link">Try It!</Link>
        </div>
    )
}