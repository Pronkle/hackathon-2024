import React, { useEffect } from "react"

import "./style.css"
import { Link } from "react-router-dom"



export default function Navbar() {
    
    return (
        <div className={"navbar"} data-scroll-section>
            <button onClick={() => {}} id="link">About</button>
            <button onClick={() => {}} id="link">Credit</button>
            <Link to="/demo" id="link">Try It!</Link>
        </div>
    )
}